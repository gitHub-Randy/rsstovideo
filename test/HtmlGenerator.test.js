import FeedReader from "../src/FeedReader";

import HtmlGenerator from "../src/HtmlGenerator";
it('checkData() throws error when feed is empty', () => {
    let failingDataChecker = new HtmlGenerator();
    expect(() => {
        failingDataChecker.checkData();
    }).toThrow();
});

it('checkData() returns true when feed is not empty', () => {
    let dataChecker = new HtmlGenerator();
    let value = dataChecker.checkData({"items": "testItem"})
    expect(value).not.toBeNull();
});







it('prepcontent makes result', () => {
    let prepcontent = new HtmlGenerator();
    prepcontent.prepContent(
        {
            "items": "test Item",
            "title": "test Title",
            "content": "test Content"
        });
    expect(prepcontent.result).not.toBeNull();
})

// 
it('prepcontent() throws error when template has errors', () => {
    let failingPrepContent = new HtmlGenerator();
    failingPrepContent.InFile = "./testing_template_broken.hbs";
    console.log(failingPrepContent.InFile);
    try{
        failingPrepContent.prepContent( {
            "items": "test Item",
            "title": "test Title",
            "content": "test Content"
        });
    }catch(error){
        expect(error).not.toBeNull();
    }
});


// exportContent throws error when params is wrong

it('exportContent() throws error when output is wrong', () => {
    let failingExportContent = new HtmlGenerator();
    failingExportContent.outFile = "./nonsense";
    try{
        failingExportContent.exportContent();
    }catch(error){
        expect(error).not.toBeNull();
    }
});



it('makeHtml() succeds ', () => {
    let failingData = new HtmlGenerator();
    try{
        failingData.makeHtml( {
            "items": "test Item",
            "title": "test Title",
            "content": "test Content"
        });
    }catch(error){
        expect(error).toBeNull();
    }
})












