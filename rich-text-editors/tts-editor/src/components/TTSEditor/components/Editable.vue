<template>
    <div ref="lexicalEditorRoot" contenteditable class="lexical-editor-root"></div>
</template>
<script lang="ts">
import { createEditor, $getRoot, $createParagraphNode, $createTextNode, type LexicalEditor } from "lexical"
import { mergeRegister } from '@lexical/utils';
import { registerRichText } from "@lexical/rich-text"
export default {
    data() {
        return {}
    },
    mounted() {
        // 初始化编辑器
        const editorIns = createEditor({
            onError: (error) => {
                throw error;
            }
        });
        editorIns.setRootElement(this.$refs.lexicalEditorRoot as HTMLElement);

        // 编辑器插件
        mergeRegister(registerRichText(editorIns));

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
            // onChange
            this.$emit('change', {
                editorState
            })
        })

        this.editorIns = editorIns
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
#lexical-state {
    width: 100%;
    height: 300px;
}

.editor-wrapper {
    border: 2px solid gray;
}
</style>
