//import styled, { calc } from 'styled-components';
import "./App.css";
import React, { useState, useEffect } from "react";

import { render } from "react-dom";
//import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
//import { SliderRail, Handle, Track, Tick } from "./Components"; // example render components - source below
import Slider, { } from "rc-slider";
// We can just import Slider or Range to reduce bundle size
 //import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import ReactDOM from "react-dom";
import Tooltip from "rc-tooltip";

// const test= () => {

// }
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};
const wrapperStyle = { width: 400, margin: 50 };
function Example(props) {
  const emojis = [
    {
      rating: 1,
      imgPath: require("./images/emoji1.jpeg"),
      width: 0
    },
    {
      rating: 2,
      imgPath: require("./images/emoji2.jpeg"),
      width: 10
    },
    {
      rating: 3,
      imgPath: require("./images/emoji3.jpeg"),
      width: 20
    },
    {
      rating: 4,
      imgPath: require("./images/emoji4.jpeg"),
      width: 30
    },
    {
      rating: 5,
      imgPath: require("./images/emoji5.jpeg"),
      width: 40
    },
    {
      rating: 6,
      imgPath: require("./images/emoji6.jpeg"),
      width: 50
    },
    {
      rating: 7,
      imgPath: require("./images/emoji7.jpeg"),
      width: 60
    },
    {
      rating: 8,
      imgPath: require("./images/emoji8.jpeg"),
      width: 70
    },
    {
      rating: 9,
      imgPath: require("./images/emoji9.jpeg"),
      width: 80
    },
    {
      rating: 10,
      imgPath: require("./images/emoji10.jpeg"),
      width: 90
    }
  ];
  const initialState = {
    questions: [
      {
        question: "How was your experience in our hotel?",
        ratings: [
          {
            rating: 1,
            imgPath: require("./images/emoji1.jpeg"),
            selected: true,
            width: 0
          },
          {
            rating: 2,
            imgPath: require("./images/emoji2.jpeg"),
            selected: false,
            width: 10
          },
          {
            rating: 3,
            imgPath: require("./images/emoji3.jpeg"),
            selected: false,
            width: 20
          },
          {
            rating: 4,
            imgPath: require("./images/emoji4.jpeg"),
            selected: false,
            width: 40
          },
          {
            rating: 5,
            imgPath: require("./images/emoji5.jpeg"),
            selected: false,
            width: 50
          },
          {
            rating: 6,
            imgPath: require("./images/emoji6.jpeg"),
            selected: false,
            width: 60
          },
          {
            rating: 7,
            imgPath: require("./images/emoji7.jpeg"),
            selected: false,
            width: 70
          },
          {
            rating: 8,
            imgPath: require("./images/emoji8.jpeg"),
            selected: false,
            width: 80
          },
          {
            rating: 9,
            imgPath: require("./images/emoji9.jpeg"),
            selected: false,
            width: 90
          },
          {
            rating: 10,
            imgPath: require("./images/emoji10.jpeg"),
            selected: false,
            width: 0
          }
        ]
      },
      {
        question: "222How was your day in our hotel?",
        ratings: [
          {
            rating: 1,
            imgPath: require("./images/emoji1.jpeg"),
            selected: true,
            width: 0
          },
          {
            rating: 2,
            imgPath: require("./images/emoji2.jpeg"),
            selected: false,
            width: 10
          },
          {
            rating: 3,
            imgPath: require("./images/emoji3.jpeg"),
            selected: false,
            width: 20
          },
          {
            rating: 4,
            imgPath: require("./images/emoji4.jpeg"),
            selected: false,
            width: 40
          },
          {
            rating: 5,
            imgPath: require("./images/emoji5.jpeg"),
            selected: false,
            width: 50
          },
          {
            rating: 6,
            imgPath: require("./images/emoji6.jpeg"),
            selected: false,
            width: 60
          },
          {
            rating: 7,
            imgPath: require("./images/emoji7.jpeg"),
            selected: false,
            width: 70
          },
          {
            rating: 8,
            imgPath: require("./images/emoji8.jpeg"),
            selected: false,
            width: 80
          },
          {
            rating: 9,
            imgPath: require("./images/emoji9.jpeg"),
            selected: false,
            width: 90
          },
          {
            rating: 10,
            imgPath: require("./images/emoji10.jpeg"),
            selected: false,
            width: 0
          }
        ]
      }
    ],
    answers: []
  };
  // const initialState= {
  //   question:'How was your experience in our hotel?',
  //   emojis:[]
  // }
  // Declare a new state variable, which we'll call "rating"
  //const [rating, setRating] = useinitialState(emojis[0]);
  // const [rating, setRating] = useState(initialState.questions[0]);
  const [questions, setQuestions] = useState(initialState.questions);
  const [answers, setAnswers] = useState(initialState.answers);
  const [question, setQuestion] = useState(initialState.questions[0]);
  const [ratingData, setRating] = useState(question.ratings[0]);

  // const onChange = (quesData ,evt) => {
  //   console.log("new", evt);
  //  // var newName = event.target.value;
  // };
 


  const onChange = (ev,data) => {
    console.log("qu", ev, questions, question,data);
 //  setQuestion(questions => questions.ratings.filter(c => c !== ev));
    question.ratings.map((ratingObj, i) => {
     
      if (ev === ratingObj.rating) {
      //  setQuestion(question);       
      //  setRating(question.ratings[i]);
        // setRating(rating => ({
        //   rating: rating.rating,
        //   width: rating.width,
        //   imgPath: rating.imgPath,
        //   selected: true
        // }));
        console.log("aftr", question, questions);
      }
    });
  };
  

  const sliderStyle = {
    position: "relative",
    width: "100%"
  };
 
  const domain = [1, 10];
  const defaultValues = [1];

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

const dispenseQuestion = (qu,th) => {
  console.log("qu in on click", qu, questions,th);
  setQuestion(qu)
  //setQuestion(questions => questions.find(c => c !== qu));
  console.log("qu in on click", questions, question);
};
 const handleChange = sliderValues => {
   console.log("sliderValues", sliderValues);
   //setQuestion({ sliderValues }); 
 };
  const onSliderChange = value => {
  console.log(value);
    // this.setState(      {     value      },
    //   () => {
    //     console.log(this.state.value);
    //   }
    // );
  }
  return (
    <div>
      <div className="d-flex justify-content-between">
        <div style={{ background: "grey", width: 300, height: 700 }} />
        <div className="p-4" style={{ background: "", width: 1000 }}>
          {/* heading */}
          {questions.map(function(ques, quesIndex) {
            return (
              <div key={quesIndex}>
                <div className="m-2 p-2">{ques.question}</div>
                <div className="ml-4 mt-4" style={{ height: 60 }}>
                  <Slider
                    min={1}
                    max={10}
                    defaultValue={1}
                    handle={handle}
                    // onChange={() => handleChange(ques)}
                    value={ratingData}
                   // onChange={() => onSliderChange(ratingData.rating)}
                      onChange={React.useCallback(onChange,ques)}
                    // onChange={() => dispenseQuestion(ques,this)}                    
                    tipFormatter={value => `${value}%`}
                    marks={{
                      1: 1,
                      2: 2,
                      3: 3,
                      4: 4,
                      5: 5,
                      6: 6,
                      7: 7,
                      8: 8,
                      9: 9,
                      10: 10
                    }}
                  />
                </div>
                <div>
                  <img
                    style={{
                      marginLeft: ratingData.width + "%"
                    }}
                    className="App-emoji"
                    height="70px"
                    src={ratingData.imgPath}
                    alt="emoji"
                  />
                  {/* );
                  })} */}
                </div>
              </div>
            );
          })}

          {/* <div className="m-2 p-2" style={wrapperStyle}>
            <h3>{question.question}</h3>
          </div> */}
          {/* <div className="ml-4 mt-4" style={{ height: 60 }}>
            {/* <Slider
              mode={1}
              step={1}
              domain={domain}
              rootStyle={sliderStyle}
              onUpdate={setRating}
              onChange={React.useCallback(onChange)}
              values={defaultValues}
            >
              <Rail>
                {({ getRailProps }) => (
                  <SliderRail getRailProps={getRailProps} />
                )}
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
            </Slider> */}
          {/* </div> */}
          {/* <div>
             <img
              style={{ marginLeft: rating.width + "%" }}
              className="App-emoji"
              height="70px"
              src={rating.imgPath}
              alt="emoji"
            />  </div> */}
        </div> */}
        <div style={{ background: "grey", width: 300, height: 700 }} />
      </div>
    </div>
  );
}

export default Example;