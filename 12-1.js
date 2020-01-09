var a = [1, 2];
var b = [1, 2];
console.log(a === b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 array có vẻ giống nhau. 
//Viết câu trả lời ở dưới đây.

// Answer
//Array cũng được phân loại là object. 
Phép so sánh === giữa Objects chỉ ra kết quả True khi so sánh cùng trong 1 Object. 
An expression comparing Objects is only true if the operands reference the same Object.
Nguồn:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
