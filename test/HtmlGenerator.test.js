import FeedReader from "../src/FeedReader";

import HtmlGenerator from "../src/HtmlGenerator";
it('makeHtml() throws Error', async () => {
    let h = new HtmlGenerator();
    let data = null;
    try {
        h.makeHtml(data);
    } catch (error) {
        console.log("ERROR HAPPEND YAY!")
        expect(error).not.toBeNull();
    }

});

it('result != empty', async () => {
    let f = new FeedReader();
    let h = new HtmlGenerator();

    try {
        let url = "https://nu.nl/rss/Algemeen";
        let feed = await f.RetrieveData(url);
        h.makeHtml(feed);
        expect(h.result).not.toBeNull();
    }
    catch (error) {
        console.log(error);
    }
});


it('handlebars thrwos error when tempalte is faulty', async () => {
    let f = new FeedReader();
    let h = new HtmlGenerator();

    try {
        h.inFile = './testing_template_broken.hbs';
        let url = "https://nu.nl/rss/Algemeen";
        let feed = await f.RetrieveData(url);
        h.makeHtml(feed);
    }
    catch (error) {
        expect(error).not.toBeNull();
    }
});













