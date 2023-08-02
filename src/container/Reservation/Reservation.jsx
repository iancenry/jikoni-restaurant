import { SubHeading } from '../../components';
import './Reservation.css';
import { useState } from 'react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    date: '',
    time: '',
    peopleCount: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.fullName.length > 0 &&
      formData.email.length > 0 &&
      formData.date.length > 0 &&
      formData.time.length > 0
    ) {
      setMessage('');

      setMessage('Reservation Booked, Contact Us For More Information');
      console.log(formData);
    } else {
      setMessage('Fill All Information');
    }
  };

  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_info">
        <SubHeading title="Reservations" />
        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>
          Book A Table
        </h1>
        {message && (
          <p
            className="p__cormorant"
            style={{
              margin: '2rem 0',
              alignSelf: 'center',
              color: '#545454',
            }}
          >
            {message}
          </p>
        )}
        <div className="app__wrapper-content form-wrapper">
          <form action="" className="reservation-form">
            <input
              type="text"
              value={formData.fullName}
              placeholder="Full Name"
              name="fullName"
              onChange={handleChange}
              id="name"
              required
            />
            <input
              type="text"
              value={formData.email}
              placeholder="Email Adress"
              name="email"
              onChange={handleChange}
              required
            />

            <div
              className="inputs"
              //   style={{ display: 'flex', flexDirection: 'row' }}
            >
              <input
                type="date"
                value={formData.date}
                name="date"
                onChange={handleChange}
                required
              />
              <input
                type="time"
                value={formData.time}
                name="time"
                onChange={handleChange}
                required
              />
              <select
                id="peopleCount"
                name="peopleCount"
                value={formData.peopleCount}
                onChange={handleChange}
              >
                <option value="">-- Choose People Count --</option>
                <option value="one">1 Person</option>
                <option value="two">2 People</option>
                <option value="three">3 People</option>
                <option value="more">More</option>
              </select>
            </div>
            <input
              type="submit"
              value="Book"
              className="custom__button"
              style={{
                marginTop: '2rem',
                width: '150px',
                alignSelf: 'center',
              }}
              onClick={handleSubmit}
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
