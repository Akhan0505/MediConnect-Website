// Select all day buttons
const dayButtons = document.querySelectorAll(".day-btn");
dayButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove 'active' from all
    dayButtons.forEach(b => b.classList.remove("active"));
    // Add 'active' to clicked one
    btn.classList.add("active");
  });
});

// Select all time buttons
const timeButtons = document.querySelectorAll(".time-btn");
timeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove 'selected' from all
    timeButtons.forEach(b => b.classList.remove("selected"));
    // Add 'selected' to clicked one
    btn.classList.add("selected");
  });
});

// Handle booking button
const bookBtn = document.querySelector(".book-btn");
bookBtn.addEventListener("click", () => {
  const selectedDay = document.querySelector(".day-btn.active")?.textContent;
  const selectedTime = document.querySelector(".time-btn.selected")?.textContent;

  if (selectedDay && selectedTime) {
    alert(`✅ Appointment booked on ${selectedDay} at ${selectedTime}`);
  } else {
    alert("⚠️ Please select both day and time before booking.");
  }
});
