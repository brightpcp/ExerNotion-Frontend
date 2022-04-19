
import './Activity.css';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";



 const Activity = (props) => {
     /*
    const history = useNavigate();
    const { _id, name, date, type, duration, description } = props.activity;
    const deleteHandler = async () => {
        await axios
          .delete(`http://localhost:5000/books/${_id}`)
          .then((res) => res.data)
          .then(() => history("/"))
          .then(() => history("/books"));
      }; */


  return (
    <div class="history-container">
    <h2>Activity History</h2>
    
        <div class="card">
            <div class="history-img">
                <img src="./icon-sport/running (1).png" alt="" />
            </div>

            <div class="card-content">
                <div  class="history-name">
                    <h1>First Running Day</h1>
                </div>
                <div class="history-date">
                    <span>22/11/22</span>
                </div>
                <div class="history-type">
                    <h3 >running</h3>
                </div>
                <div class="history-duration">
                    <h3 >1hr30min</h3>
                </div>
                <div class="history-describe">
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, esse.</p>
                </div>    
                    
            </div>
        </div>
            
        
    </div>
  );
}

export default Activity;