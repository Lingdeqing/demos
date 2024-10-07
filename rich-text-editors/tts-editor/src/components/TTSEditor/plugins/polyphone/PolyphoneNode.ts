import type { EditorConfig, NodeKey, SerializedTextNode, Spread } from 'lexical';
import { $getNodeByKey, TextNode } from 'lexical';

import "./PolyphoneNode.less"

import { getActiveEditor } from '../../components/Editable.vue';

export type SerializedPolyphoneNode = Spread<
    {
        pinyin: string;
    },
    SerializedTextNode
>;

const POLYPHONE_NODE_CSS = 'polyphone-node'

export class PolyphoneNode extends TextNode {
    effectDom: HTMLElement | null;
    pinyin: string;

    static getType(): string {
        return 'polyphone';
    }

    static clone(node: PolyphoneNode): PolyphoneNode {
        return new PolyphoneNode(node.__text, node.pinyin, node.__key);
    }

    constructor(text: string, pinyin: string, key?: NodeKey) {
        super(text, key);
        this.pinyin = pinyin
        this.effectDom = null;
    }

    /**
     * DOM that will be rendered by browser within contenteditable
     * This is what Lexical renders
     */
    createDOM(_config: EditorConfig): HTMLElement {
        const dom = document.createElement('span');
        dom.className = POLYPHONE_NODE_CSS;
        dom.innerText = this.__text;
        this.createEffectDom(dom);
        return dom;
    }

    createEffectDom(textNode: HTMLElement) {
        const bottomLine = document.createElement('span');
        bottomLine.className = `${POLYPHONE_NODE_CSS}-bottom-line`
        bottomLine.contentEditable = "false";
        textNode.appendChild(bottomLine)


        const effectTag = document.createElement('span');
        effectTag.className = `${POLYPHONE_NODE_CSS}-effect-tag`
        effectTag.contentEditable = "false"
        effectTag.innerHTML = `<span class="${POLYPHONE_NODE_CSS}-remove-btn"></span><span class="${POLYPHONE_NODE_CSS}-text">${this.pinyin}</span>`
        textNode.appendChild(effectTag)

        this.effectDom = effectTag;

        this.bindEvents();
    }
    bindEvents() {
        const effectTagDom = this.effectDom!;
        effectTagDom.addEventListener('click', this.onEffectUpdateClick)
        effectTagDom.querySelector(`.${POLYPHONE_NODE_CSS}-remove-btn`)
            ?.addEventListener('click', this.onEffectRemoveClick)
    }
    unbindEvents() {
        const effectTagDom = this.effectDom;
        if (!effectTagDom) return;
        effectTagDom.removeEventListener('click', this.onEffectUpdateClick)
        effectTagDom.querySelector(`.${POLYPHONE_NODE_CSS}-remove-btn`)
            ?.removeEventListener('click', this.onEffectRemoveClick)
    }
    onEffectRemoveClick = (e: Event) => {
        e.stopPropagation()
        console.log('删除特效')

        const editor = getActiveEditor()
        editor.update(() => {
            const node = $getNodeByKey(this.getKey())
            const textNode = new TextNode(this.__text)
            node?.replace(textNode)
        })
    }
    onEffectUpdateClick = () => {
        console.log('更新特效')

        const editor = getActiveEditor()
        editor.update(() => {
            const node = $getNodeByKey(this.getKey()) as PolyphoneNode
            const newNode = new PolyphoneNode(node.__text, "heng")
            node?.replace(newNode)
        })
    }

    static importJSON(serializedNode: SerializedPolyphoneNode): PolyphoneNode {
        return new PolyphoneNode(serializedNode.text, serializedNode.pinyin);
    }

    exportJSON(): SerializedPolyphoneNode {
        return {
            ...super.exportJSON(),
            type: 'polyphone',
            pinyin: this.pinyin,
        };
    }
}


