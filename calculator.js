function calculateAge() {
  const input = document.getElementById("date").value;
  const result = document.getElementById("result");

  if (!input) {
    result.innerText = "Please select a valid date.";
    result.classList.remove("fade-in");
    return;
  }

  const birthDate = new Date(input);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const diffInMs = today - birthDate;
  const totalDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  result.innerHTML = `
    🎂 You are <span class="highlight">${years}</span> years, 
    <span class="highlight">${months}</span> months, 
    <span class="highlight">${days}</span> days old.<br>
    📅 Total Days Lived: <span class="highlight">${totalDays}</span> days
  `;

  result.classList.remove("fade-in");
  void result.offsetWidth;
  result.classList.add("fade-in");
}
