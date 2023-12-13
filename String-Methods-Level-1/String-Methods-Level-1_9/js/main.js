const Sam = "Sam is going to school"
const Susi = "Susi" 
const and = "and"

document.write(Sam.concat( " " + and + " to the movie theater" + "<br>"))
document.write(Sam.concat(" the movie theater"+ "<br>"))
document.write(Susi.concat(" " + and + " " + Sam.replace("is", "are") + "<br>"))
document.write(Susi.concat(" " + and + " " + Sam.slice(0,4) +"are"+ Sam.slice(7,15) + " gym "+ and+Sam.slice(12,16) +"the movie theater"+"<br>"))
document.write(Susi.concat(Sam.slice(3) + " " + and +Sam.slice(12,16)+ "the movie theater"+ "<br>"))



// Sam is going to school and to the movie theater
// Sam is going to the movie theater
// Susi and Sam are going to school
// Susi and Sam are going to gym and to the movie theater
// Susi is going to school and to the movie theater