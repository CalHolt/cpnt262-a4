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


let down = "";

for(let i = 1; i < 6; i++ ){
    for(let m = 1; m < 6; m++){
        if(i <= m ){
            down += "*";
        }else{
            down += " ";
        }
    }
    down +=("<p>")
}

document.querySelector("#down-tri").innerHTML = `<p>${down}</p>`;

// -----------------------Second Challenge---------------------
// original string
const originalSentence = "hi there my name is cal";
// create new variable to split word up
const splitSentence = originalSentence.split(" ");
// capitalize each words first letter using map
const newString = splitSentence.map((word) => {
  return word[0].toUpperCase() + word.substring(1);
}).join(" ");
// attach to html 
document.querySelector("#challenge2").innerText = newString
