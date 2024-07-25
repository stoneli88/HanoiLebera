const fs = require('fs');
const path = require('path');

// Function to generate ordered seat titles
function generateOrderedSeatTitles() {
  const seats = [];
  for (let charCode = 'A'.charCodeAt(0); charCode <= 'Z'.charCodeAt(0); charCode++) {
    for (let num = 1; num <= 4; num++) {
      seats.push(String.fromCharCode(charCode) + num.toString().padStart(2, '0'));
    }
  }
  return seats;
}

// Read the existing JSON data
const filePath = path.join(__dirname, 'public', 'data.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Generate ordered seat titles
const allSeats = generateOrderedSeatTitles();

// Assign ordered seats to each theater
data.theaters.forEach(theater => {
  theater.seat = allSeats.map(title => ({ title, status: true })); // Assuming status true is the default
});

// Write the updated data back to the JSON file
fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
