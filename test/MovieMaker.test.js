import MovieMaker from '../src/MovieMaker';

it('movie maker makes movie', async () => {
    let mm = new MovieMaker();
    try {
        
        let path = './/7_9_2019_8_27_';
        await  mm.makeMovie(path);
    }
    catch (error) {
        expect(error).toBeNull();
    }
})

it('movie maker throws error when path is wrong', async () => {
    let mm2 = new MovieMaker();
    try {
       await  mm2.makeMovie();
    }
    catch (error) {
        expect(error).not.toBeNull();
    }
})
   
