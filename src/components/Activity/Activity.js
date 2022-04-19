import "./Activity.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const URL = "http://localhost:5000/activities";


const Activity = (props) => {
    const history = useNavigate();
  const [activities, setActivities] = useState([
    {
        
      name: "First Running Day",
      date: "2022",
      type: "running",
      duration: "1:00",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, esse.`,
    },
  ]);

  //useEffect
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        console.log(res);
        setActivities(res.data.activity);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // axios get

  // setActivites
 const UpdateHandler = (_id) =>{
    history(`/update/${_id}`)
 }
  
  const deleteHandler = async (_id) => {
    console.log(_id);
    await axios
      .delete(`http://localhost:5000/activities/${_id}`)
      .then((res) => res.data.activity)

      .then(() => history("/activities"));
  };

  return (
    <div className="history-container">
      <h2>Activity History</h2>
      {activities.map((activity, index) => (
        <div className="card" key={index}>
          <div className="history-img">
            <img src={`./icon-sport/${activity.type} (1).png`} alt="" />
          </div>

          <div className="card-content">
            <div className="history-name">
              <h1>{activity.name}</h1>
            </div>
            <div className="history-date">
              <span>{activity.date}</span>
            </div>
            <div className="history-type">
              <h3>{activity.type}</h3>
            </div>
            <div className="history-duration">
              <h3>{activity.duration}</h3>
            </div>
            <div className="history-description">
              <p>{activity.description}</p>
            </div>
          </div>
          <button
            onClick={() => {
              UpdateHandler(activity._id);
            }}
          >
            Update
          </button>
          <button
            onClick={() => {
              deleteHandler(activity._id);
            }}
          >
            Delete
          </button>
          
        </div>
      ))}
    </div>
  );
};

export default Activity;
