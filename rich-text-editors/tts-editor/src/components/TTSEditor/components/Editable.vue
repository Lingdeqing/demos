<template>
    <div class="editable">
        <div ref="lexicalEditorRoot" contenteditable class="lexical-editor-root"></div>
    </div>
</template>
<script lang="ts">
import { createEditor, $getRoot, $createParagraphNode, $createTextNode, type LexicalEditor } from "lexical"
import { mergeRegister } from '@lexical/utils';
import { registerRichText } from "@lexical/rich-text"

import { PolyphoneNode } from "../plugins/polyphone/PolyphoneNode"
import { registerPolyphone, registerPolyphoneCmd } from "../plugins/polyphone/PolyphonePlugin"

export let activeEditor: LexicalEditor | null = null; // 当前激活的编辑器
export function getActiveEditor() {
    if (!activeEditor) {
        throw Error(`Unable to find an active editor. This method can only be used synchronously during the callback of editor.update() or editor.read().`);

    }
    return activeEditor
}
export default {
    data() {
        return {}
    },
    mounted() {
        // 初始化编辑器
        const editorIns = createEditor({
            nodes: [PolyphoneNode],
            onError: (error) => {
                throw error;
            }
        });
        editorIns.setRootElement(this.$refs.lexicalEditorRoot as HTMLElement);

        // 编辑器插件
        mergeRegister(
            registerRichText(editorIns),
            registerPolyphone(editorIns)
        );

        registerPolyphoneCmd(editorIns)

        editorIns.update(() => {
            const root = $getRoot();
            if (root.getFirstChild() !== null) {
                return
            }
            const para = $createParagraphNode();
            const text = $createTextNode('hello');
            para.append(text);
            root.append(para)
        })

        this.updateListener = editorIns.registerUpdateListener(({ editorState }) => {
            activeEditor = editorIns;
            // onChange
            this.$emit('change', {
                editorState
            })
        })

        this.editorIns = editorIns
        this.$emit('init', {
            editor: editorIns
        })
    },
    beforeDestroy() {
        this.updateListener();
    },
    methods: {
        addLocalSpeed() {

        },
        updateLocalSpeed() {

        },
        removeLocalSpeed() {

        }
    }
};
</script>
<style lang="less" scoped>
.editable {
    padding: 10px;
}

.lexical-editor-root {
    outline: none;
}
</style>
