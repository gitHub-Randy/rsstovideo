'use strict'
let feed;
let Parser = require('rss-parser');
let parser;
let url;

export default class FeedReader {
    constructor() {
        parser = new Parser();
    }

    // retrieves rss feed and returns it in json format
    async RetrieveData(url) {
        try {
            feed =  await parser.parseURL(url);
            return feed;
        } catch (err) {
            console.log("Could not retrieve feed");
            throw new Error(err);
        }

    }
}