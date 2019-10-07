import ElementScreenTaker from '../src/ElementScreenTaker';
import 'dotenv/config';
import { isTSAnyKeyword, exportAllDeclaration, tsRestType } from '@babel/types';
import { expression } from '@babel/template';
import HtmlGenerator from '../src/HtmlGenerator';





// it('takeScreenshots() makes expected num of screenshots', async () => {
//     let e = new ElementScreenTaker();
//     try {
//         let id = e.getId();

//         e.setUrl = process.cwd()+"\\test_Page.html";
//         let path = await e.takeScreenShots();
//         expect(path).toBeDefined();
//         expect(id.length).toBe(10);

//     } catch (error) {
//         console.error(error);
//     }
// },90000);


// it('takeScreenshots() throws error when id is empty', async () => {
//     let e2 = new ElementScreenTaker();
//     try {
//         e2.setId(undefined)        
//         let path = await e2.takeScreenShots();
     

//     } catch (error) {
//         expect(error).not.toBeNull();
//     }
// },90000);


// take screenshots makes right amount of screenshots

it(' getCssSelector() fills id array', async () =>{
    let cssSelector = new ElementScreenTaker();
    await cssSelector.getCssSelectors('.card');
    expect(cssSelector.getId()).not.toBeNull();
})



it('getCssSelector() throws error when url is wrong', async () =>{
    let cssSelector = new ElementScreenTaker();
    try{
        cssSelector.setUrl("nonsense")
       await cssSelector.getCssSelectors();
    }catch(error){
        expect(error).not.toBeNull();
    }
})

it('take screenshots makes screenshots', async () =>{
    let screenTaker = new ElementScreenTaker();
    try{
        let test = await screenTaker.takeScreenShots();
    }catch(error){
        expect(error).toBeNull();
    }
})


it('take screenshots throws error  ', async () =>{
    let screenTaker = new ElementScreenTaker();
    try{
        screenTaker.setId(undefined);
       let test = await  screenTaker.takeScreenShots();
    }catch(error){
        expect(error).not.toBeNull();
    }
})

it('captureScreens() throws error when params are wrong', async() => {
    let screenCapturer = new ElementScreenTaker();
    try{
       await screenCapturer.captureScreens('nonsense', 'A')
    }catch(error){
        expect(error).not.toBeNull();
    }
})





