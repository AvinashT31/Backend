// to create, read, write, and modify files in a Node.js application

const fs = require("fs");

const content = "Hello this is backend first lecture, please join."

fs.writeFile("text.txt", content, (err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("file creating and update successfully")
    }
} )