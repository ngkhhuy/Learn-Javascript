

// Hoisting : Biến khai báo bằng let cũng được hoisted ( di chuyển lên đầu phạm vi khối của nó nhưng lai
// không được khởi tạo với giá trị undefined cho nên chung ta không thể sử dụng biến trước khi khai báo


// Khai báo
//console.log('nameLet:', nameLet); // ngkhhuy

let nameLet = 'ngkhhuy'; // Khai báo biến let
console.log('nameLet:', nameLet); // ngkhhuy
// Tái khai báo : Không thể tái khai báo cùng một biến nhiều lần
//let nameLet =('ngkhhuy - Dev'); error

// Gán lại : Có thể gán lại giá trị cho biến let trong cùng một phạm vi mà không có lỗi
nameLet ='ngkhhuy Dev'
console.log('nameLet:', nameLet);