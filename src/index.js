'use strict'
import 'dotenv/config';
import HtmlGenerator from './HtmlGenerator.js'
import ElementScreenTaker from './ElementScreenTaker.js'
import MovieMaker from './MovieMaker.js'


import FeedReader from './FeedReader.js'

let feedReader = new FeedReader();
let htmlGenerator = new HtmlGenerator();
let screenShotMaker = new ElementScreenTaker();
let movieMaker = new MovieMaker();
let feed;
async function makeNews() {
    try{
        feed = await feedReader.RetrieveData(process.env.RSS_URL);
        htmlGenerator.makeHtml(feed);
        let imagePath =  await screenShotMaker.takeScreenShots();
        // await movieMaker.makeMovie(imagePath);
    }catch(err){
        console.log(err)
    }
    
   
}
makeNews();








