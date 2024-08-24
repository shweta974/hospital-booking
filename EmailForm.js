import React, { useState } from 'react';
import axios from 'axios';

const EmailForm = () => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/send-email', {
        recipient,
        subject,
        message,
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email');
    }
  };


  const handleInput=(e)=>{
    e.preventDefault()
      alert('successfully')

    
  }

  return (
<div  className="d-flex justify-content-center align-items-center bg-secondary vh-100">
<div className="bg-primary p-3 rounded w-25">
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label>Recipient:</label>
        <input
          type="email"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
          className='form-control rounded-0' 
        />
      </div>
      <div className='mb-3'>
        <label>Subject:</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className='form-control rounded-0' 
        />
      </div>
      <div className='mb-3'>
        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className='form-control rounded-0' 
        />
      </div>
      <button type="submit" className="btn btn-success w-100 rounded-0" onClick={handleInput}>
                    Send Email
                </button>
    </form>
    </div>
    </div>
  );
};

export default EmailForm;
