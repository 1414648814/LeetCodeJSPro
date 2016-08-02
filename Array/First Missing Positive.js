/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 由于题目要求的是第一个丢掉的正数，也就是说从1开始
 * 用数组存储根据下标计算的值，nums[i] = i+1;
 * 比如nums[0] = 1,nums[1] = 2;
 * 先进行交换排序
 * 最后遍历一下首先不符合的就是答案
 */
var firstMissingPositive = function(nums) {
    if (nums.length === 0)
        return 1;
    var n = nums.length, i = 0;
    while (i < nums.length) {
        while (i < nums.length && nums[i] > 0 && nums[i] <= n && nums[i] != i + 1 && nums[nums[i] - 1] != nums[i]) {
            swap(nums, i, nums[i] - 1);
        }
        i++;
    }
    for (i = 0; i < n; i++) {
        if (nums[i] != i+1)
            return i+1;
    }
    return n+1;

    function swap(nums, a, b) {
        var temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }
};

var nums = [8,9,-1,7];
console.log(firstMissingPositive(nums));