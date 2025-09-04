// validation 4 - Function to class ID and get value
function getInputValueByID(id){
    const value = parseFloat(document.getElementById(id).value);
    return value;
//     return parseFloat(document.getElementById(id).value);
};


// Validation 5 - show error
function showErrorById(id){
     document.getElementById(id).classList.remove("hidden");
};

// validation 6 - toFixed
function formateCurrency(amount){
    return `${amount.toFixed(2)}`;
}

// validation 7 - history section
function addToHistory(incomeField, totalExpenses, remainingBalance){
    // step 12 - styling the dive and appending child in the history part
    const historyItem = document.createElement("div");
    historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500';

    historyItem.innerHTML = `
         <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
         <p class="text-xs text-gray-500">Income: ${formateCurrency(incomeField)}</p>
         <p class="text-xs text-gray-500">Expenses: ${formateCurrency(totalExpenses)}</p>
         <p class="text-xs text-gray-500">Balance: ${formateCurrency(remainingBalance)}</p>
    `;

    const historyContainer = document.getElementById("history-list");
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
}

// Step 1 - catching the calculate btn by ID
const calculateBtn = document.getElementById("calculate");
calculateBtn.addEventListener('click', function(){
    // console.log('click is working');

    // validation 4.1 
    const incomeField = getInputValueByID("income");
    const softwareField = getInputValueByID("software");
    const coursesField = getInputValueByID("courses");
    const internetField = getInputValueByID("internet");
    // console.log(incomeField);


// Step 2 - declaring all the constants globally
/*  const incomeField = parseFloat(document.getElementById("income").value);
    const softwareField = parseFloat(document.getElementById("software").value);
    const coursesField = parseFloat(document.getElementById("courses").value);
    const internetField = parseFloat(document.getElementById("internet").value); */

    // if you observe you will see i wrote income, software ... inside {}, this means I am trying to show the output in form of object.
    // console.log({incomeField, softwareField, coursesField, internetField});
    // console.table({incomeField, softwareField, coursesField, internetField});

    // Validation 1:
    if(incomeField <= 0 || isNaN(incomeField)){
        // document.getElementById("income-error").classList.remove("hidden");
        showErrorById("income-error");
        return;
    };
    if(softwareField <= 0 || isNaN(softwareField)){
        // document.getElementById("software-error").classList.remove("hidden");
        showErrorById("software-error");
        return;
    };

    if(coursesField <= 0 || isNaN(coursesField)){
        // document.getElementById("courses-error").classList.remove("hidden");
        showErrorById("courses-error");
        return;
    }
    if(internetField <= 0 || isNaN(internetField)){
        // document.getElementById("internet-error").classList.remove("hidden");
        showErrorById("internet-error");
        return;
    }

    // Step 3 - doing the calculation of our expenses. 
    const totalExpenses = softwareField + coursesField + internetField;
    // console.log(totalExpenses);

    // Step 4 - Finding the balance by subtracting Income from expense
    const remainingBalance = incomeField - totalExpenses;
    // console.log(remainingBalance);
    // console.table({totalExpenses, remainingBalance});

    // Validation 2
    if(totalExpenses > incomeField){
        // document.getElementById("logic-error").classList.remove("hidden");
        showErrorById("logic-error");
        return;
    }

    // Step 5 - Now that we have total expense and remaining balance we will set this value in the result section
    const totalExpensesSetInField = document.getElementById("total-expenses");
    totalExpensesSetInField.innerText = totalExpenses.toFixed(2);

    const remainingBalanceSetInField = document.getElementById("balance");
    remainingBalanceSetInField.innerText = remainingBalance.toFixed(2);

    const resultContainer = document.getElementById("results");
    resultContainer.classList.remove("hidden")

/*     // step 12 - styling the dive and appending child in the history part
    const historyItem = document.createElement("div");
    historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500';

    historyItem.innerHTML = `
         <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
         <p class="text-xs text-gray-500">Income: ${formateCurrency(incomeField)}</p>
         <p class="text-xs text-gray-500">Expenses: ${formateCurrency(totalExpenses)}</p>
         <p class="text-xs text-gray-500">Balance: ${formateCurrency(remainingBalance)}</p>
    `;

    const historyContainer = document.getElementById("history-list");
    historyContainer.insertBefore(historyItem, historyContainer.firstChild); */
    // document.getElementById("history-section").classList.remove('hidden');
    addToHistory(incomeField, totalExpenses, remainingBalance);
});


