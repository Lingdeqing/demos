

function split(nums) {
    let visited = {}
    function recur(path, target) {
        if (target === 0) {
            return path.length === nums.length / 2 ? path : false
        }
        if (target < 0) {
            return false
        }

        for (let i = 0; i < nums.length; i++) {
            if (visited[i]) continue;
            visited[i] = true;
            path.push(nums[i])
            const sub = recur(path, target - nums[i])
            if (sub) {
                return sub
            }
            path.pop()
            visited[i] = false
        }
        return false
    }
    const total = nums.reduce((sum, cur) => sum += cur)
    if (total % 2 !== 0) return false
    return recur([], total / 2)
}



console.log(split([2, 3, 4, 5]))


class A {
    /**
       * 删除段尾最后一个字符前，检查前面是不是特效节点，如果是，在光标后面插入一个空格
       * @param range 
       */
    removeParagraphLastCharacter(range) {
        // @ts-ignore
        window.$ = $
        if (range.collapsed && range.startContainer.nodeType === 3 && range.startOffset === 1) {
            if (this.isNodeAtParagraphEnd(range.startContainer) && this.isNodeAfterEffect(range.startContainer)) {
                debugger
            }
        }
    }
    // node处于段落尾部
    isNodeAtParagraphEnd(node) {
        // 跳过空节点，向前找到下一个领居
        const nextNode = getNextSatisfyNode(
            node,
            () => true,
            node => $(node).text() === ''
        )

        // 下一个节点 不在编辑器内， 或者是编辑器内的下一个段落
        if (nextNode && (!this.isNodeInEditor(nextNode) || $(nextNode).is('div'))) {
            return true
        }
        return false
    }
    // node处于特效后面
    isNodeAfterEffect(node) {
        // 跳过空节点，向前找到第一个特效节点
        const prevEffectNode = getPrevSatisfyNode(
            node,
            node => $(node).is('.isTag'),
            node => $(node).text() === ''
        )
        return !!prevEffectNode
    }
    // 节点是否在编辑器内
    isNodeInEditor(node) {
        return Boolean($(node).parents('#editor').get(0))
    }

}

/**
 * 向后/向前，找到第一个满足调节的节点
 * @param {*} node 起点
 * @param {*} satisfy 节点是否满足条件
 * @param {*} [ignore=null] 是否忽略不满足的节点，默认不忽略，如果遇到不能忽略的节点，直接终止搜索
 * @param {*} [forward=false] 是否朝前搜索，默认朝前
 * @returns 
 */
function getFirstSatisfyNode(node, satisfy, ignore = null, forward = false) {
    if (!node) return null

    const sibling = forward ? node => node.previousSibling : node => node.nextSibling
    ignore = ignore || (() => false)

    do {
        if (!sibling(node)) {
            let parent = node.parentNode
            while (parent && !sibling(parent)) {
                parent = parent.parentNode
            }
            if (!parent && !sibling(parent)) return null
            node = sibling(parent)
        } else {
            node = sibling(node)
        }

        if (ignore(node)) {
            return null
        } else if (satisfy(node)) {
            return node
        }
    } while (node)

    return null
}

function getNextSatisfyNode(node, satisfy, ignore = null) {
    return getFirstSatisfyNode(node, satisfy, ignore)
}
function getPrevSatisfyNode(node, satisfy, ignore = null) {
    return getFirstSatisfyNode(node, satisfy, ignore, true)
}