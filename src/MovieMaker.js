'use strict'
let ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
let ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);
let command = ffmpeg();


export default class MovieMaker {
    constructor(value) {
        this.time = value;
    }

    // using ffmepg takes the screenshots with the given name and makes 1 video of it.
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