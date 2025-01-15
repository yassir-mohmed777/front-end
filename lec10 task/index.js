function calculator() {
    
    let userInput = prompt("أدخل المعادلة الرياضي :");

    try {
        
        let result = eval(userInput);
        
        
        console.log("النتيجة: " + result);
    } catch (e) {
        
        console.log("حدث خطأ: " + e.message);
    }
}


calculator();

// لا نستخدم هذه الدالة لانها خطرة على امان المعلومات