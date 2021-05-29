const age = 27;
const firstName = "Bram";
const totalAmount = 102;

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!");
} else {
    console.log("Je krijgt helaas geen korting");
}

if (firstName === "Bram" || firstName === "Sarah")  {
    console.log("Gefeliciteerd je krijgt een gratis biertje");
} else {
    console.log("Jammer geen gratis biertje");
}
if (totalAmount > 25 && totalAmount <= 50) {
    console.log("Je krijgt gratis (vega)bitterballen") ;   
} else if (totalAmount > 50 && totalAmount <= 100) {
    console.log("Je krijg een gratis portie nachos");
} else if (totalAmount > 100)   {
    console.log("Je krijgt een gratis flesje champagne");
} //else {
   // console.log("Je hebt niet genoeg besteed voor een gratis attentie");
//}  


