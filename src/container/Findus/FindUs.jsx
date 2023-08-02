import { useState } from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './FindUs.css';

const FindUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>
          Find Us
        </h1>
        <div className="app__wrapper-content form-wrapper">
          <form action="" className="contact-form">
            <input
              type="text"
              value={formData.fullName}
              placeholder="Full Name"
              name="fullName"
              onChange={handleChange}
            />
            <input
              type="text"
              value={formData.email}
              placeholder="Email Adress"
              name="email"
              onChange={handleChange}
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="custom__button"
              style={{ marginTop: '2rem' }}
              onClick={handleSubmit}
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.findus} alt="find us" />
      </div>
    </div>
  );
};

export default FindUs;
