/**
 * Author: George1994(wangdading)
 * CreateTime: 16/8/11.
 * Description: 在S中选一个最小的子串，使得包含T中所有的字母
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

/**
 * 思路是双指针的贪心算法
 */
var minWindow = function(s, t) {
    // 用作hash表进行记录
    var data1 = new Array(256);
    var data2 = new Array(256);

    // 初始化
    for (var i = 0; i < 256; i++) {
        data1[i] = 0;
        data2[i] = 0;
    }

    // 记录
    for (i = 0; i < t.length; i++) {
        var idx = t.charAt(i).charCodeAt();
        data1[idx]++;
        data2[idx]++;
    }

    var left = 0, right = 0;
    var count = t.length;
    var minLeft = 0;
    var minSize = Number.MAX_VALUE;

    for (; right < s.length; right++) {
        var rightIdx = s.charAt(right).charCodeAt();

        //先找出到达的尾指针的位置
        if (data2[rightIdx] > 0) {
            data1[rightIdx]--;
            // 窗口中可能存在重复的
            if (data1[rightIdx] >= 0) {
                count--;
            }
        }

        //count为0,窗口已经找到,找出尾指针后,接下来找头指针
        if (count === 0) {
            while (true) {
                var leftIdx = s.charAt(left).charCodeAt();
                // 有重复元素
                if (data2[leftIdx] > 0) {
                    if (data1[leftIdx] < 0)
                        data1[leftIdx]++;
                    else
                        break;
                }
                left++;
            }
            if (minSize > right - left + 1) {
                minSize = right - left + 1;
                minLeft = left;
            }
        }
    }

    if (minSize === Number.MAX_VALUE)
        return "";

    return s.substr(minLeft, minSize);
};

var str = "cabwefgewcwaefgcf";
var t = "cae";
var result = minWindow(str, t);
console.log(result);

