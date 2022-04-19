/* import {
  Box,
  Button,
  FormLabel,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ActivityDetail = () => {
    const [inputs, setInputs] = useState();
    const id = useParams().id;
    const history = useNavigate();
    useEffect(() => {
      const fetchHandler = async () => {
        await axios
          .get(`http://localhost:5000/activities/${id}`)
          .then((res) => res.data)
          .then((data) => setInputs(data.activity));
      };
      fetchHandler();
    }, [id]);
  
    const sendRequest = async () => {
      await axios
        .put(`http://localhost:5000/activities/${id}`, {
            name: String(inputs.name),
            date: Date(inputs.date),
            type: String(inputs.type),
            duration: Number(inputs.duration),
            description: String(inputs.description)
        })
        .then((res) => res.data);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      sendRequest().then(() => history("/activities"));
    };
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  
    return (
      <div>
        {inputs && (
          <form onSubmit={handleSubmit}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent={"center"}
              maxWidth={700}
              alignContent={"center"}
              alignSelf="center"
              marginLeft={"auto"}
              marginRight="auto"
              marginTop={10}
            >
              <FormLabel>Name</FormLabel>
              <TextField
                value={inputs.name}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="name"
              />
              <FormLabel>Date</FormLabel>
              <TextField
                value={inputs.date}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="date"
              />
              <FormLabel>Type</FormLabel>
              <TextField
                value={inputs.type}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="type"
              />
              <FormLabel>Duration</FormLabel>
              <TextField
                value={inputs.duration}
                onChange={handleChange}
                type="number"
                margin="normal"
                fullWidth
                variant="outlined"
                name="duration"
              />
              <FormLabel>Description</FormLabel>
              <TextField
                value={inputs.description}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="description"
              />

  
              <Button variant="contained" type="submit">
                Update Activity
              </Button>
            </Box>
          </form>
        )}
      </div>
    );
  };
  
  export default ActivityDetail; */