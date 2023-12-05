document.getElementById("loanForm").addEventListener("submit", function(event){
    event.preventDefault(); // this will prevent the form from auto-submitting

     // geting the vlues that users type

    const principal = parseFloat(document.getElementById("principal").value)
    console.log(principal)

    const rate = parseFloat(document.getElementById("rate").value)
    console.log(rate)

    const tenor = parseFloat(document.getElementById("tenur").value)
    console.log(tenor)

    const interest = (principal * rate * tenor)/100;

    const totalAmount = principal + interest;
    const resultDiv = document.getElementById("result"); 

    resultDiv.innerHTML =  `  
        <h3>Loan Details:</h3>
        <p>Principal: ${principal}</p>
        <p>Rate: ${rate}%</p>
        <p>Tenor: ${tenor} years</p>
        
        `    
    ;
   
   

});



{/* <h3>Calculated Interest:</h3>
        <p>Interest: ${interest.toFixed(2)}</p>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>  */}




