// scripts.js

let totalAmount = 0;

// Function to update student info
function updateStudentInfo() {
    const studentName = document.getElementById('student-name').value;
    const rollNumber = document.getElementById('roll-number').value;
    const studentClass = document.getElementById('student-class').value;
    const paymentDate = document.getElementById('payment-date').value;

    // Validate student details (all fields must be filled)
    if (studentName.trim() === '' || rollNumber.trim() === '' || studentClass.trim() === '' || paymentDate.trim() === '') {
        alert('Please fill in all the student details.');
        return;
    }

    // Update student info on the fee slip
    document.getElementById('student-name-display').textContent = studentName;
    document.getElementById('roll-number-display').textContent = rollNumber;
    document.getElementById('student-class-display').textContent = studentClass;
    document.getElementById('payment-date-display').textContent = paymentDate;
}

// Function to add fee
function addFee() {
    const feeType = document.getElementById('fee-type').value;
    const feeAmount = parseFloat(document.getElementById('fee-amount').value);

    // Validate fee details
    if (feeType.trim() === '') {
        alert('Please enter a fee type.');
        return;
    }

    if (isNaN(feeAmount) || feeAmount <= 0) {
        alert('Please enter a valid fee amount (greater than 0).');
        return;
    }

    // Add fee item to the table
    const feeTableBody = document.getElementById('fee-details-body');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${feeType}</td>
        <td>${feeAmount}</td>
        <td><button onclick="removeFee(this, ${feeAmount})">Remove</button></td>
    `;
    feeTableBody.appendChild(row);

    // Update total amount
    totalAmount += feeAmount;
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);

    // Clear the fee form inputs
    document.getElementById('fee-type').value = '';
    document.getElementById('fee-amount').value = '';
}

// Function to remove a fee
function removeFee(button, amount) {
    // Remove fee item from the table
    const row = button.closest('tr');
    row.remove();

    // Update total amount
    totalAmount -= amount;
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
}

// Function to update payment status
function updatePaymentStatus() {
    const paymentStatusElement = document.getElementById('payment-status');
    if (totalAmount > 0) {
        paymentStatusElement.textContent = 'Paid';
        paymentStatusElement.style.color = 'green';
    } else {
        paymentStatusElement.textContent = 'Unpaid';
        paymentStatusElement.style.color = 'red';
    }
}
