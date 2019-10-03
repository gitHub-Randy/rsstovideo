
import FeedReader from "../src/FeedReader";
it('retrieveData() retrieves feed', async () => {
    let f = new FeedReader();
    expect(f.feed).toBeUndefined();
    f.RetrieveData();
    expect(f.feed).not.toBeNull();
  
});



