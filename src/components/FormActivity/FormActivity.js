import axios from "axios";
import React, { useState, useEffect } from "react";
import "./FormActivity.css";
import { useNavigate } from "react-router-dom";

const FormActivity = (props) => {
  const [activityName, setActivityName] = useState("");
  const [activityDate, setActivityDate] = useState("");
  const [activityDuration, setActivityDuration] = useState("");
  const [activityDescription, setActivityDescription] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  const [isDateValid, setIsDateValid] = useState(false);
  const [isTypeValid, setIsTypeValid] = useState(false);
  const [isDurationValid, setIsDurationValid] = useState(false);
  const [isDescriptionValid, setIsDescriptionValid] = useState(false);
  const history = useNavigate();

  const handleChangeActivityName = (event) => {
    setActivityName(event.target.value);
  };
  const handleChangeActivityDate = (event) => {
    setActivityDate(event.target.value);
  };
  const handleChangeActivityType = (event) => {
    props.setActivityType(event.target.value);
  };
  const handleChangeActivityDuration = (event) => {
    setActivityDuration(event.target.value);
  };

  const handleChangeActivityDescription = (event) => {
    const newValue = event.target.value;
    if (newValue.length > 300) {
      return;
    } else {
      setActivityDescription(event.target.value);
    }
    // setActivityDescription(e.target.value);
  };
  //------------------------Start - Duration-------------------//
  const onBlur = (event) => {
    const activityDuration = event.target.value;
    const seconds = Math.max(0, getSecondsFromHHMMSS(activityDuration));

    const time = toHHMMSS(seconds);
    setActivityDuration(time);
  };

  const getSecondsFromHHMMSS = (activityDuration) => {
    const [str1, str2, str3] = activityDuration.split(":");

    const val1 = Number(str1);
    const val2 = Number(str2);
    const val3 = Number(str3);

    if (!isNaN(val1) && isNaN(val2) && isNaN(val3)) {
      return val1;
    }

    if (!isNaN(val1) && !isNaN(val2) && isNaN(val3)) {
      return val1 * 60 + val2;
    }

    if (!isNaN(val1) && !isNaN(val2) && !isNaN(val3)) {
      return val1 * 60 * 60 + val2 * 60 + val3;
    }

    return 0;
  };

  const toHHMMSS = (secs) => {
    const secNum = parseInt(secs.toString(), 10);
    const hours = Math.floor(secNum / 3600);
    const minutes = Math.floor(secNum / 60) % 60;
    const seconds = secNum % 60;

    return [hours, minutes, seconds]
      .map((val) => (val < 10 ? `0${val}` : val))
      .filter((val, index) => val !== "00" || index > 0)
      .join(":")
      .replace(/^0/, "");
  };
  //------End - Duration-----//
  //-----------------validate Name--------------------------//
  useEffect(() => {
    if (activityName.length > 3) {
      setIsNameValid(true);
    } else {
      setIsNameValid(false);
    }
  }, [activityName]);

  //--------------------validate date------------------------//
  useEffect(() => {
    if (activityDate !== "") {
      setIsDateValid(true);
    } else {
      setIsDateValid(false);
    }
  }, [activityDate]);
  //-----------------validate Type--------------------------//
  useEffect(() => {
    const validTypes = [
      "running",
      "ping-pong",
      "swimming",
      "basketball",
      "bike",
      "dumbbell",
      "boxing",
      "yoga",
      "tennis",
      "golf",
      "other",
      "soccer",
    ];
    const isTypeValid = validTypes.includes(props.activityType);
    setIsTypeValid(isTypeValid);
    console.log(isTypeValid);
  }, [props.activityType]);

  //-----------------validate Duration--------------------------//
  useEffect(() => {
    if (activityDuration.length > 0 && activityDuration.length > 0) {
      setIsDurationValid(true);
    } else {
      setIsDurationValid(false);
    }
  }, [activityDuration]);
  //-----------------validate Description--------------------------//
  useEffect(() => {
    if (activityDescription.length > 9) {
      setIsDescriptionValid(true);
    } else {
      setIsDescriptionValid(false);
    }
  }, [activityDescription]);
  //----------------validate submit---------------------------------//
  const canSubmit =
    isDateValid &&
    isNameValid &&
    isTypeValid &&
    isDurationValid &&
    isDescriptionValid;
  //------------------------------------------------------------------//
  console.log(activityDate);

  const imgsrc = `./icon-sport/${props.activityType}.svg`;

  const sendRequest = async () => {
    if (canSubmit) {
      await axios
        .post("http://localhost:5000/activities", {
          date: activityDate,
          name: activityName,
          duration: activityDuration,
          type: props.activityType,
          description: activityDescription,
        })
        .then((res) => res.data);
    } else {
      alert("Invalid value");
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/activities"));
  };
  //axios post

  return (
    <div className="activity-container">
      <form className="activity" onSubmit={onSubmitHandler}>
        <div className="activity-name">
          <h3>Activity Name</h3>
          <input
            id="fullname"
            name="fullname"
            type="text"
            placeholder="I'm running with my dog"
            isNameValid={isNameValid}
            value={activityName}
            onChange={handleChangeActivityName}
          />
        </div>

        <div className="date">
          <h3>Date</h3>
          <input
            id="datename"
            type="date"
            isDateValid={isDateValid}
            placeholder="dd/mm/yyyy"
            value={activityDate}
            onChange={handleChangeActivityDate}
          />
        </div>
        <div className="activity-type">
          <h3>Activity Type</h3>
          <select
            value={props.activityType}
            onChange={handleChangeActivityType}
          >
            <option>running</option>
            <option>swimming</option>
            <option>basketball</option>
            <option>bike</option>
            <option>dumbbell</option>
            <option>ping-pong</option>
            <option>boxing</option>
            <option>tennis</option>
            <option>yoga</option>
            <option>soccer</option>
            <option>golf</option>
            <option>other</option>
          </select>
        </div>
        <div className="activity-duration">
          <h3>Activity-Duration</h3>
          <input
            type="text"
            placeholder="min"
            isDurationValid={isDurationValid}
            value={activityDuration}
            onBlur={onBlur}
            onChange={handleChangeActivityDuration}
          />
        </div>
        <div className="describe">
          <h3>Describe this journal</h3>
          <input
            type="text"
            isDescriptionValid={isDescriptionValid}
            value={activityDescription}
            onChange={handleChangeActivityDescription}
          />
        </div>
        <button type="submit" className="add-button">
          ADD ACTIVITY
        </button>
      </form>
      <div className="activity-img">
        <img src={imgsrc} alt="" />
      </div>
    </div>
  );
};

export default FormActivity;
