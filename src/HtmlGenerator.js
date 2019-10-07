'use strict'
let env = require('dotenv');
let fs = require('fs');
let handlebars = require('handlebars');
let inFile;
let outFile;
let result;
export default class HtmlGenerator {
    constructor(value) {
        inFile = process.env.TEMPLATE_FILE;
        outFile = process.env.OUTPUT_HTML_FILE;
    }

    // generates an html file
    makeHtml(data) {
        try{
            this.checkData(data)
            this.prepContent(data);
            this.exportContent();
        }catch(err){
            throw new Error(err);
        }
       
    }

    // checks paramameter if it is not empty
    checkData(data){
        if(data != null){
            return true;
        }else{
            throw new Error("data feed is empty");

        }
    }

    // reads the template and generates a html file with data
    prepContent(data) {
        try{
            let source = fs.readFileSync(inFile, 'utf8');
            let template = handlebars.compile(source, { stric: true });
            result = template(data);
        }catch(error){
            throw new Error(error);
        }
      
    }



    // exports the html file on to the file system
    exportContent() {
        try{
            fs.writeFileSync(outFile, result);
        }catch(error){
            throw new Error(error);
        }
       
    }
}










