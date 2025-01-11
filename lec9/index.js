// let tShart = prompt("enter prise")
// let disinp = prompt("enter disk")
// let discaont = ( disinp / 100) * tShart
// let prise = tShart - discaont
// document.write("السعر قبل الخصم" + tShart +"لسعر بعد الخصم :" + prise)

// let parthyears = prompt("enter your parthday");
// let age = 2025 - parthyears;

// if (age >= 18) {
//     let issudani = prompt("هل انت سوداني ")
//     if (issudani == "yes") {

//         document.write("انت الان في القوات السودانية")
//     } else {
//         document.write("للاسف انت لست سوداني")
//     }
// }
// else {
//     document.write("لم تبغ 18 عام للاسف ")
// }

// بيبع نصوص فقط(+)prompt لان ال
// let Allmany = +prompt("كم يبلغ المال الذي معك")
// let goldvalue = 85 * 3000
// if (Allmany >= goldvalue) {
//     let isYear = prompt("هل مر عليه عام")
//     if (isYear == "yes") {
//         let zkaa = (2.5 / 100) * Allmany
//         document.write("الزكاة هي :" + zkaa)
//     } else {
//         document.write("لم يبلغ عام ليس عليك ذكاة")
//     }
// } else {
//     document.write("لم يبلغ النصاب")
// }

// let amr = prompt("هل الامر اامرك")
// if (amr == "yes"){
//     let yadk = prompt("هل في شي في يدك")
//     if (yadk == "yes" ){
//         document.write("هتشتري يخت في جزيرة لوحدك")

//     }else {
//         document.write("مفيش شي بيدك")
//     }
// } else{
//     document.write("مع السلامة")
// }
// let q1 = confirm("هل انت بتهتم ")
// if (q1 == true) {
//     let q2 = confirm("هل انت ببتحس يعم")
//     if (q2 = true) {
//         let q3 = confirm("هل انت عندك دم")
//         if (q3 == true) {
//             document.write("مبروووك مصااالحاك ")
//         } else {
//             document.write("مخاصما32")
//         }
//     } else {
//         document.write("مخاصماك2")
//     }
// } else {
//     document.write("مخصماك")
// }
// let Dgree = +prompt("ادخل الدرجة بتاعتك")
// if (Dgree >= 50) {
//     if (Dgree <= 100) {
//         document.write("مبرووك النجاح")
//     } else {
//         document.write("رقم غير صحيح")
//     }
// }
// else {
//     document.write("ياسااقط يااا فااشل")
// }



/*
       (||)  ي حال عكسنا المنطق (&&) ممكن ان نقلب الى 
                                             (example)
                    if(username != usernameDB || password != passwordDB){   

let username = prompt("ادخل اسم المستخدم")
let password = prompt("ادخل الرقم السري")
let usernameDB = "ali";
let passwordDB = "123ali"
if(username == usernameDB && password == passwordDB){
    document.write("مرحبا بك")
}
else{
    document.write("خطا في الايميل او كلمة السر")
}
*/


//             (( swich   مثال عايزسنه بال ))
// // let from = prompt("من اين انت")
// if (from == "cairo") {
//     document.write("بونص 0")
// }
// else if (from == "alex") {
//     document.write("خصم 20%")
// }
// else if (from == "aswam") {
//     document.write("خصم 30%")
// }
// else  {
//     document.write("15%")
// }





//TaskOne
// let userDgree = +prompt("أدخل الدرجة الحائز عليها")
// if (userDgree <= 100) {
//     if (userDgree >= 85) {
//         document.write("ممتاز")
//     }
//     else {
//         if (userDgree >= 75) {
//             document.write("جيد جدا")
//         }
//         else {
//             if (userDgree >= 65) {
//                 document.write("جيد")
//             }
//             else {
//                 if (userDgree >= 50) {
//                     document.write("مقبول")
//                 }
//                 else {
//                     if (userDgree < 50) {
//                         document.write("رقم غير صحيح")
//                     }
//                 }
//             }
//         }
//     }
// } else {
//     document.write("رقم غير صحيح")
// }

            // TaskTow
// let MerasValue = +prompt("أدخل قيمة الميراث")
// let Zawga = confirm("هل هناك زوجة")
// if (Zawga == true) {
//     let Mzawga = MerasValue * 0.125
//     let ManyAwlad = +prompt("كم عدد الاولاد")
//     let ManyBanat = +prompt("كم عدد البنات")
//     let Bagymeras = (MerasValue - Mzawga)
//     let Manysham = (2 * ManyAwlad + ManyBanat)
//     let sham = (Bagymeras / Manysham)
//     document.write("قيمة ميراث الزوجة :" + Mzawga )
//     document.write("قيمة ميراث الولد الواحد: :" +  (2 * sham))
//     document.write("قيمة ميراث البنت الواحدة :" + sham)
// }
// else if (Zawga == false){
//     let ManyAwlad = +prompt("كم عدد الاولاد")
//     let ManyBanat = +prompt("كم عدد البنات")
//     let Manysham = (2 * ManyAwlad + ManyBanat)
//     let sham = (MerasValue / Manysham)
//     document.write("قيمة ميراث الولد الواحد: :" +  (2 * sham))
//     document.write("قيمة ميراث البنت الواحدة :" + sham)
// }

    //    Task-three
/*let from = prompt("من اين انت")
switch (from){
    case "cairo":
        document.write("بونص 0")
        break;
        case "alex":
            document.write("خصم 20%")
            break;
            case "aswan":
                document.write("خصم 30%")
                break;
                    default:
                        document.write("15%")       
}
*/

