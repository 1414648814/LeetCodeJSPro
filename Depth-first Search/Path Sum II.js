/**
 * Author: George1994(wangdading)
 * CreateTime: 16/8/11.
 * Description: 二叉树中指定和路径
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */

/**
 * 注意最后要减去之前增加的数值,以及从数组中删除
 */
var pathSum = function(root, sum) {
    //1.边界判断
    if (root === null)
        return [];

    var curSum = 0;
    var temp = [], result = [];
    helper(root, curSum);
    return result;

    function helper(node, curSum) {
        if (node === null)
            return;
        curSum += node.val;
        temp.push(node.val);
        if (node.left === null && node.right === null && curSum === sum) {
            result.push(temp.slice());
        }

        if (node.right)
            helper(node.right, curSum);
        if (node.left)
            helper(node.left, curSum);

        curSum -= node.val;
        temp.pop();
    }
};