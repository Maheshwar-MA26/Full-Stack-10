// Program 1: RICR Student Text Formatter
    
//         JavaScript ki ek file banao: studentFormatter.js.
//         Student name mein extra spaces aur mixed capital/small letters rakho.
//         trim() aur toUpperCase() ya toLowerCase() use karo.
//         JavaScript course description banao.
//         charAt() aur at() se characters extract karo.
//         slice() aur substring() se text ke alag-alag parts nikalo.
//         indexOf() aur lastIndexOf() se word ya character ki position find karo.
//         includes() se check karo ki description mein JavaScript hai ya nahi.
//         startsWith() aur endsWith() se filename check karo.
//         Har operation ka result console.log() se display karo aur methods ke purpose ke comments likho.

let namee = "     mAheshWar MISHRA     ";

let upperName = namee.toUpperCase().trim();
let lowerName = namee.toLowerCase().trim();

console.log(upperName);
console.log(upperName.at(0));
console.log(upperName.charAt(0));
console.log(upperName.concat("JIII"));
console.log(lowerName.slice(0,5));
console.log(lowerName.slice(6,8));
console.log(lowerName.substring(2,5));
console.log(lowerName.indexOf('a' , 1));
console.log(lowerName.indexOf('a' , 2));
console.log(lowerName.indexOf('a' , 4));
console.log(lowerName.indexOf('x'));


