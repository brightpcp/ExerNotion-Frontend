import React from 'react';
import './AddActivity.css'


const AddActivity = (props) => {
  const onClick = (type) => {
    props.setActivityType(type);
    alert(type);
  }


  return (
      <div className="container" id="add">
        <h2>Add your Activity</h2>

        <div className="banner">
            <div className="banner-area">
              <img src="../icon-sport/running (1).png" 
                    alt="running" 
                    onClick={() => onClick("running")}/>
            </div>
            <div className="banner-area">
              <img src="../icon-sport/swimming (1).png" 
                    alt="swimming"
                    onClick={() => onClick("swimming")}/>
            </div>
            <div className="banner-area">
              <img src="../icon-sport/basketball (1).png" 
                    alt="basketball"
                    onClick={() => onClick("basketball")}/>
            </div>
            <div className="banner-area">
              <img src="../icon-sport/bike (1).png" 
                    alt="bike"
                    onClick={() => onClick("bike")}/>
            </div>
            <div className="banner-area">
              <img src="../icon-sport/dumbbell (1).png" 
                    alt="dumbbell"
                    onClick={() => onClick("dumbbell")}/>
            </div>
            <div className="banner-area">
              <img src="../icon-sport/ping-pong (1).png" 
                    alt="ping-pong"
                    onClick={() => onClick("ping-pong")}/>
            </div>
        </div>
        <div className="banner">
            <div className="banner-area">
              <img src="../icon-sport/boxing-gloves.png" 
                    alt="boxing"
                    onClick={() => onClick("boxing")}/>
            </div>
            <div className="banner-area">
              <img src="../icon-sport/tennis (1).png" 
                    alt="tennis"
                    onClick={() => onClick("tennis")}/>
            </div>
            <div className="banner-area">
              <img src="../icon-sport/yoga (1).png" 
                    alt="yoga"
                    onClick={() => onClick("yoga")}/>
            </div>
            <div className="banner-area">
              <img src="../icon-sport/soccer-ball (1).png" 
                    alt="soccer"
                    onClick={() => onClick("soccer")}/>
            </div>
            <div className="banner-area">
              <img src="../icon-sport/golf (1).png" 
                    alt="golf"
                    onClick={() => onClick("golf")}/>
            </div>
            <div className="banner-area">
              <img src="../icon-sport/ellipsis.png" 
                    alt="other"
                    onClick={() => onClick("other")}/>
            </div>
        </div>
    </div>
  );
}

export default AddActivity;