let userBlance = 0;
let amountInput = document.querySelector("input");
let table = document.querySelector("table tbody")
let transactions = [];
let showBlance = () => {
    let span = document.querySelector("#userBalance")
    span.innerText = userBlance;
}
showBlance();

let depositBalance = () => {
    let amount = +amountInput.value;
   

    let transaction =  {
        balanceBefore : userBlance,
        transactionAmount : amount,
        transactionType : "deposit",
        balanceAfter : userBlance + amount,
    };
    transactions.push(transaction)
    userBlance = userBlance + amount;
    showTransActiona();
    showBlance();

}

let withdrawBalance = () => {
    let amount = +amountInput.value;
    if(userBlance >= amount){
        let transaction =  {
            balanceBefore : userBlance,
            transactionAmount : amount,
            transactionType : "withdraw",
            balanceAfter : userBlance - amount,
        };
        transactions.push(transaction)
        userBlance = userBlance - amount;
    }else {
        alert('Not Suffiend Fund')
    }
    showTransActiona();
    showBlance();
}

let showTransActiona = () => {
    table.innerHTML = "";
    transactions.forEach((el , index)=> {
        table.innerHTML += `
        <tr>
           <th>${index + 1}</th>
           <th>${el.balanceBefore} </th>
           <th>${el.transactionAmount}</th>
           <th><span class="p-1 rounded-1 ${el.transactionType == "deposit" ? "bg-success" : "bg-danger"} ">${el.transactionType}</span></th>
           <th>${el.balanceAfter} </th>
           <th>
             ${index === transactions.length - 1 ? `<button class="btn btn-danger" >X</button>` : ""}
           </th>
       </tr>
`
    })
    amountInput.value = "";
}






