//k神解释： https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/solution/236-er-cha-shu-de-zui-jin-gong-gong-zu-xian-hou-xu/
// 应该这样定义函数功能：1. p q都能找到 返回最近公共祖先 2. p q 找到一个，返回p q 3. 都没找到 返回null
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