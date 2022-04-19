/*  import React, { useEffect, useState } from "react";
import axios from "axios";
import Activity from "./Activity";
import "./Activities.css"
const URL = "http://localhost:5000/activities";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Activities = () => {
  const [activities, setActivities] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setActivities(data.activities));
  }, []);
  console.log(activities);
  return (/
    <div>
      <ul>
        {activities &&
          activities.map((activity, i) => (
            <li key={i}>
              <Activity activity={activity} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Activities;  */