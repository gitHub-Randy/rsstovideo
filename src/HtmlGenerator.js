'use strict'
let env = require('dotenv');
let fs = require('fs');
let handlebars = require('handlebars');
let inFile;
let outFile;
let result;
export default class HtmlGenerator {
    constructor(value) {
        inFile = './/src//test.hbs';
        outFile = './/src/test.html';
    }

    makeHtml(data) {
        try{
            this.checkData(data)
            this.prepContent(data);
            this.exportContent();
        }catch(err){
            throw new Error(err);
        }
       
    }

    checkData(data){
        if(data != null){
            return true;
        }else{
            throw new Error("data feed is empty");

        }
    }


    prepContent(data) {
        
        let source = fs.readFileSync(inFile, 'utf8');
        let template = handlebars.compile(source, { stric: true });
        result = template(data);
    }

 
    exportContent() {
        fs.writeFileSync(outFile, result);
        console.log(`File written to ${outFile}`);
    }
}










