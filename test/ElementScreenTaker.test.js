import ElementScreenTaker from '../src/ElementScreenTaker';
import 'dotenv/config';





it('takeScreenshots() makes expected num of screenshots', async () => {
    let e = new ElementScreenTaker();
    try {
        let id = e.getId();

        e.setUrl = process.cwd()+"\\test_Page.html";
        let path = await e.takeScreenShots();
        expect(path).toBeDefined();
        expect(id.length).toBe(10);

    } catch (error) {
        console.error(error);
    }
},90000);


it('takeScreenshots() throws error when id is empty', async () => {
    let e2 = new ElementScreenTaker();
    try {
        e2.setId(undefined)        
        let path = await e2.takeScreenShots();
     

    } catch (error) {
        expect(error).not.toBeNull();
    }
},90000);