// Step 6 - catch the saving btn
const calculateSavingsBtn = document.getElementById("calculate-savings");
calculateSavingsBtn.addEventListener("click", function(){
    // console.log('btn is clicked');

    // Step 7 - declaring all the constants globally
    const incomeField = parseFloat(document.getElementById("income").value);
    const softwareField = parseFloat(document.getElementById("software").value);
    const coursesField = parseFloat(document.getElementById("courses").value);
    const internetField = parseFloat(document.getElementById("internet").value);
    console.table({incomeField, softwareField, coursesField, internetField});

    // Step 8 - fetching the savings input field
    const savingFieldPercentage = parseFloat(document.getElementById("savings").value);
    console.log(savingFieldPercentage);

    // Step 9 - doing the percentage
    // Step 9.1 - doing the calculation of our expenses. 
    const totalExpenses = softwareField + coursesField + internetField;
    console.log(totalExpenses);
    const remainingBalance = incomeField - totalExpenses;    
    console.table({totalExpenses, remainingBalance});

    // tep 9.3 - doing the percentage
    const savingAmount = (savingFieldPercentage * remainingBalance) / 100;
    console.log(savingAmount);

    const NewBalanceAfterSaving = remainingBalance - savingAmount;
    console.log(NewBalanceAfterSaving);

    const savingAmountSettingInField = document.getElementById("savings-amount");
    savingAmountSettingInField.innerText = savingAmount.toFixed(2);

    // Step 10 - Showing the new balance which we get after sub the saved amount 

    const remainingElement = document.getElementById("remaining-balance");
    remainingElement.innerText = NewBalanceAfterSaving.toFixed(2);

});

// Step 11 - working with the history btn and container 
// Step 11.1 - fist catch the btn which will open the history container

const historyTab = document.getElementById("history-tab");
const assistantTab = document.getElementById("assistant-tab");

historyTab.addEventListener("click", function(){
    // console.log('btn is working');

    // tep 11.2 - adding style
    historyTab.classList.add(
        "text-white",
        "font-semibold",
        "bg-gradient-to-l",
        "from-blue-500",
        "to-purple-600"
    );
    historyTab.classList.remove

    assistantTab.classList.remove(
        "text-white",
        "font-semibold",
        "bg-gradient-to-l",
        "from-blue-500",
        "to-purple-600" 
    );
    assistantTab.classList.add(
        "text-gray-600",
        "font-semibold"

    );

    document.getElementById("expense-form").classList.add('hidden');
    document.getElementById("history-section").classList.remove('hidden');
});

assistantTab.addEventListener("click", function(){
    // console.log('assistant btn working');
    assistantTab.classList.add(
        "text-white",
        "font-semibold",
        "bg-gradient-to-l",
        "from-blue-500",
        "to-purple-600"
    );

    historyTab.classList.remove(
        "text-white",
        "font-semibold",
        "bg-gradient-to-l",
        "from-blue-500",
        "to-purple-600" 
    );

    document.getElementById("expense-form").classList.remove('hidden');
    document.getElementById("history-section").classList.add('hidden');


});

// Live validation
document.getElementById("income").addEventListener("input", function(){
    const inputValueIncome = parseFloat(document.getElementById("income").value);
    // console.log(inputValueIncome)
        if(inputValueIncome <= 0 || isNaN(inputValueIncome)){
        document.getElementById("income-error").classList.remove("hidden");
        return;
    };
})


// class="w-1/2 py-2 rounded-l-md focus:outline-none transition-colors duration-200 text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-600">
// transition-colors duration-200 text-gray-600 font-semibold
/*   "transition-colors",
        "text-gray-600",
        "font-semibold" */