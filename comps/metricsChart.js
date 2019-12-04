import React from "react";
import {Radar} from "react-chartjs-2";

const MetricsChart = (props) => {
    // console.log(props.data.metrics);//ARRAY OF SONG METRICS
    let danceability=0;
    let energy=0;
    let liveness=0;
    let loudness=0;
    let tempo=0;
    let valence=0;
    let acousticness=0;
    let instrumentalness=0;
    let speechiness=0;
    let numSongs = props.data.metrics.length;
    console.log(numSongs);
    props.data.metrics.forEach((song, index) => {
        danceability += song.danceability;
        energy += song.energy;
        liveness += song.liveness;
        loudness +=song.loudness;
        tempo += song.tempo;
        valence += song.valence;
        acousticness+=song.acousticness;
        instrumentalness+=song.instrumentalness;
        speechiness+=song.speechiness;
    });
    danceability = danceability/numSongs;
    energy=energy/numSongs;
    liveness=liveness/numSongs;
    loudness=loudness/numSongs;
    tempo=tempo/numSongs;
    valence=valence/numSongs;
    acousticness=acousticness/numSongs;
    instrumentalness=instrumentalness/numSongs;
    speechiness=speechiness/numSongs;
    console.log(props.data.playlist);
    const radarData = {
        labels: ['Danceability', 'Energy', 'Liveness', 'Valence', 'Acouticness', 'Instrumentalness', 'Speechiness'],
        datasets: [
          {
            
            backgroundColor: 'rgba(255, 255, 153, 0.2)',
            borderColor:  'white',
            pointBorderColor: 'rgba(255, 255, 153, 1)',
            // pointBackgroundColor: 'rgba(255, 255, 153, 1)',
            pointRadius: 1,
            data: [danceability, energy, liveness, valence, acousticness, instrumentalness, speechiness]
          }
        ],
        options: {
            maintainAspectRatio: false,
            responsive: true,
        }
      }
    return (
      <div>
          <Radar data={radarData} />
      </div>
    )
  }
  
  export default MetricsChart;