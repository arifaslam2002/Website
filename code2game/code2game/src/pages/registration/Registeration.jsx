import { useState } from 'react';
import './Registeration.css';
import axios from 'axios';
import { message } from 'antd';

const Registeration = () => {
  const [formData, setFormData] = useState({
    FullName: '',
    Email: '',
    Phone: '',
    Course: '',
    Message: ''
  });

  const [messageApi, contextHolder] = message.useMessage();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/register', formData);
      messageApi.success('Registration Successful! Welcome to Code2Game.');

      // Reset form
      setFormData({
        FullName: '',
        Email: '',
        Phone: '',
        Course: '',
        Message: ''
      });
    } catch (error) {
      messageApi.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div className='registration-container'>
      {contextHolder}
      <h1 className="registration-title">Registration Form</h1>
      <div className="registration-wrapper">
        <div className="left-panel">
          <h1>“</h1>
          <h2>Let’s develop<br />games with <br />Code2Game!</h2>
        </div>

        <div className="right-panel">
          <h2>Fill Out Your Details for Registration</h2>
          <form className="styled-form" onSubmit={handleSubmit}>
            <input
              type="text"
              id="FullName"
              name="FullName"
              placeholder="Full Name"
              value={formData.FullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              id="Email"
              name="Email"
              placeholder="Email"
              value={formData.Email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              id="Phone"
              name="Phone"
              placeholder="Phone Number"
              value={formData.Phone}
              onChange={handleChange}
              required
            />

            <select
              id="Course"
              name="Course"
              value={formData.Course}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Your Course --</option>
              <option value="Unity Development">Unity Development</option>
              <option value="Unreal Engine">Unreal Engine</option>
              <option value="Game Design">Game Design</option>
              <option value="2D/3D Art">2D/3D Art</option>
              <option value="Game Programming">Game Programming</option>
              <option value="Multiplayer Game Development">Multiplayer Game Development</option>
              <option value="Mobile Game Development">Mobile Game Development</option>
              <option value="VR & AR Game Development">VR & AR Game Development</option>
              <option value="Level Design">Level Design</option>
              <option value="Game Audio">Game Audio</option>
            </select>

            <textarea
              id="Message"
              name="Message"
              rows="4"
              placeholder="Enter your message here..."
              value={formData.Message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="submit-btn">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registeration;
