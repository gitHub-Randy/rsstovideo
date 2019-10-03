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
        this.prepContent(data);
        this.exportContent();
    }


    prepContent(data) {
        let source = fs.readFileSync(inFile, 'utf8');
        let template = handlebars.compile(source, { stric: true });
        result = template();
    }

 
    exportContent() {
        fs.writeFileSync(outFile, result);
        console.log(`File written to ${outFile}`);
    }
}










