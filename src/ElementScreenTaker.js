'use strict'
import 'dotenv/config';
let captureWebsite = require('capture-website');
let puppeteer = require('puppeteer');
let cheerio = require('cheerio');
let id = [];
let url = process.cwd() + `\\src\\test.html`;

export default class ElementScreenTaker {
    constructor(value) {
    }


    
    //generates the screenshots of the generated html file
    async takeScreenShots() {
        try {
            url = process.cwd() + `\\src\\test.html`;
            await this.getCssSelectors(process.env.selector);
            let time = new Date();
            let t = time.getDate() + "_" + time.getMonth() + "_" + time.getFullYear() + "_" + time.getHours() + "_" + time.getMinutes();
            for (let index = 0; index < id.length; index++) {
                await this.captureScreens(t,index);
            }
            return `${process.env.IMAGE_PATH + '//' + t + '_'}`;
        } catch (err) {
            console.log("could not create screenshots of rss feed!");
            throw new Error(err);
        }

    }

    // makes for each item in the html a screenshot
    // also removes the item before and after the item thats needs to be captured
    async captureScreens(outputName, index) {
        try{
            await captureWebsite.file(url, `${process.env.IMAGE_PATH + '//' + outputName + '_' + index}.png`, {
                waitForElement: `#${id[index]}`, element: `#${id[index]}`, hideElements: [
                    `#${id[index - 1]}`,
                    `#${id[index + 1]}`
                ]
            });
        }catch(error){
            throw new Error(error);
        }
        

    }

    getId() {
        return id;
    }

    setId(num) {
         id = num;
    }

    setUrl(u){
        url = u;
    }
    // gets the css selector names(.card_0, .card_1 etc.)
    async getCssSelectors(selector) {
        try {
            const browser = await puppeteer.launch({ headless: false });
            const page = await browser.newPage();
            await page.goto(url);
            let content = await page.content();
            browser.close();
            cheerio(selector, content).each(function () {
                id[id.length] = cheerio(this)[0].attribs.id;
            });
        } catch (err) {
            console.log("the rss feed template is corrupt or empty!");
            throw new Error(err);
        }

    }
}






