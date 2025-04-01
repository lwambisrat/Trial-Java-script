//no.1 add char to 3rd index
let state='The child walked to the market ';
const newState=state.charAt(0).toUpperCase()+state.slice(1);
console.log({newState});



//no.2 add char at 3 rd index
let fname='I am Lwam Bisrat Weldehawreriat';
const addFname=fname.slice(0, 3) + "y" + fname.slice(3);
console.log(addFname);



//no.3 count occurence of hello
let greet= "hello world, hello JavaScript!";
const fgreet = "hello";
const count = (greet.match(new RegExp(fgreet, "g")) || []).length;
console.log(count);


//no.4 delete last 3 char
let school='AkiraChix is found in Kenya';
const lastSchool=school.slice(-3);
console.log(lastSchool);
//or   console.log(school[school.length-3],school[school.length-2],school[schoo;.length-1]);



//no.5 delete first 3 char
let  favourite='Chapati is favourite food in AkiraChix ';
const firstFavourite=favourite.slice(0,3);
console.log(firstFavourite);
// or console.log(favourite[0],favourite[1],favourite[2]);



//no.6 ascending
let book='trivor noah ,the power of now,rich dad poor dad'; // the spaces and commas(,) also ascend
const ascendBook=book.split('').sort().join('');
console.log(ascendBook);



//7 delete spaces
let text = "My favourite subjects are front and backend web development.";
const  cleanedText = text.split(' ').join('');
console.log(cleanedText);



//no.8 index of a char
let word="greeting";
let middleWord=word.indexOf('t');
console.log(middleWord);

//no.9 delete first 2 char
let special='Special character';
const delSpecial=special.slice(2);
console.log(delSpecial);


//no.10 delete last 2 char
let given='Thank you';
const delGiven=given.slice(0,given.length-2);
//or  const delGiven=given.substring(0,given.length-2);
//or const delGiven =given.slice(0, -2)
console.log(delGiven);






