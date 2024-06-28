document.addEventListener('DOMContentLoaded', () => {
    const resultForm = document.getElementById('result-form');
    const resultDiv = document.getElementById('result');

    // Handle student result check
    resultForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const rollNo = document.getElementById('rollNo').value;
        const results = JSON.parse(localStorage.getItem('results')) || [];
        const studentResult = results.find(r => r.rollNo === rollNo);

        if (studentResult) {
            resultDiv.textContent = `Result: ${studentResult.result}`;
        } else {
            resultDiv.textContent = 'Result not found';
        }
    });
});

