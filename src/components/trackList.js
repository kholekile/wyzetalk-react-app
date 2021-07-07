import React from 'react';
import {formattext, secondsToMinutes} from '../utils/helpers';

export default function TrackList(props) {

  const {tracks} = props

  return (
    <>
    <h4 className="track-list">Top Tracks:</h4>
    <ul className="track-list-container">
        {
          tracks.map((item, index) => (
            <div className="track-list-item-container">
              <li className="track-list-item" key={index}> {index +1}. {formattext(item.title, 25, 36)}</li>
              <span className="track-list-item-duration">{secondsToMinutes(item.duration)}</span>
            </div>
        ))
        
        }
    </ul>
    </>
  );
}