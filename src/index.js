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
    feed = await feedReader.RetrieveData();
    htmlGenerator.makeHtml(feed);
    let imagePath =  await screenShotMaker.takeScreenShots();
     await movieMaker.makeMovie(imagePath);
}
makeNews();








