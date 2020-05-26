// list of file names to export later
let fileNames = [];
//requiring path and fs modules
const path = require('path');
const fs = require('fs');
let CSS = ``;
let ext;
let js = ``;
//joining path of directory 
const directoryPath = path.join(process.cwd(), 'fonts');
let path2 = "/home/rajab/Documents/GitKraken/simpleFonts/38ArabicLanguageFonts"
//passsing directoryPath and callback function
fs.readdir(directoryPath, parsingDirectory);

function font(fontName, path) {
    return `
    @font-face {
        font-family: ${fontName};
        src: url("${path}");
    }\n`
}

function writeFile(fileName, content, successmessage) {
    fs.writeFile(fileName, content, (err) => {
        if (err) throw err;
        console.log(successmessage);
    });
}



function addFont(file){
    let fontX = file.replace(/\.(.+)/g, "");
    // read fonts
    console.log("font name", fontX)
    CSS += font(fontX, "/fonts/" + file)
    js += `'${fontX}',`;
}
let dir = `/fonts/`;

function parsingDirectory(err,files){
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
     
        //listing all files using forEach
        files.forEach(function (file) {
            // let ext = path.extname(file) +1
            // console.log(file,ext)
            // if( ext == 1 ){
            //     console.log(dir)
            //     dir += file+`/`
            //     fs.readdir(path.join(process.cwd(), dir), parsingDirectory);
            //     return;
            // }else{
   // Do whatever you want to do with the file
   addFont(file)
            // }
         
        });
        writeFile("test.css",CSS,'CSS been created!')
        writeFile('names.js',"let names =[" + js + "]",'JS file has been created!')
    
}