// Hoisting: biến khai báo bằng var sẽ được hoisted ( Di chuyển lên đầu phạm vi khối ( scope_) của nó) và đồng
// thời được khởi tạo với giá trị undefined cho nên chung ta có the su dung bien truoc khi khai bao 


// Tái khai báo: có thể tái khai báo cùng một biến var nhiều lần trong cùng một phạm vi mà không có lỗi 

// Tái gán: có thể tái gán giá trị cho biến var trong cùng một phạm vi mà không có lỗi
 
console.log('namevar:', nameVar); // undefined

var nameVar = 'ngkhhuy'; 
console.log('namevar:', nameVar); // ngkhhuy

//biến namevar được khai báo sau nhưng sẽ được đẩy lên đầu khối với giá trị và undefined
var nameVar = 'ngkhhuy - Developer'; // Tái khai báo
console.log('namevar:', nameVar); // ngkhhuy - Developer

nameVar = 'ngkhhuy - Developer - Web'; // Tái gán 
console.log('namevar:', nameVar); // ngkhhuy - Developer - Web


