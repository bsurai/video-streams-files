const youtubedl = require('youtube-dl')

exports.createStream = () => {
    let downloaded = 0
    const video = youtubedl('https://www.youtube.com/watch?v=FmrGz8qSyrk',
 
    // Optional arguments passed to youtube-dl.
    ['--format=18'],
 
    // start will be sent as a range header
    { cwd: __dirname })

    return video
}
