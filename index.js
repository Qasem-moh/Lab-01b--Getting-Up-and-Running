"use strict";

let question1 = prompt("Please Enter Your Name");
let age = Number(prompt("Enter your age"));
addNameANdAge();
function addNameANdAge() {
  document.getElementById(
    "dataUser"
  ).innerHTML += `<p id="UserName">UserName: ${question1}</p><br/><p  id="age">Age: ${age}</p>`;
}
console.log("User name" + question1);
console.log("age" + age);
//******************************************** */

let questionPizza = prompt("Do you Like Pizza?");

if (questionPizza == "yes") {
  let imagePizza =
    '<img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-keto-pizza-073-1544039876.jpg?crop=0.668xw:1.00xh;0.233xw,0.00255xh&resize=600:*" alt="Pizza">';
  document.getElementById("printImg").innerHTML +=
    "<span>YouLike Pizza</span><br/>" + imagePizza;
} else {
  let a =
    '<img src="https://media.makeameme.org/created/when-some-says-csazjf.jpg" alt="">';
  document.getElementById("printImg").innerHTML = a;
}
console.log(questionPizza);

//*********************************** */

let questionMansaf = prompt("Do you like mansaf");

if (questionMansaf == "yes") {
  let imageMansaf =
    '<img src="http://migrationology.smugmug.com/Jordan-Travel-Guide/i-bXpNxMN/0/X3/tawaheen-al-tawa-amman-1-X3.jpg" alt="mansaf">';
  document.getElementById("printImg1").innerHTML +=
    "<span>YouLike Pizza</span><br/>" + imageMansaf;
} else {
  let aa =
    '<img src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Falafel-7.jpg" alt="">';
  document.getElementById("printImg1").innerHTML = aa;
}
console.log(questionMansaf);

let fi = alert("Thank you for visit my site");
