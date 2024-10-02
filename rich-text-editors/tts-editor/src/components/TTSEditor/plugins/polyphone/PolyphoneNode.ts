import type { EditorConfig, NodeKey, SerializedTextNode, Spread } from 'lexical';

import { TextNode } from 'lexical';

const emojiReplacementMap = new Map<string, string>([[":)", "😄"]]);
export type SerializedEmojiNode = Spread<
    {
        unifiedID: string;
    },
    SerializedTextNode
>;

// @emoji-datasource-facebook is defined in vite.config.ts
const BASE_EMOJI_URI = new URL(`@emoji-datasource-facebook/`, import.meta.url)
    .href;

export class PolyphoneNode extends TextNode {
    __unifiedID: string;

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
    }

    /**
     * DOM that will be rendered by browser within contenteditable
     * This is what Lexical renders
     */
    createDOM(_config: EditorConfig): HTMLElement {
        const dom = document.createElement('span');
        dom.className = 'emoji-node';
        // dom.style.backgroundImage = `url('${BASE_EMOJI_URI}/${this.__unifiedID}.png')`;
        dom.innerText = this.__text;
        return dom;
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
