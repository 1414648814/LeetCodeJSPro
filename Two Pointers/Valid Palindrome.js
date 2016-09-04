/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //将大写字母转成小写字母,并去除空格
    var str = s.toLocaleLowerCase().trim();
    var start = 0, end = str.length - 1;
    while (start < end) {
        if (!isValid(str.charAt(start))) {
            start ++;
            continue;
        }
        if (!isValid(str.charAt(end))) {
            end --;
            continue;
        }
        if (str.charAt(start) !== str.charAt(end))
            return false;
        start++;
        end--;
    }
    return true;

    // 判断是否是字母或者数字
    function isValid (c) {
        return (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
    }
};