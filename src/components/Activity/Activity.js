import "./Activity.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const URL = "https://exer-notion-backend.vercel.app/activities";

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
      .delete(`https://exer-notion-backend.vercel.app/activities/${_id}`)
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
