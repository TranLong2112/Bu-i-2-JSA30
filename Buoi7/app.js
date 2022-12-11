function message(param) {
    console.log(param)
}

const es6_message = (param) =>{
    console.log(param)
}
message("Hê lô hê sờ ly ly")
message([1,2,3])
message({key: 'value'})
message('hello')

// Biến toàn cục đc khai báo ngoài hàm
// Biến cục bộ đc khai báo trong thân hàm

function sum(a,b) {
    console.log(a+b)
    return a+ b;
}

sum(1,3)

console.log('hàm ko có return', message('hello'))
console.log('hàm có return', sum(6,3))