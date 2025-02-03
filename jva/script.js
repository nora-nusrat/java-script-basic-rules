
//log in box rules
let gender = "Female";
let age = 25;
let area = "Dhaka";
//1st if
if (gender == "Female") {
    //2nd if
    if (age>=25) {
        //3rd if
        if (area == "Dhaka") {
            console.log("the area matched");
            
        } else {
            console.log("the male candidate need to be from dhaka");
            
        }
       //=======
    } else {
        console.log("The age must be 25 or above 25");
        
    }
    //=========
} else {
  console.log("We are looking for Female candidates");
}
//=======
//log in box rules
//Marks rules
let marks = 99
if (marks>=33 && marks<=39) {
    console.log("You Got D");
    
}
else if (marks>=40 && marks<=49){
    console.log("You got C");
    
}
else if (marks>=50 && marks<=59){
    console.log("You Got B");
    
}
else if (marks>=60 && marks<=69){
    console.log("You got A-");
    
}
else if (marks>=70 && marks<=79){
    console.log("You got A");
    
}
else if (marks>=80 && marks<=100){
    console.log("You got A+");
    
}
else {
    console.log("You failed and got F");
    
}
//33-39=D
//40-49=C
//50-59=B
//60-69=A-
//70-79=A
//80-100=A+
//Marks rules
//loop rules
for (let i = 1; i <= 40; i++) {
    if (i % 2 === 0) { // Checking if the number is even
        console.log(i);
    }
}
for (let i = 1; i <= 40; i++) {
    if (i % 2 !== 0) { // Checking if the number is even
        console.log(i);
    }
}
let timestable = 6
for (let i = 1; i <= 10; i++){
    let final= timestable + " " + "X" + " " + i + " = " + " " + timestable * i
    console.log(final);
    
}
//loop rules
//short form of if and else
//{condition?true:false}-is the short form for if and else condition using
//arrey rules
//const name = ["Nora","Faria","Nusrat","Johatsu"]//countdown starts from 0 and goes to how much there is and end with adding 1 to it
//console.log(name[3]);//and if we want to see length we would put it like console.log(name.length);
//arrey rules
//push in arrey rules
//const name = ["Johan", "Abrar", "Priontee", "Saiara"]
//let add = name.push("Abdullah")

//console.log(name);


//push in arrey rules
//pop in arrey rules
const name = ["Johan", "Abrar", "Priontee", "Saiara"]
let add = name.pop("johan")
console.log(name)
//pop in arrey rules

//=======
//function nora(){
   /// console.log("my name is Nora");
    
//}
//nora()
//=========
let teams = {
    name : "Faruk Hossain",
    age : 30,
    area : "Dhaka",
}
console.log(teams);

//======








