import { useState } from "react";



import "../App/App.css";
import AddActivity from "../components/AddActivity/AddActivity";
import FormActivity from "../components/FormActivity/FormActivity";
import Footer from "../components/Footer/Footer";

const Form = () => {
  const [activityType, setActivityType] = useState("running");
  return (
    <>
      <AddActivity setActivityType={setActivityType} />
      <FormActivity
        activityType={activityType}
        setActivityType={setActivityType}
      />
      <Footer />
    </>
  );
};

export default Form;