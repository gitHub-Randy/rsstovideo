'use strict'
let ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
let ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);
let command = ffmpeg();


export default class MovieMaker {
    constructor(value) {
        this.time = value;
    }

    // takes each screenshot and makes a video from it
    // path is != empty
    //aantal seconden laten isntellen
    async makeMovie(path) {
        try{
            command
            .input(path + '%1d.png')
            .inputFPS(1 / 10)
            .output(process.env.VIDEO_OUTPUT_PATH+'//'+process.env.SCENE_NAME+'.mp4')
            .outputFPS(30)
            .noAudio()
            .run();
        }catch(err){
            console.log("could not make video of rss feed!");
            throw new Error(err);
        }
       
    }
}