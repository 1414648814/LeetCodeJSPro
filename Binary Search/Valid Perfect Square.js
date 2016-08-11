/**
 * @param {number} num
 * @return {boolean}
 */
// 使用二分法进行计算
var isPerfectSquare = function(num) {
    var l = 0, r = num;
    while (l <= r) {
        var mid = Math.floor((l + r) >> 1);
        var sqmid = mid * mid;
        if (sqmid > num) r = mid - 1;
        else if (sqmid < num) l = mid + 1;
        else return true;
    }
    return false;
};

/*
 用了动态规划
 Explanation:
 It can be build using dynamic programming:
 Sqrt    Sqr
 1       1
 3
 2       4   = 3 + 1
 5
 3       9   = 5 + 4
 7
 4       16  = 9 + 7
 9
 5       25  = 16 + 9
 11
 6       36  = 25 + 11
 13
 7       49  = 36 + 13
 15
 8       64  = 49 + 15
 17
 9       81  = 64 + 17
 19
 10      100 = 81 + 19
 */
var isPerfectSquare = function(num) {
    var start = 1;
    var curr = 1;
    var temp;

    if (num === 1)
        return true;
    while (curr <= num) {
        start += 2;
        temp = start + curr;
        if (temp <= num) {
            curr = temp;
            if (curr === num)
                return true;
        }
        else {
            return false;
        }
    }

};

var num = 14;
var result = isPerfectSquare(num);
console.log(result);