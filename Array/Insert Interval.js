 function Interval(start, end) {
     this.start = start;
     this.end = end;
 };

/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
/**
 如果新区间的end < 当前区间的start，不用找下去了，把新区间插入到当前区间的前面，然后返回。
 如果当前区间的end小于新区间的start，继续遍历找下一个区间。
 如果当前区间和新区间发生重合，则start取两者最小的start，end取两者最大的end，生成一个新的区间。
 继续遍历。

 如果遍历一直到末尾也没发生区间重合，就把新区间插入到原来ArrayList的末尾。
 */
Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
};

Array.prototype.removeAt=function(index){
    this.splice(index,1);
};

Array.prototype.remove=function(obj){
    var index=this.indexOf(obj);
    if (index>=0){
        this.removeAt(index);
    }
};

var insert = function(intervals, newInterval) {
    if (intervals === null || newInterval === null)
        return intervals;

    if (intervals.length === 0) {
        intervals.push(newInterval);
        return intervals;
    }

    for (var i = 0; i < intervals.length; i++) {
        var item = intervals[i];
        if (newInterval.end < item.start) {
            intervals.insert(i, newInterval);
            return intervals;
        }
        else {
            if (newInterval.start > item.end) {
                continue;
            }
            else {
                intervals.remove(item);
                i--;
                newInterval.start = Math.min(newInterval.start, item.start);
                newInterval.end = Math.max(newInterval.end, item.end);
            }
        }
    }
    intervals.push(newInterval);
    return intervals;
};

var interval1 = new Interval(1,5);
var interval2 = new Interval(6,8);
var intervals = [interval1, interval2];

var interval3 = new Interval(5,6);

var result = insert(intervals, interval3);
console.log(result);