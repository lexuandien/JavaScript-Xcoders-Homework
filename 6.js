/**
 * Cách sử dụng Array và Object khác nhau như thế nào. Viết câu trả lời ở phía dưới.
 */
 var fruits = [ "apple", "orange", "mango" ]; /* ví dụ về array*/
 var apple ={
 type: fruits,
 color: red,
 }; /* ví dụ về object*/
 /* Arrays: Thứ Tự Của Dữ Liệu Là Điều Quan Trọng Nhất. 
 Tức là các element trong array có tính chất gần như giống nhau */
 /* Objects :Thuộc Tính (Property) của đối tượng Là Quan Trọng Nhất.
 Tức là dùng objects khi đối tượng cần mô tả có nhiều thuộc tính ( chủng loại, màu sắc, cân nặng, ..vv)*/
 
 /*ÁP DỤNG THỰC TẾ*/
 /*Q: Giả dụ ứng dụng web của bạn có phần quiz, người dùng sẽ trả lời một số câu hỏi và nhận lại điểm sau khi hoàn thành. 
    Bạn muốn lưu tất cả câu trả lời của người dùng để sau đó có thể kiểm tra lại chúng một cách hiệu quả. 
    Bạn nên lưu dữ liệu như thế nào? Tại sao?*/
    /*A: Lưu trữ dữ liệu dưới dạng array , mỗi câu trả lời của người dùng là một element trong array 
    với số thứ tự tương ứng với thứ tự các câu hỏi */
 /*Q: Giả dụ người dùng tạo hồ sơ mới trên trang của bạn với tên riêng, họ, email và mật khẩu. 
    Bạn muốn lưu trữ thông tin này lại trước khi gửi về backend. 
    Cấu trúc nào bạn sẽ dùng để lưu dữ liệu? Tại sao?*/
    /*A: Sử dụng Object để lưu dữ liệu. Bởi vì đối tượng người dùng có nhiều thuộc tính (tên riêng, họ, email, pass,...vv)*/
 /*Q: Giả dụ bạn đang xây dựng một forum, bạn cần xếp hạng nhận xét dựa theo lượt votes. 
    Cấu trúc dữ liệu nào phù hợp nếu bạn cần theo dõi của nội dung nhận xét và số lượng votes của từng nhận xét? */
    /*A:  Sử dụng kết hợp array và object, mỗi element của aray là 1 object với các property như ( nd nhận xét, lượt vote..)  */
