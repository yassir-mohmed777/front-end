function additeam(){
    let phonename = prompt("ادخل اسم الهاتف")
    let pricephone = +prompt("ادخل سعر الهاتف")
    let Qtyphone = +prompt("ادخل الكمية المتاحة")
    phone.push(phonename)
    price.push(pricephone)
    QTtY.push(Qtyphone)
    showitems()
}

function showitems(){
    console.clear()
    phone.forEach(function (el , index){
        console.log(index + 1 + " - " + el + " price : " + price[index] + " QQTY OF: " + QTtY[index])
    })
}
 function deleteiteam(){
    let delte = +prompt("ادخل رقم المسح") - 1
    phone.splice(delte , 1)
    price.splice(delte , 1)
    QTtY.splice(delte , 1)
    showitems()
 }
function Ubdateiteam(){
    let indexofiteam = +prompt("ادخل رقم الهاتف للتديل") - 1
    let newprices = +prompt("ادخل السعر الجديد")
    price.splice(indexofiteam , 1 , newprices)
    showitems()
}