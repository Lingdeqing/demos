var lowestCommonAncestor = function (root, p, q) {
    if (!root) return null;  // root不存在，则没有公共祖先
    if (root === p || root === q) return root; // root就是pq之一，则最近公共祖先只可能是root，把自己站在root这个位置看
    const left = lowestCommonAncestor(root.left, p, q); // 要始终假设lowestCommonAncestor返回的就是最近公共祖先
    const right = lowestCommonAncestor(root.right, p, q);
    if (left && right) { //在root===p||root===q递归终止条件返回时，表明pq在root的左右两侧，最近公共祖先必然是root
        return root
    }
    return left || right // 上面递归的假设成立一个就是最终结果
};