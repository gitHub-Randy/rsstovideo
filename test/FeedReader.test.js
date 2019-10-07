
import FeedReader from "../src/FeedReader";
it('retrieveData() returns not null', async () => {
    let f = new FeedReader();
    try{
        let url = "https://nu.nl/rss/Algemeen";
        let feed = await f.RetrieveData(url);
        expect(feed).not.toBeNull();
    }catch(error){
        console.error(error);
        
    }
       
});

it('retrieveData() throws error when url is invalid', async () => {
    let f = new FeedReader();
    try {
      let err = await f.RetrieveData();
      expect(f.RetrieveData()).toThrow(error);
    } catch (error) {
    }
});





