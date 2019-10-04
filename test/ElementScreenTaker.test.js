import ElementScreenTaker from '../src/ElementScreenTaker';
import 'dotenv/config';





it('ElementScreenTaker() makes expected num of screenshots', async () => {
    let e = new ElementScreenTaker();
    try {
        let id = e.getId();

        e.setUrl = process.cwd()+"\\test_Page.html";
        console.log(process.cwd()+"\\test_Page.html");
        let path = await e.takeScreenShots();
        expect(path).toBeDefined();
        expect(id.length).toBe(10);

    } catch (error) {
        console.error(error);
    }
},90000);

