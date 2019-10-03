'use strict'
let env = require('dotenv');
let htmlGenerator = require('./HtmlGenerator');
let ElementScreenTaker = require('./ElementScreenTaker');
let movieMaker = require('./MovieMaker');
let feedReader = require('./FeedReader');
// import HtmlGenerator from './HtmlGenerator.js'
// import ElementScreenTaker from './ElementScreenTaker.js'
// import MovieMaker from './MovieMaker.js'


// import FeedReader from './FeedReader.js'

 feedReader = new FeedReader();
 htmlGenerator = new HtmlGenerator();
 screenShotMaker = new ElementScreenTaker();
 movieMaker = new MovieMaker();
let feed;
async function makeNews() {
    feed = await feedReader.RetrieveData();
    htmlGenerator.makeHtml(feed);
    let imagePath =  await screenShotMaker.takeScreenShots();
     await movieMaker.makeMovie(imagePath);
}
makeNews();








