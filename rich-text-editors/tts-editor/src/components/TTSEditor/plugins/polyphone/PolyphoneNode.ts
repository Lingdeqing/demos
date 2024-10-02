import type { EditorConfig, NodeKey, SerializedTextNode, Spread } from 'lexical';

import { TextNode } from 'lexical';
import "./PolyphoneNode.less"

const emojiReplacementMap = new Map<string, string>([[":)", "😄"]]);
export type SerializedEmojiNode = Spread<
    {
        unifiedID: string;
    },
    SerializedTextNode
>;

const POLYPHONE_NODE_CSS = 'polyphone-node'
export class PolyphoneNode extends TextNode {
    __unifiedID: string;
    __effectTagDom: HTMLElement | null;

    static getType(): string {
        return 'emoji';
    }

    static clone(node: PolyphoneNode): PolyphoneNode {
        return new PolyphoneNode(node.__unifiedID, node.__key);
    }

    constructor(unifiedID: string, key?: NodeKey) {
        // const unicodeEmoji = String.fromCodePoint(
        //     ...unifiedID.split('-').map((v) => parseInt(v, 16)),
        // );
        const text = emojiReplacementMap.get(unifiedID)!
        super(text, key);

        this.__unifiedID = unifiedID.toLowerCase();

        this.__effectTagDom = null;
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
        effectTag.innerHTML = `<span class="${POLYPHONE_NODE_CSS}-remove-btn"></span><span class="${POLYPHONE_NODE_CSS}-text">kǎ</span>`
        textNode.appendChild(effectTag)

        this.__effectTagDom = effectTag;

        this.bindEvents();
    }
    bindEvents() {
        const effectTagDom = this.__effectTagDom!;
        effectTagDom.addEventListener('click', this.onEffectUpdateClick)
        effectTagDom.querySelector(`.${POLYPHONE_NODE_CSS}-remove-btn`)
            ?.addEventListener('click', this.onEffectRemoveClick)
    }
    unbindEvents() {
        const effectTagDom = this.__effectTagDom;
        if (!effectTagDom) return;
        effectTagDom.removeEventListener('click', this.onEffectUpdateClick)
        effectTagDom.querySelector(`.${POLYPHONE_NODE_CSS}-remove-btn`)
            ?.removeEventListener('click', this.onEffectRemoveClick)
    }
    onEffectRemoveClick(e: Event) {
        e.stopPropagation()
        console.log('删除特效')
    }
    onEffectUpdateClick() {
        console.log('更新特效')
    }

    static importJSON(serializedNode: SerializedEmojiNode): PolyphoneNode {
        return $createEmojiNode(serializedNode.unifiedID);
    }

    exportJSON(): SerializedEmojiNode {
        return {
            ...super.exportJSON(),
            type: 'emoji',
            unifiedID: this.__unifiedID,
        };
    }
}


export function $createEmojiNode(unifiedID: string): PolyphoneNode {
    const node = new PolyphoneNode(unifiedID)
        // In token mode node can be navigated through character-by-character,
        // but are deleted as a single entity (not invdividually by character).
        // This also forces Lexical to create adjacent TextNode on user input instead of
        // modifying Emoji node as it now acts as immutable node.
        .setMode('token');

    return node;
}
