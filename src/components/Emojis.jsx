import React from "react";

function Watch(props){
  return (props.seconds >= 0 && props.seconds <= 4 ? <p>🕛</p> :
          props.seconds >= 5 && props.seconds <= 9 ? <p>🕐</p> :
          props.seconds >= 5 && props.seconds <= 9 ? <p>🕐</p> :
          props.seconds >= 10 && props.seconds <= 14 ? <p>🕑</p> :
          props.seconds >= 15 && props.seconds <= 19 ? <p>🕒</p> :
          props.seconds >= 20 && props.seconds <= 24 ? <p>🕓</p> :
          props.seconds >= 25 && props.seconds <= 29 ? <p>🕔</p> :
          props.seconds >= 30 && props.seconds <= 34 ? <p>🕕</p> :
          props.seconds >= 35 && props.seconds <= 39 ? <p>🕖</p> :
          props.seconds >= 40 && props.seconds <= 44 ? <p>🕗</p> :
          props.seconds >= 45 && props.seconds <= 49 ? <p>🕘</p> :
          props.seconds >= 50 && props.seconds <= 54 ? <p>🕙</p> :
          props.seconds >= 55 && props.seconds <= 59 ? <p>🕚</p> :
          <p>nope</p>)
}




export default Watch;
