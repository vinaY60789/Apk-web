function book() {
  let name = document.getElementById("name").value;
  let date = document.getElementById("date").value;
  let service = document.getElementById("service").value;

  db.collection("bookings").add({
    name: name,
    date: date,
    service: service,
    time: new Date()
  });

  // WhatsApp
  let msg = `Booking:%0A${name}%0A${date}%0A${service}`;
  window.open(`https://wa.me/917895252570?text=${msg}`);
}
