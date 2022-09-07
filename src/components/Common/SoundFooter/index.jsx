import './style.css'
import React from 'react';

import soundSrc from "./soundWave.png"

// import { SpectrumVisualizer, SpectrumVisualizerTheme } from 'react-audio-visualizers';
// import { AudioVisualizer, AudioVisualizerCommonProps, AudioVisualizerEvents } from 'react-audio-visualizers-core';

// Creator : Team H - batya

// const onEvent = (event, payload) => {
//   if (event === AudioVisualizerEvents.PLAYING) {
//       console.log('The audio started playing!!');
//   } else if (event === AudioVisualizerEvents.ERROR) {
//       console.log('The following error occured:', payload);
//   } 
// };


export default function SoundFooter(props) {
  return (
    <div className={"bigSiundFooter"}>
      <div className={"soundFooter"}>
        <img src={soundSrc} alt='wave music' />

        {/* <SpectrumVisualizer
              audio={props.song}
              theme={SpectrumVisualizerTheme.roundBars}
              colors={['orange', 'white']}
              iconsColor="orange"
              backgroundColor="white"
              // showMainActionIcon
              showLoaderIcon
              // numBars={10}
              // barWidth={"20px"}
              highFrequency={8000}
              //onEvent={onEvent}
></SpectrumVisualizer> */}

      </div>
    </div>
  );
}