/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
/**
 * 可以使用深度优先搜索DFS来解决
 */
var combine = function(n, k) {
    var result = [], temp = [];
    backtrack(1);
    return result;

    function backtrack (level) {
        if (temp.length === k) {
            result.push(temp.slice());
            return;
        }
        for (var i = level; i <= n; i++) {
            temp.push(i);
            backtrack(i + 1);
            temp.pop();
        }
    }
};

var n = 4,k = 2;
var result = combine(n, k);
console.log(result);