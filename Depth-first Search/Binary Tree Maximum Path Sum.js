/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/**
 * 自下往上进行递归计算
 * 首先我们分析一下对于指定某个节点为根时，最大的路径和有可能是哪些情况。
 * 第一种是左子树的路径加上当前节点，第二种是右子树的路径加上当前节点，
 * 第三种是左右子树的路径加上当前节点（相当于一条横跨当前节点的路径），
 * 第四种是只有自己的路径。乍一看似乎以此为条件进行自下而上递归就行了，
 * 然而这四种情况只是用来计算以当前节点根的最大路径，
 * 如果当前节点上面还有节点，那它的父节点是不能累加第三种情况的。
 * 所以我们要计算两个最大值，一个是当前节点下最大路径和，另一个是如果要连接父节点时最大的路径和。
 * 我们用前者更新全局最大量，用后者返回递归值就行了。
 */
var maxPathSum = function(root) {
    if (root === null) return 0;
    var result = Number.MIN_VALUE;
    searchPath(root);
    return result;

    function searchPath (node) {
        if (node === null) return 0;
        var left = searchPath(node.left);
        var right = searchPath(node.right);

        // 连接父结点的最大路径是一二四这三种情况的最大值
        var curSum = Math.max(node.val, Math.max(left + node.val, right + node.val));
        // 当前节点的最大路径就是一二三四这四种情况的最大值
        var curMax = Math.max(curSum, left + right + root.val);
        // 用当前最大值更新全局最大
        result = Math.max(curMax, result);
        return curSum;
    }
};
