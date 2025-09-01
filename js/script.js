// console.log('js is connected');

// Step 2 - declaring all the constants globally
    const incomeField = parseFloat(document.getElementById("income").value);
    const softwareField = parseFloat(document.getElementById("software").value);
    const coursesField = parseFloat(document.getElementById("courses").value);
    const internetField = parseFloat(document.getElementById("internet").value);

    // if you observe you will see i wrote income, software ... inside {}, this means I am trying to show the output in form of object.
    // console.log({incomeField, softwareField, coursesField, internetField});
    console.table({incomeField, softwareField, coursesField, internetField});

// Step 1 - catching the calculate btn by ID
const calculateBtn = document.getElementById("calculate");
calculateBtn.addEventListener('click', function(){
    // console.log('click is working');

/* // Step 2 - declaring all the constants globally
    const incomeField = parseFloat(document.getElementById("income").value);
    const softwareField = parseFloat(document.getElementById("software").value);
    const coursesField = parseFloat(document.getElementById("courses").value);
    const internetField = parseFloat(document.getElementById("internet").value); */


    // Step 3 - doing the calculation of our expenses. 
    const totalExpenses = softwareField + coursesField + internetField;
    console.log(totalExpenses);

    // Step 4 - Finding the balance by subtracting Income from expense
    const remainingBalance = incomeField - totalExpenses;
    console.log(remainingBalance);
    console.table({totalExpenses, remainingBalance});

    // Step 5 - Now that we have total expense and remaining balance we will set this value in the result section
    const totalExpensesSetInField = document.getElementById("total-expenses");
    totalExpensesSetInField.innerText = totalExpenses.toFixed(2);

    const remainingBalanceSetInField = document.getElementById("balance");
    remainingBalanceSetInField.innerText = remainingBalance.toFixed(2);

    const resultContainer = document.getElementById("results");
    resultContainer.classList.remove("hidden")
})


// Step 6 - catch the saving btn
const calculateSavingsBtn = document.getElementById("calculate-savings");
calculateSavingsBtn.addEventListener("click", function(){
    // console.log('btn is clicked');

    // Step 7 - fetching the savings input field
    const savingFieldPercentage = parseFloat(document.getElementById("savings").value);
    console.log(savingFieldPercentage);

    // 
});