function calculateAmortizationSchedule(principal, annualRate, durationMonths) {
    const monthlyRate = annualRate / 12 / 100;
    const monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -durationMonths));
    let remainingBalance = principal;
    const schedule = [];

    for (let month = 1; month <= durationMonths; month++) {
      const interest = remainingBalance * monthlyRate;
      const principalPaid = monthlyPayment - interest;
      remainingBalance -= principalPaid;

      schedule.push({
        Month: month,
        'Beginning Balance': (remainingBalance + principalPaid).toFixed(2),
        'Monthly Payment': monthlyPayment.toFixed(2),
        Interest: interest.toFixed(2),
        Principal: principalPaid.toFixed(2),
        'Ending Balance': remainingBalance.toFixed(2),
      });
    }
    return schedule;
  }

  const principalAmount = 100000000 ;
  const annualInterestRate = 35;
  const loanDurationMonths = 24;

  const schedule = calculateAmortizationSchedule(principalAmount, annualInterestRate, loanDurationMonths);
  const amortizationDiv = document.getElementById('amortizationSchedule');

  schedule.forEach(entry => {
    const row = document.createElement('tr');
    for (const key in entry) {
      const cell = document.createElement('td');
      cell.textContent = entry[key];
      cell.style.border = '1px solid black';
      cell.style.padding = '8px';
      row.appendChild(cell);
    }
    amortizationDiv.appendChild(row);
  });