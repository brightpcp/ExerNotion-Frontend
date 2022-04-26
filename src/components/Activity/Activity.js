import "./Activity.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  const [lastfetch, setLastfetch] = useState(new Date());
  const cutDate = (date) => date.slice(0, 10);
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
  }, [lastfetch]);

  // axios get

  // setActivites
  const UpdateHandler = (_id) => {
    history(`/update/${_id}`);
  };

  const deleteHandler = async (_id) => {
    console.log(_id);
    await axios
      .delete(`http://localhost:5000/activities/${_id}`)
      .then((res) => res.data.activity)

      .then(() => setLastfetch(new Date()));
  };

  return (
    <div className="container">
      <h2 className="memory">Activity Memory</h2>
      <div className="activity-container">
        {activities.map((activity, index) => (
          <div class="card-container">
            <div class="card">
              <div class="front">
                <img src={`./icon-sport/${activity.type}.svg`} alt="" />
                <h2 class="sub-title">{cutDate(activity.date)}</h2>
                <h1 class="title">{activity.name}</h1>
              </div>
              <div class="back">
                <h3 class="synopsis">{activity.type}</h3>
                <h4>1.30 Hr</h4>
                <p class="scroller">{activity.description}</p>
                <div
                  class="btn"
                  onClick={() => {
                    UpdateHandler(activity._id);
                  }}
                >
                  Edit
                </div>
                <div
                  class="btn secondary"
                  onClick={() => {
                    deleteHandler(activity._id);
                  }}
                >
                  <FontAwesomeIcon icon="fa-solid fa-pen" />
                  Delete
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;

{
  /* <div className="card" key={index}>
          <div className="history-img">
            <img src={`./icon-sport/${activity.type}.svg`} alt="" />
          </div>

          <div className="card-content">
            <div className="history-name">
              <h1>{activity.name}</h1>
            </div>
            <div className="history-date">
              <span> {cutDate(activity.date)}</span>
            </div>
            <div className="history-type">
              <h3>Type: {activity.type}</h3>
            </div>
            <div className="history-duration">
              <h3>Duration: {activity.duration} Hr</h3>
            </div>
            <div className="history-description">
              <p>Descriiption :{activity.description}</p>
            </div>
            <div className="button-container">
          <button
          className="update-button"
            onClick={() => {
              UpdateHandler(activity._id);
            }}
          >
            <span>Update</span>
          </button>
          <button 
            className="delete-button"
            onClick={() => {
              deleteHandler(activity._id);
            }}
          >
            <span>Delete</span>
          </button>
          </div>
          </div>
          
        </div>
 */
}
