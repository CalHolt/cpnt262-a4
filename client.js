// Defining right triangle string
let rTri = "";

// create the loop //

// sets 5 rows with 5 columns of nothing 
for (let i = 1; i <= 5; i++){
// Putting as many stars per row as long as the m value is less than the i value. stars are only added to m value so that it does create a right facing right angled triangle
  for (let m = 0; m < i; m++ ){
  rTri += "*";
  }
//  attaching stars to p tags
  rTri += "<p>"
}
document.querySelector("#trian").innerHTML = `<p>${rTri}</p>`;

// defining number of columns and rows for shape
let n = 5;
// Define string for shape
let down = "";
for (let i = 0; i < n; i++) {
  // adding stars
  for (let c = 0; c < n - i; c++) {
    down += "*";
  }
  down += "<p>";
}
document.querySelector("#square").innerHTML = `<p>${down}</p>`;
