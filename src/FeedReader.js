'use strict'
let feed;
let Parser = require('rss-parser');
let parser;
let url;

export default class FeedReader {
    constructor() {
        parser = new Parser();
        url = process.env.RSS_URL;
    }
    async RetrieveData(){
        feed = await parser.parseURL(url);
        return feed;
    }
}