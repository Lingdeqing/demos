
import React from "react";
import { View } from "react-native";

class TimingAnimation {

    constructor(config) {
        this._toValue = config.toValue;
        this._easing = config.easing || ((n) => n);
        this._duration = config.duration || 500;
        this._delay = config.delay || 0;
    }

    start(value, onUpdate, onEnd) {
        const start = () => {
            this._fromValue = value
            this._onUpdate = onUpdate
            this._onEnd = onEnd
            this._startTime = Date.now();
            this._animationFrame = requestAnimationFrame(this.onUpdate);
        };
        if (this._delay) {
            this._timeout = setTimeout(start, this._delay);
        } else {
            start();
        }
    }

    onUpdate = () => {
        const now = Date.now();
        if (now >= this._startTime + this._duration) {
            this._onUpdate(this._fromValue + this._easing(1) * (this._toValue - this._fromValue));
            return;
        }

        this._onUpdate(
            this._fromValue +
            this._easing((now - this._startTime) / this._duration) *
            (this._toValue - this._fromValue),
        );

        requestAnimationFrame(this.onUpdate)
    }
}

class AnimatedValue {
    constructor(number) {
        this._value = number
        this._children = []
    }

    __getAnimatedValue() {
        return this._value
    }

    setValue(number) {
        this._value = number
        this.updateView()
    }

    animate(animation, callback) {
        animation.start(
            this._value,
            value => {
                this._value = value

                this.updateView()
            },
            callback
        )
    }

    __addChild(child) {
        this._children.push(child);
    }

    updateView() {
        this._children.forEach(child => {
            child.update()
        })
    }
}

class AnimatedProps {

    constructor(props, callback) {
        this._props = props || {}
        this._callback = callback
        this.__attach()
    }

    __attach() {
        if (this._props.style) {
            const style = this._props.style
            for (const key in style) {
                const value = style[key];
                if (key === 'transform') {
                    for (const transformObj of value) {
                        for (const transformKey in transformObj) {
                            if (transformObj[transformKey] instanceof AnimatedValue) {
                                transformObj[transformKey].__addChild(this)
                            }
                            break
                        }
                    }
                } else if (value instanceof AnimatedValue) {
                    value.__addChild(this);
                }
            }
        }
    }

    update() {
        this._callback && this._callback()
    }

    __getValue() {
        const props = {};
        for (const key in this._props) {
            const value = this._props[key]
            if (key === 'style') {
                props[key] = this.__getStyleAnimatedValues(value);
            } else {
                props[key] = value;
            }
        }
        return props;
    }

    __getAnimatedValue() {
        const style = this._props.style
        const props = {}
        if (style) {
            const updatedStyle = {};
            for (const key in style) {
                const value = style[key];
                if (key === 'transform') {
                    const updatedTransform = []
                    for (const transformObj of value) {
                        for (const transformKey in transformObj) {
                            if (transformObj[transformKey] instanceof AnimatedValue) {
                                updatedTransform.push({
                                    [transformKey]: transformObj[transformKey].__getAnimatedValue()
                                })
                            } else {
                                updatedTransform.push(transformObj)
                            }
                            break
                        }
                    }
                    updatedStyle[key] = updatedTransform
                } else if (value instanceof AnimatedValue) {
                    updatedStyle[key] = value.__getAnimatedValue();
                }
            }
            props.style = updatedStyle
        }
        return props
    }

    __getStyleAnimatedValues(style) {
        const updatedStyle = {};
        for (const key in style) {
            const value = style[key];
            if (key === 'transform') {
                const updatedTransform = []
                for (const transformObj of value) {
                    for (const transformKey in transformObj) {
                        if (transformObj[transformKey] instanceof AnimatedValue) {
                            updatedTransform.push({
                                [transformKey]: transformObj[transformKey].__getAnimatedValue()
                            })
                        } else {
                            updatedTransform.push(transformObj)
                        }
                        break
                    }
                }
                updatedStyle[key] = updatedTransform
            } else if (value instanceof AnimatedValue) {
                updatedStyle[key] = value.__getAnimatedValue();
            } else {
                updatedStyle[key] = value
            }
        }
        return updatedStyle;
    }
}

function createAnimatedComponent(Component) {
    class AnimatedComponent extends React.Component {
        constructor(props) {
            super(props)
            this._propsAnimated = new AnimatedProps(this.props, this._animatedPropsCallback)
        }

        _animatedPropsCallback = () => {
            this._component.setNativeProps(
                this._propsAnimated.__getAnimatedValue(),
            );
        };
        
        render() {
            const { style = {}, ...props } = this._propsAnimated.__getValue() || {};
            return (
                <Component
                    {...props}
                    style={style}
                    ref={ref => this._component = ref}
                />
            )
        }
    }

    return AnimatedComponent
}

function timing(value, config) {
    function start(callback) {
        value.animate(new TimingAnimation(config), callback)
    }
    return {
        start
    }
}

const Animated = {
    Value: AnimatedValue,
    createAnimatedComponent,
    View: createAnimatedComponent(View),
    timing,
}

export default Animated