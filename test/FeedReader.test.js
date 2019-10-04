
import FeedReader from "../src/FeedReader";
it('retrieveData() retrieves feed', async () => {
    let f = new FeedReader();
    expect(f.feed).toBeUndefined();
    f.RetrieveData();
    expect(f.feed).not.toBeNull();
  
});

it('retrieveData() throws error when url is invalid', async () => {
    let f = new FeedReader();
    f.url = "";
    try{
        let feed = await feedReader.RetrieveData();
    }catch(error){
        expect(error).not.toBeNull();
    }
    
});





