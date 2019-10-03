
import HtmlGenerator from "../src/HtmlGenerator";




it('result != empty', async () => {
    let items = [{
        enclosure:
        {
            length: '0',
            type: 'image/jpeg',
            url:
                'https://media.nu.nl/m/el4xoixa6z8c_sqr256.jpg/schouten-tegen-boeren-zolang-ik-minister-ben-wordt-de-veestapel-niet-gehalveerd.jpg'
        },
        title: 'Schouten tegen boeren: \'Zolang ik minister ben, wordt de veestapel niet gehalveerd\'',
        content: 'Duizenden boeren zijn in Den Haag om te demonstreren. Ze zijn het zat dat er een negatief beeld over boeren wordt geschetst. Minister Carola Schouten van Landbouw heeft rond 13.30 uur de betogers toegesproken en zei dat zolang zij minister, is de veestapel niet zal worden gehalveerd.',
    }]
    let h = new HtmlGenerator(items);
    h.makeHtml();
    expect(h.result).not.toBeNull();
});


it('aborts when feed is empty', async () => {
    let items = [{
        enclosure:
        {
            // length: '0',
            // type: 'image/jpeg',
            // url:
            //     'https://media.nu.nl/m/el4xoixa6z8c_sqr256.jpg/schouten-tegen-boeren-zolang-ik-minister-ben-wordt-de-veestapel-niet-gehalveerd.jpg'
        },
        title: 'Schouten tegen boeren: \'Zolang ik minister ben, wordt de veestapel niet gehalveerd\'',
        content: 'Duizenden boeren zijn in Den Haag om te demonstreren. Ze zijn het zat dat er een negatief beeld over boeren wordt geschetst. Minister Carola Schouten van Landbouw heeft rond 13.30 uur de betogers toegesproken en zei dat zolang zij minister, is de veestapel niet zal worden gehalveerd.',
    }]
    let h = new HtmlGenerator(items);
    h.makeHtml();
    expect(h.result).toBeNull();
});




