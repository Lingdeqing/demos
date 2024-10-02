import type { EditorConfig, NodeKey, SerializedTextNode, Spread } from 'lexical';

import { $getEditor, $getNodeByKey, $getRoot, TextNode } from 'lexical';
import "./PolyphoneNode.less"
import { getActiveEditor } from '../../components/Editable.vue';

const emojiReplacementMap = new Map<string, string>([[":)", "😄"]]);
export type SerializedEmojiNode = Spread<
    {
        unifiedID: string;
        pinyin: string;
    },
    SerializedTextNode
>;

const POLYPHONE_NODE_CSS = 'polyphone-node'
export class PolyphoneNode extends TextNode {
    __unifiedID: string;
    __effectTagDom: HTMLElement | null;
    __pinyin: string;

    static getType(): string {
        return 'emoji';
    }

    static clone(node: PolyphoneNode): PolyphoneNode {
        return new PolyphoneNode(node.__unifiedID, node.__pinyin, node.__key);
    }

    constructor(unifiedID: string, pinyin: string, key?: NodeKey) {
        // const unicodeEmoji = String.fromCodePoint(
        //     ...unifiedID.split('-').map((v) => parseInt(v, 16)),
        // );
        const text = emojiReplacementMap.get(unifiedID)!
        super(text, key);

        this.__unifiedID = unifiedID.toLowerCase();
        this.__pinyin = pinyin

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
        effectTag.innerHTML = `<span class="${POLYPHONE_NODE_CSS}-remove-btn"></span><span class="${POLYPHONE_NODE_CSS}-text">${this.__pinyin}</span>`
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
    onEffectRemoveClick = (e: Event) => {
        e.stopPropagation()
        console.log('删除特效')

        const editor = getActiveEditor()
        editor.update(() => {
            const node = $getNodeByKey(this.getKey())
            node?.remove();
        })
    }
    onEffectUpdateClick = () => {
        console.log('更新特效')

        const editor = getActiveEditor()
        editor.update(() => {
            const node = $getNodeByKey(this.getKey()) as PolyphoneNode
            const newNode = new PolyphoneNode(node.__unifiedID, "heng")
            node?.replace(newNode)
        })
    }

    static importJSON(serializedNode: SerializedEmojiNode): PolyphoneNode {
        return new PolyphoneNode(serializedNode.unifiedID, serializedNode.pinyin);
    }

    exportJSON(): SerializedEmojiNode {
        return {
            ...super.exportJSON(),
            type: 'emoji',
            unifiedID: this.__unifiedID,
            pinyin: this.__pinyin,
        };
    }
}


