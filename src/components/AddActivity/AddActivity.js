import React from 'react';
import './AddActivity.css'



const AddActivity = (props) => {
  const onClick = (type) => {
    props.setActivityType(type);
    alert(type);
  }



  return (
      <div className="container" id="add">
        <h2 className='h2'>Add your Activity</h2>

        <div className="banner">
            <div className="banner-area">
              <img src="../icon-sport/running.svg" 
                    alt="running" 
                    onClick={() => onClick("running")}/>
            </div>
            <div className="banner-area">
              <img src="../icon-sport/swimming.svg" 
                    alt="swimming"
                    onClick={() => onClick("swimming")}/>
            </div>
            <div className="banner-area">
              <img src="../icon-sport/basketball.svg" 
                    alt="basketball"
                    onClick={() => onClick("basketball")}/>
            </div>
            <div className="banner-area">
              <img src="../icon-sport/bike.svg" 
                    alt="bike"
                    onClick={() => onClick("bike")}/>
            </div>
            <div className="banner-area">
              <img src="../icon-sport/dumbbell.svg" 
                    alt="dumbbell"
                    onClick={() => onClick("dumbbell")}/>
            </div>
            <div className="banner-area">
              <img src="../icon-sport/ping-pong.svg" 
                    alt="ping-pong"
                    onClick={() => onClick("ping-pong")}/>
            </div>
        </div>
        <div className="banner">
            <div className="banner-area">
              <img src="../icon-sport/boxing.svg" 
                    alt="boxing"
                    onClick={() => onClick("boxing")}/>
            </div>
            <div className="banner-area">
              <img src="../icon-sport/tennis.svg" 
                    alt="tennis"
                    onClick={() => onClick("tennis")}/>
            </div>
            <div className="banner-area">
              <img src="../icon-sport/yoga.svg" 
                    alt="yoga"
                    onClick={() => onClick("yoga")}/>
            </div>
            <div className="banner-area">
              <img src="../icon-sport/soccer.svg" 
                    alt="soccer"
                    onClick={() => onClick("soccer")}/>
            </div>
            <div className="banner-area">
              <img src="../icon-sport/golf.svg" 
                    alt="golf"
                    onClick={() => onClick("golf")}/>
            </div>
            <div className="banner-area">
              <img src="../icon-sport/other.svg" 
                    alt="other"
                    onClick={() => onClick("other")}/>
            </div>
        </div>
    </div>
  );
}

export default AddActivity;