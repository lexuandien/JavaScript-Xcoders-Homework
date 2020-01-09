var a = [1, 2];
var b = [1, 2];
console.log(a === b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 array có vẻ giống nhau. 
//Viết câu trả lời ở dưới đây.

// Answer
//Array cũng được phân loại là object. 
//Two distinct objects are never equal for either strict or abstract comparisons.
//Nguồn:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
