<template>
    <div class="ttseditor-toolbar">
        <button class="tool-btn" @click="onPolyphoneBtnClick">多音字</button>
    </div>
</template>
<script lang="ts">
import { SET_POLYPHONE_CMD } from '../plugins/polyphone/PolyphonePlugin';

export default {
    inject: ['$ttsEditor'],
    methods: {
        onPolyphoneBtnClick() {
            this.$ttsEditor.dispatchCmd(SET_POLYPHONE_CMD, {
                pinyin: 'kǎ'
            })
        }
    }
}
</script>
<style lang="less" scoped>
.ttseditor-toolbar {
    padding: 10px;

    .tool-btn {
        user-select: none;
    }
}
</style>