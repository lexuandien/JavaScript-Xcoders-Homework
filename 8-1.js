var a = 10;

var x = --a + a++;
console.log(x);

// Nhấn Run để chạy code.
// Giải thích vì sao kết quả là 18.
//Answer
//x = 9 + a++; //a=9 vì --a trả về giá trị sau khi giảm luôn
//x = 9 + 9; //a=10 vì a++ trả về giá trị trước khi tăng lên 1 đơn vị
