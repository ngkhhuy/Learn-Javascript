

// Nhóm các kiểu dữ liệu tham chiếu - Reference data types

// Các giá trị tham chiếu không được lưu trữ trực tiếp trong ngăn xếp ( Stack) mà sẽ tham chiếu đến địa chỉ của đối tượng trong Heap Memory
// Các giá trị tham chiếu có thể thay đổi sau khi chúng được tạo ra
// Khi gán một một đối tượng A cho B thì cả A và B sẽ tham chiếu đến cùng một đối tượng , chứ không tạo ra bản sao độc lập riêng biệt

// Các kiểu dữ liệu tham chiếu bao gồm:
// - Object: kiểu đối tượng, đại diện cho một tập hợp các thuộc tính và phương thức
let developer = {
    username: 'ngkhhuy',
    age: 18,
    greet: function() {
        console.log('Hello my name is '+ this.username + ' my age is ' + this.age)
        console.log(`Hello my name is ${this.username} my age is ${this.age}`)
    }
}
developer.greet()
console.log('developer.username: ', developer.username)

// Array : kiểu mảng, là một loại đối tượng đặc biệt để lưu trữ danh sách các giá trị
let color = ['red', 'green', 'blue', 'yellow']
console.log('color: ', color)
console.log('color[0]: ', color[0])
console.log('color[1]: ', color[1])

// Function: Kiểu hàm, đại diện cho các hàm xử lý
function weatherInfo(city) {
    console.log(`The weather in ${city} is sunny`)
}
weatherInfo('Hanoi')