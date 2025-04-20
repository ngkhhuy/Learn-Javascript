

// Nhóm các kiểu dữ liệu nguyên thủy - Primitive data types

// Các giá trị nguyên thủy được lưu trữ trực tiếp trong ngăn xếp ( Stack) 

// Khi các giá trị nguyên thủy được gắn cho một biến, giá trị này không thể thay đổi

// Khi thay đổi giá trị của biến, một bản sao độc lập của giá trị đó sẽ được tạo ra

// Primitive Types bao gồm các loại phổ biến sau: 

// - Number: kiểu số nguyên và số thực
let age = 18
let productPrice = 10.9
console.log('age: ', age)
console.log('productPrice: ', productPrice)

// - String: kiểu chuỗi
let username = "ngkhhuy"
console.log('username: ', username)
console.log('username type: ', typeof username)

// - Boolean: kiểu true/false
let isAvailable = true
console.log('isAvailable: ', isAvailable)
console.log('isAvailable type: ', typeof isAvailable)
let isFree = false
console.log('isFree: ', isFree)

// - Null: kiểu giá trị " rỗng" hoặc " không có gì"
let nullValue = null
console.log('nulValue: ', nullValue)
console.log('nulValue type: ', typeof nullValue)
console.log('nulValue type: ', nullValue === null )

// - Undefined: Đại diện một biến chưa được gán giá trị
let undefinedValue
console.log('undefinedValue: ', undefinedValue)
console.log('undefinedValue type: ', typeof undefinedValue)

// - Symbol: kiểu dữ liệu duy nhất và không thể thay đổi - thường sử dungj làm khóa hoặc id cho các đối tượng - Objects
let uniqueId = Symbol('id-uniqueId-abc-xyz')
console.log('uniqueId: ', uniqueId)
console.log('uniqueId type: ', typeof uniqueId)

// - BigInt: kiểu số nguyên rất lớn, lớn hơn kiểu Number thông thường ở trên
let bigNumber01 = BigInt(34567890123456789012345678901234567890)
let bigNumber02 = 34567890123456789012345678901234567890n
console.log('bigNumber01: ', bigNumber01)
console.log('bigNumber02: ', bigNumber02)
console.log('bigNumber01 type: ', typeof bigNumber01)
console.log('bigNumber02 type: ', typeof bigNumber02)


