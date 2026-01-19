console.log(__filename);
console.log(__dirname);
//Gives the absolute path of file and directory

//process => process method is use to find info about the environment

//require => use in CommonJS
//import => use in ES6 module

setInterval(()=>{
    console.log("Interval");
},2000)
setTimeout(()=>{
    console.log("Timeout");
},4000)
/*Here setInterval means execute the function in repeat after that time(2sec)
but setTimeout means it will only execute once after that time(8sec)*/