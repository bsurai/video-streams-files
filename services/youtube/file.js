const { createWriteStream, readFileSync } = require('fs')
const youtubedl = require('youtube-dl')

exports.createFile = async () => {
    const name = 'myvideo.mp4'
    await download(name)

    return readFileSync(name)
}

const download = (name) => new Promise((res) => {
    const video = youtubedl('https://www.youtube.com/watch?v=FmrGz8qSyrk',
        // Optional arguments passed to youtube-dl.
        ['--format=18'],
    )

    video.pipe(createWriteStream(name))

    video.on('end', function() {
        res()
      })
})
