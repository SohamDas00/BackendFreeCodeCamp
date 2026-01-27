const os=require('os')

//gives user information
const user =os.userInfo();
console.log(user);

//gives uptime
console.log(`The system uptime is: ${os.uptime()} secounds`);
// os 


const path=require('path')
console.log(`The path seperator on this OS is: ${path.sep}`);
// path


const fs =require('fs')
try {
    const first=fs.readFileSync('./content/first.txt','utf-8');
    const second=fs.readFileSync('./content/secound.txt','utf-8')
    console.log(first);   
    console.log(second);

    const result=fs.writeFileSync('./content/result.txt',`This is the result ${first} ${second}`)
} catch (error) {
    console.error("The error is: ",error);
}
//fs sync approach