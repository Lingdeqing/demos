<template>
    <textarea id="lexical-state" ref="lexicalStateRef"></textarea>
    <div class="editor-wrapper">
        <Editable class="lexical-editor-root" @change="onEditorStateChange"></Editable>
    </div>

</template>
<script lang="ts">
import Editable from "./components/Editable.vue"
export default {
    components: {
        Editable
    },
    methods: {
        onEditorStateChange({ editorState }) {
            this.$refs.lexicalStateRef.value = JSON.stringify(editorState.toJSON(), undefined, 2);
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
