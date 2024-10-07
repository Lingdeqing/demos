/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type LexicalEditor, TextNode, createCommand, COMMAND_PRIORITY_LOW, COMMAND_PRIORITY_EDITOR, $getSelection, type RangeSelection, $getNodeByKey } from 'lexical';

import { PolyphoneNode } from './PolyphoneNode';

function $polyphoneNodeTransform(node: TextNode, editor: LexicalEditor) {
    if (!node.isSimpleText() || node.hasFormat('code')) {
        return;
    }

    const text = node.getTextContent();

    // Find only 1st occurrence as transform will be re-run anyway for the rest
    // because newly inserted nodes are considered to be dirty
    const emojiMatch = findEmoji(text);
    if (emojiMatch === null) {
        return;
    }

    let targetNode;
    if (emojiMatch.position === 0) {
        // First text chunk within string, splitting into 2 parts
        [targetNode] = node.splitText(
            emojiMatch.position + emojiMatch.shortcode.length,
        );
    } else {
        // In the middle of a string
        [, targetNode] = node.splitText(
            emojiMatch.position,
            emojiMatch.position + emojiMatch.shortcode.length,
        );
    }

    const emojiNode = new PolyphoneNode(emojiMatch.unifiedID, 'kǎ')
        // In token mode node can be navigated through character-by-character,
        // but are deleted as a single entity (not invdividually by character).
        // This also forces Lexical to create adjacent TextNode on user input instead of
        // modifying Emoji node as it now acts as immutable node.
        .setMode('token');
    targetNode.replace(emojiNode);

    return () => {
        // 节点销毁
    }
}

export function registerPolyphone(editor: LexicalEditor): () => void {
    // We don't use editor.registerUpdateListener here as alternative approach where we rely
    // on update listener is highly discouraged as it triggers an additional render (the most expensive lifecycle operation).
    return editor.registerNodeTransform(TextNode, (node: TextNode) => {
        return $polyphoneNodeTransform(node, editor)
    });
}

export type POLYPHONE_CMD_OPTION = {
    pinyin: string
}
export const SET_POLYPHONE_CMD = createCommand<POLYPHONE_CMD_OPTION>('SET_POLYPHONE_CMD')
export function registerPolyphoneCmd(editor: LexicalEditor) {
    return editor.registerCommand(SET_POLYPHONE_CMD, (payload: POLYPHONE_CMD_OPTION) => {
        editor.update(() => {
            const selection = $getSelection() as RangeSelection
            if (!selection) return;
            const word = selection.getTextContent()
            const wordLen = 1
            if (!word || word.length > wordLen) return
            console.log(selection, word)

            const focusNode = $getNodeByKey(selection.focus.key) as TextNode
            console.log(focusNode)

            let targetNode
            const offset = Math.min(selection.anchor.offset, selection.focus.offset);
            if (offset === 0) {
                [targetNode] = focusNode.splitText(1)
            } else {
                [, targetNode] = focusNode.splitText(offset, offset + wordLen)
            }
            const polyphoneNode = new PolyphoneNode(word, payload.pinyin)
                .setMode('token');
            targetNode.replace(polyphoneNode);
        })
        return true
    }, COMMAND_PRIORITY_EDITOR);
}

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


export type EmojiMatch = Readonly<{
    position: number;
    shortcode: string;
    unifiedID: string;
}>;

/**
 * Map where keys are possible replacements while values are unified emoji IDs
 * These IDs are essentially hex encoded UTF-8 characters
 */
const emojiReplacementMap = new Map<string, string>([[":)", "😄"]]);;

/**
 * Finds emoji shortcodes in text and if found - returns its position in text, matched shortcode and unified ID
 */
export default function findEmoji(text: string): EmojiMatch | null {
    const skippedText: string[] = [];

    for (const word of text.split(' ')) {
        if (!emojiReplacementMap.has(word)) {
            skippedText.push(word);
            continue;
        }
        if (skippedText.length > 0) {
            // Compensate for space between skippedText and word
            skippedText.push('');
        }

        return {
            position: skippedText.join(' ').length,
            shortcode: word,
            unifiedID: word,
        };
    }

    return null;
}

