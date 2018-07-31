function nowPlaying(songArgs) {
    let songTitle = songArgs[0];
    let artist = songArgs[1];
    let duration = songArgs[2];

    let result = `Now Playing: ${artist} - ${songTitle} [${duration}]`;
    console.log(result);
}

nowPlaying(['Number One', 'Nelly', '4:09']);