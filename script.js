document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from reloading

  const source = document.getElementById("source").value;
  const destination = document.getElementById("destination").value;
  const journeyDate = document.getElementById("journeyDate").value;
  const seatType = document.getElementById("seatType").value;
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;

  // ✅ Check if source and destination are the same
  if (source === destination) {
    alert("Source and destination cannot be the same!");
    return;
  }

  // ✅ Generate seat number if reserved
  let seatNumber = "Not Applicable";
  if (seatType === "reserved") {
    seatNumber = "S" + Math.floor(Math.random() * 80 + 1); // S1 to S80
  }

  // ✅ Estimate fare (flat rate for demo)
  const fare = seatType === "reserved" ? 300 : 100;

  // ✅ Save data to localStorage (for next page)
  const ticket = {
    name,
    age,
    gender,
    source,
    destination,
    journeyDate,
    seatType,
    seatNumber,
    fare
  };
  // Get existing tickets or start with empty array
let allTickets = JSON.parse(localStorage.getItem("allBharatRailTickets")) || [];
allTickets.push(ticket); // Add new ticket to array
localStorage.setItem("allBharatRailTickets", JSON.stringify(allTickets));

// Also save latest for ticket.html display
localStorage.setItem("bharatRailTicket", JSON.stringify(ticket));


  // ✅ Redirect to ticket confirmation page
  window.location.href = "ticket.html";
});
