import React from "react";
import ReactDOM from "react-dom";

const proto = Object.create(HTMLElement.prototype, {
    attachedCallback: {
      value: function() {
        const mountPoint = document.createElement('span');
        this.createShadowRoot().appendChild(mountPoint);
  
        const name = this.getAttribute('name');
        const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
        ReactDOM.render(<a href={url}>{name}</a>, mountPoint);
      }
    }
  });
  document.registerElement('x-search', {prototype: proto});

export default class Dialog extends React.Component{
    
    render(){
        return (
            <div>Hello <x-search name="web-components"></x-search>!</div>
        )
    }
}