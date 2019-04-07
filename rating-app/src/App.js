//import React, { Component } from 'react';
//import styled, { calc } from 'styled-components';
import './App.css';
import React, { useState, useEffect  } from 'react';

//import { render } from "react-dom";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { SliderRail, Handle, Track, Tick } from "./Components"; // example render components - source below

// const test= () => {

// }
function Example() {

 const emojis= [{
   rating: 1,
   imgPath: require('./images/emoji1.jpeg')
  },
  {
    rating: 2,
    imgPath: require('./images/emoji2.jpeg')
  },{
    rating: 3,
    imgPath: require('./images/emoji3.jpeg')
  },
  {
    rating: 4,
    imgPath: require('./images/emoji4.jpeg')
  },
  {
    rating: 5,
    imgPath: require('./images/emoji5.jpeg')
  },
  {
    rating: 6,
    imgPath: require('./images/emoji6.jpeg')
  },
  {
    rating: 7,
    imgPath: require('./images/emoji7.jpeg')
  },
  {
    rating: 8,
    imgPath: require('./images/emoji8.jpeg')
  },
  {
    rating: 9,
    imgPath: require('./images/emoji9.jpeg')
  },
  {
    rating: 10,
    imgPath: require('./images/emoji10.jpeg')
  }]
  const state= {
    question:'How was your experience in our hotel?',
    emojis:[]
  }
    // Declare a new state variable, which we'll call "rating"
 const [rating, setRating] = useState(emojis[0]);
 const [question, setQuestion] = useState('How was your experience in our hotel?');

const onChange = (ev)  => {
 console.log(ev);
  emojis.map((emoji,i) => { 
    if(ev[0] === emoji.rating) {     
     // setRating(emoji);
        setRating((rating) => (
         {rating: rating[0], imgPath: emoji.imgPath}
       ));
    }
  })  
};



  const sliderStyle = {
    position: "relative",
    width: "100%"
  };

  const domain = [1, 10]
  const defaultValues = [1]
  

    // Similar to componentDidMount and componentDidUpdate:
      useEffect(() => {
      // This gets called after every render, by default
      // (the first one, and every one after that)
       // console.log("render!syyn",rating);
  
      // If you want to implement componentWillUnmount,
      // return a function from here, and React will call
      // it prior to unmounting.
      //return () => 
      //console.log("unmounting...", rating);
    });
  
  

    
  return (
    <div>
       <div className="d-flex justify-content-between">
       <div style={{background: "grey", width:300, height: 700 }}></div>
       <div className= "p-4"style={{background: "", width:1000}}>
               { /* heading */}
               <div className="m-2 p-2">
                <h3>{question}</h3>
               </div>
              <div className ="ml-4 mt-4" style={{ height: 60}}>
                <Slider
                  mode={1}
                  step={1}
                  domain={domain}
                  rootStyle={sliderStyle}
                  onUpdate={setRating}
                  onChange={React.useCallback(onChange)}
                  values={defaultValues}
                >
                  <Rail>
                    {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
                  </Rail>
                  <Handles>
                    {({ handles, getHandleProps }) => (
                      <div className="slider-handles">
                        {handles.map(handle => (
                          <Handle
                            key={handle.id}
                            handle={handle}
                            domain={domain}
                            getHandleProps={getHandleProps}
                          />
                        ))}
                      </div>
                    )}
                  </Handles>
                  <Tracks left={false} right={false}>
                    {({ tracks, getTrackProps }) => (
                      <div className="slider-tracks">
                        {tracks.map(({ id, source, target }) => (
                          <Track
                            key={id}
                            source={source}
                            target={target}
                            getTrackProps={getTrackProps}
                          />
                        ))}
                      </div>
                    )}
                  </Tracks>
                  <Ticks count={10}>
                    {({ ticks }) => (
                      <div className="slider-ticks">
                        {ticks.map(tick => (
                          <Tick key={tick.id} tick={tick} count={ticks.length} />
                        ))}
                      </div>
                    )}
                  </Ticks>
                </Slider>
              </div>
              <div>
                <img  className ="App-emoji" height= "70px" src={rating.imgPath}  alt="emoji" />
              </div>
      
       </div>
       <div style={{background: "grey", width:300, height: 700 }}></div>
       </div>
       
    </div>
    
  );
}

export default Example;
