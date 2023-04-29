import React, { useState } from 'react';
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Form = () => {
    const [question, setQuestion] = useState('Qnull');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formError, setErrors] = useState({});
  
    const handleQuestionChange = (event) => {
      setQuestion(event.target.value);
    };
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleMessageChange = (event) => {
      setMessage(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const formError = {};
  
      if (question === 'Qnull') formError.question = "Please select a question!";
      if (!name) formError.name = "Please write your name";
      if (!email) formError.email = "Please write your email";
      if (!message) formError.message = "Please write a message";
  
      setErrors(formError);
      
      // the rest of the code for processing the form ...
    };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
      <FormControl variant="outlined" fullWidth margin="normal">
          <Select
          name="question"
          defaultValue='Qnull'
          id="question"
          value={question}
        
          onChange={handleQuestionChange}
          placeholder="Question"
          sx={{ backgroundColor: 'white', border: formError.question ? '1px solid red' : 'none',}}
        >
          <MenuItem value="Qnull" disabled>Your question</MenuItem>
          <MenuItem value="Q1">Question #1 goes here</MenuItem>
          <MenuItem value="Q2">Question #2 goes here</MenuItem>
          <MenuItem value="Q3">Other..</MenuItem>
        </Select>
        
      </FormControl>

      <TextField
        variant="outlined"
        fullWidth
        margin="normal"
        placeholder="Enter your name"
        InputProps={{
          sx: { backgroundColor: 'white', border: formError.name ? '1px solid red' : 'none'  , },
        }}
        value={name}
        onChange={handleNameChange}
      />
      <TextField
        
        variant="outlined"
        fullWidth
        margin="normal"
        placeholder="Enter your email"
        InputProps={{
          sx: { backgroundColor: 'white', border: formError.email ? '1px solid red' : 'none', },
        }}
        value={email}
        onChange={handleEmailChange}
      />
      <TextField
        variant="outlined"
        fullWidth
        margin="normal"
        placeholder="Enter your message"
        multiline
        rows={4}
        InputProps={{
          sx: { backgroundColor: 'white', border: formError.question ? '1px solid red' : 'none', },
        }}
        value={message}
        onChange={handleMessageChange}
      />

      <div sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button variant="contained" color="primary" type="submit" startIcon={<SendIcon />}>
          SEND
        </Button>
      </div>

    </form>
  );
};

export default Form;
