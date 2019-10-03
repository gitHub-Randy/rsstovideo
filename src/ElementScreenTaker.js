'use strict'
import 'dotenv/config';
let captureWebsite = require('capture-website');
let puppeteer = require('puppeteer');
let cheerio = require('cheerio');
let id = [];
let url = process.cwd()+`\\src\\test.html`;

export default class ElementScreenTaker {
    constructor(value) {
        console.log(url)

    }


    // takes a screen shot from each newsarticle on the generated html page'
    //test: returns image Path
    //aantal plaatjes maken via varible
    async takeScreenShots() {
        await this.getCssSelectors();
        let time = new Date();
        let t = time.getDate()+"_"+time.getMonth()+"_"+time.getFullYear()+"_"+time.getHours()+"_"+time.getMinutes();
        for (let index = 0; index < id.length; index++) {
            
            console.log(id[index]);
            await captureWebsite.file(url, `${process.env.IMAGE_PATH+'//'+t+'_'+index}.png`, { waitForElement: `#${id[index]}`, element: `#${id[index]}`, hideElements: [
                `#${id[index-1]}`,
                `#${id[index+1]}`
            ]  });
        }

        return `${process.env.IMAGE_PATH+'//'+t+'_'}`;
    }

    //test: id != null

    //variable toe voegen i.e. .card etc
    async getCssSelectors(){
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.goto(url);
        let content = await page.content();
        browser.close();
        cheerio(`.card`, content).each(function () {
            id[id.length] = cheerio(this)[0].attribs.id;   
        });
    }
}






