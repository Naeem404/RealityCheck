import React, { useState, useRef } from 'react';
import { Button, Typography, Paper, Grid } from '@mui/material'; 

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const handleStartRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.start();

      mediaRecorderRef.current.addEventListener("dataavailable", event => {
        audioChunksRef.current.push(event.data);
      });

      setRecording(true);
    });
  };

  const handleStopRecording = () => {
    mediaRecorderRef.current.stop();

    const audioBlob = new Blob(audioChunksRef.current);
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);
    audio.play();

    setMessages([...messages, { sender: 'user', message: 'Audio message sent.' }]);
    audioChunksRef.current = [];
    setRecording(false);

    // Here you would send the audioBlob to your AI model and handle the response
    // For now, let's simulate a response after 1 second
    setTimeout(() => {
      setMessages([...messages, { sender: 'bot', message: 'This is a response from the AI model.' }]);
    }, 1000);
  };

  return (
    <div className='root'>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className='paper'>
            <div className='messageArea'>
              {messages.map((msg, index) => (
                <Typography key={index} variant="body1" align={msg.sender === 'user' ? 'right' : 'left'}>
                  {msg.message}
                </Typography>
              ))}
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} style={{ margin: 'auto' }}>
          <Paper className='inputArea' style={{ display: 'flex', alignItems: 'flex-end' }}>
            {!recording ? (
              <Button variant="contained" color="primary" onClick={handleStartRecording}>
                Start Recording
              </Button>
            ) : (
              <Button variant="contained" color="secondary" onClick={handleStopRecording}>
                Stop Recording
              </Button>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Chat;