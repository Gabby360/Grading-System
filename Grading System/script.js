document.getElementById('gradeForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const studentName = document.getElementById('studentName').value.trim();
    const marks = parseInt(document.getElementById('marks').value.trim());
    const resultDiv = document.getElementById('result');
    const resultMessage = document.getElementById('resultMessage');
    const icon = resultDiv.querySelector('.icon');
  
    // Determine Grade
    let grade = 'F';
    let message = 'Better luck next time!';
    let iconClass = '❌'; 
  
    if (marks >= 80 && marks <= 100) {
      grade = 'A';
      message = 'Outstanding performance! Keep it up!';
      iconClass = '✅';
    } else if (marks >= 75 && marks < 80) {
      grade = 'B';
      message = 'Great job! You’re doing very well.';
      iconClass = '👍';
    } else if (marks >= 70 && marks < 75) {
      grade = 'C';
      message = 'Good effort! Keep improving.';
      iconClass = '🌟';
    } else if (marks >= 45 && marks < 70) {
      grade = 'D';
      message = 'You passed, but there’s room for improvement.';
      iconClass = '👌';
    }
  
    // Display Result
    resultDiv.style.display = 'block';
    resultDiv.className = 'result-card ' + (grade === 'F' ? 'fail' : 'success');
    icon.textContent = iconClass;
    resultMessage.textContent = `${studentName}, your grade is: ${grade}. ${message}`;
  });
  