
// add
function add(a,b){
    return a+b;
}
// sub
function sub(a,b){
    return a-b;
}


var no1 = prompt('enter first no :','0')
var no2 = prompt('enter second no :','0')

no1 = parseInt(no1),
no2 = parseInt(no2)

var add1 = add(no1,no2);
var sub1 = sub(no1,no2)

document.write('Addition ',add1);
document.write('Subtraction ',sub1);









