

// Javascript là ngôn ngữ được định kiểu dữ liệu linh hoạt ( dynamic ) điều này rất tiện lợi nhưng lại cũng đồng nghĩa với việc
//dễ xảy ra bug phát sinh trong quá trình code nếu chưa nắm rõ cốt lõi về kiểu dữ liệu


let x
x = 7
x = 'ngkhhuy'
x = true
x = null
x = undefined
console.log(x)

//  Ví dụ nhanh sự khác nhau cơ bản giữa kiểu dữ liệu nguyên thủy và tham chiếu

// 1. Kiểu dữ liệu nguyên thủy
let username = 'ngkhhuy'
let usernameCopy = username
usernameCopy = 'ngkhhuy - copy'
console.log('username: ', username)
console.log('usernameCopy: ', usernameCopy)

// 2. Kiểu dữ liệu tham chiếu
let objectA = {
    name: 'ngkhhuy',
    age: 18
}
let objectB = objectA
objectB.name = 'ngkhhuy - copy'
console.log('objectA: ', objectA)
console.log('objectB: ', objectB)