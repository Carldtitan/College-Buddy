document.addEventListener("DOMContentLoaded", function () {
  // Variables to store budget, expenses, and goals
  let totalBudget = 0;
  let totalExpenses = 0;
  const goals = [];

  // Login functionality
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("login-page").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");
  });

  // Update budget summary display
  function updateSummary() {
    document.getElementById("total-budget").textContent = totalBudget.toFixed(2);
    document.getElementById("total-expenses").textContent = totalExpenses.toFixed(2);
    document.getElementById("remaining-balance").textContent = (totalBudget - totalExpenses).toFixed(2);
  }

  // Set Budget Form
  const budgetForm = document.getElementById("budget-form");
  budgetForm.addEventListener("submit", function (event) {
    event.preventDefault();
    totalBudget = parseFloat(document.getElementById("budget-amount").value);
    updateSummary();
  });

  // Add Expense Form
  const expenseForm = document.getElementById("expense-form");
  expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const expenseAmount = parseFloat(document.getElementById("expense-amount").value);
    const expenseCategory = document.getElementById("expense-category").value;

    totalExpenses += expenseAmount;
    updateSummary();

    const expenseList = document.getElementById("expense-list");
    const expenseItem = document.createElement("p");
    expenseItem.textContent = `${expenseCategory}: $${expenseAmount.toFixed(2)}`;
    expenseList.appendChild(expenseItem);
  });

  // Financial Goals Form
  const goalForm = document.getElementById("goal-form");
  goalForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const goalAmount = parseFloat(document.getElementById("goal-amount").value);
    const goalName = document.getElementById("goal-name").value;

    goals.push({ name: goalName, amount: goalAmount });
    displayGoals();
  });

  function displayGoals() {
    const goalList = document.getElementById("goal-list");
    goalList.innerHTML = ""; // Clear previous list
    goals.forEach(goal => {
      const goalItem = document.createElement("p");
      goalItem.textContent = `${goal.name}: $${goal.amount.toFixed(2)}`;
      goalList.appendChild(goalItem);
    });
  }

  // Reports Section
  function generateReport() {
    const reportSummary = document.getElementById("report-summary");
    reportSummary.innerHTML = `
      <p>Total Budget: $${totalBudget.toFixed(2)}</p>
      <p>Total Expenses: $${totalExpenses.toFixed(2)}</p>
      <p>Remaining Balance: $${(totalBudget - totalExpenses).toFixed(2)}</p>
    `;
  }

  // Refresh report when data changes
  updateSummary();
  generateReport();
});














document.addEventListener("DOMContentLoaded", function () {
  // Income Tracker
  const incomeForm = document.getElementById("income-form");
  incomeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const incomeAmount = parseFloat(document.getElementById("income-amount").value);
    const incomeSource = document.getElementById("income-source").value;

    totalBudget += incomeAmount; // Adding income to the total budget
    updateSummary();

    const incomeList = document.getElementById("income-list");
    const incomeItem = document.createElement("p");
    incomeItem.textContent = `${incomeSource}: $${incomeAmount.toFixed(2)}`;
    incomeList.appendChild(incomeItem);
  });

  // Recurring Expenses Tracker
  const recurringForm = document.getElementById("recurring-form");
  recurringForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const recurringAmount = parseFloat(document.getElementById("recurring-amount").value);
    const recurringCategory = document.getElementById("recurring-category").value;

    const recurringList = document.getElementById("recurring-list");
    const recurringItem = document.createElement("p");
    recurringItem.textContent = `${recurringCategory}: $${recurringAmount.toFixed(2)}`;
    recurringList.appendChild(recurringItem);

    // Update expenses with recurring expenses added
    totalExpenses += recurringAmount;
    updateSummary();
  });

  // Savings Tracker
  const savingsForm = document.getElementById("savings-form");
  const savingsGoals = [];
  savingsForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const savingsGoal = parseFloat(document.getElementById("savings-goal").value);
    const savingsName = document.getElementById("savings-name").value;

    savingsGoals.push({ name: savingsName, amount: savingsGoal });
    displaySavingsGoals();
  });

  function displaySavingsGoals() {
    const savingsList = document.getElementById("savings-list");
    savingsList.innerHTML = ""; // Clear previous list
    savingsGoals.forEach(goal => {
      const goalItem = document.createElement("p");
      goalItem.textContent = `${goal.name}: $${goal.amount.toFixed(2)}`;
      savingsList.appendChild(goalItem);
    });
  }
});
