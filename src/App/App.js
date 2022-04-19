import React, { useState } from 'react';
import './App.css';
import AddActivity from '../components/AddActivity/AddActivity';
import FormActivity from '../components/FormActivity/FormActivity';
import Footer from '../components/Footer/Footer';

function App() {
  const [activityType, setActivityType] = useState("running");


  return (
    <div className="App">
    
      <AddActivity 
        setActivityType={setActivityType} 
      />
      <FormActivity 
        activityType={activityType}
        setActivityType={setActivityType}
      />
      <Footer />
    </div>
  );
}

export default App;
