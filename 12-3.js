var a = '1000';
var b = '200';

console.log(a > b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù 1000 trông có vẻ lớn hơn 200. 
//Viết câu trả lời ở dưới đây.

//Answer
//Đây là phép so sánh 2 strings chứ ko phải số. mà so sánh 2 strings
//The algorithm to compare two strings is simple:

  //  1.Compare the first character of both strings.
  //  2.If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
  //  3.Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
  //  4.Repeat until the end of either string.
  //  5.If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.
  // All strings are encoded using UTF-16. That is: each character has a corresponding numeric code. 
  // The greater code means that the character is greater eg: The code for a (97) is greater than the code for Z (90). 
  // '2' > '1' nên ra kết quả False 
