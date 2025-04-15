

// Scope được xác định bởi cặp dấu {}

const testScope =() => {
  {
    var scopeVar ='ngkhhuy - Var';
    let scopeLet ='ngkhhuy - Let';
    const scopeConst ='ngkhhuy - Const';
    console.log('scopeVar: ', scopeVar);
    console.log('scopeLet: ', scopeLet);
    console.log('scopeConst: ', scopeConst);
  }  
  
}

testScope();

// Kết luận

// Biến let và const chỉ có giá trị trong phạm vi cùng 1 khối

// Biến khai báo bằng var có 2 trường hợp :
// - Phạm vi toàn cục nếu nó được khai báo bên ngoài bất kỳ hàm nào ( ngoài cùng của file)
// - Phạm vi cụ thể trong một hàm nếu nó được khai báo bên trong một hàm. Điều này khiến cho
// Var có Scope lỏng lẻo. nên thực thế chủ yếu dùng const và let
