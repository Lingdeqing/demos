<template>
    <textarea id="lexical-state" ref="lexicalStateRef"></textarea>
    <div class="editor-wrapper">
        <Toolbar />
        <Editable class="lexical-editor-root" @init="onEditableInit" @change="onEditorStateChange"></Editable>
    </div>

</template>
<script lang="ts">
import type { LexicalEditor } from "lexical";
import Editable from "./components/Editable.vue"
import Toolbar from "./components/Toolbar.vue"
export default {
    components: {
        Editable,
        Toolbar
    },
    provide() {
        return {
            $ttsEditor: this
        }
    },
    methods: {
        onEditableInit({ editor }) {
            this.editable = editor as LexicalEditor
        },
        onEditorStateChange({ editorState }) {
            this.$refs.lexicalStateRef.value = JSON.stringify(editorState.toJSON(), undefined, 2);
        },
        dispatchCmd(cmd, payload) {
            this.editable.dispatchCommand(cmd, payload)
        }
    }
}
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
