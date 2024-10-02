/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type LexicalEditor, TextNode } from 'lexical';

import { $createEmojiNode } from './PolyphoneNode';

function $textNodeTransform(node: TextNode): void {
    console.log(111)
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

    const emojiNode = $createEmojiNode(emojiMatch.unifiedID);
    targetNode.replace(emojiNode);
}

export function registerPolyphone(editor: LexicalEditor): () => void {
    // We don't use editor.registerUpdateListener here as alternative approach where we rely
    // on update listener is highly discouraged as it triggers an additional render (the most expensive lifecycle operation).
    return editor.registerNodeTransform(TextNode, $textNodeTransform);
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

