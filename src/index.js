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
// main method
// gets rss feed from .env file
// puts data from rss feed into html template and generates a html file
// crawls the html file and takes a screenshot of every data item
// takes every screenshot and makes a dia show in the form of an mp4 file
async function makeNews() {
    try{
        feed = await feedReader.RetrieveData(process.env.RSS_URL);
        htmlGenerator.makeHtml(feed);
        let imagePath =  await screenShotMaker.takeScreenShots();
        await movieMaker.makeMovie(imagePath);
    }catch(err){
        console.log(err)
    }
    
   
}
makeNews();








