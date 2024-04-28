import React from 'react'
import './contact.css'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2c631c24-402a-448f-a31b-7db7edcf6487");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className='left'>
            <h2 className='contactheading'>Send us messages</h2>
            <p className='contactparagraph'>
                Feel free to reach us message or email id 
                we mention our details below 
            </p>
            <ul>
                <li>subbaiyangokul002.53@gmail.com</li>
                <li>7708598658</li>
                <li>ucen nagercoil 629002</li>
            </ul>
        </div>
        <div className='right'>
            <form className='form' onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' placeholder='Enter your name' name='name' required/>
            <label>Phone Number</label>
            <input type='text' placeholder='Enter your name' name='phonenumber' required/>
            <label>Write a messages here</label>
            <textarea rows={6} placeholder='write a messages' name='message'></textarea>
            <button type='submit' className='button'>submit</button>
            </form>
            <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contact
