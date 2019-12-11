import React from 'react'

const AudioPlayer = (props) => (
    <audio controls>
        <source src={props.path} type="audio/mpeg" />
    Your browser does not support the audio element.
    </audio>
)

export default AudioPlayer