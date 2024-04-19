import React, { useState } from 'react';
import './PortfolioForm.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PortfolioForm() {
  const [userName, setUserName] = useState('Conscious Mary');
  const [natureKeywords, setNatureKeywords] = useState('Kind - Conscious - Gentle');
  const [bio, setBio] = useState(
    'Mary is a mindful and active person who values her mental and physical well-being. She enjoys practicing mindfulness and is curious about journaling. She is creative and enjoys exploring different creative outlets such as painting writing, and photography. Mary is also a quiet person who values spending time taking care of herself.'
  );
  const [goalsInterests, setGoalsInterests] = useState(
    'Understand her feelings, Cope with her emotions, Be more constant in her mindfulness practices, Gain knowledge on topics that teach her about mindfulness and other related topics, Guidance from experts that she can trust.'
  );
  const [painPointsConcerns, setPainPointsConcerns] = useState(
    "Struggles with finding the time to practice mindfulness consistently amidst her busy work schedule and social life. Experiences self-doubt and struggles with maintaining a regular journaling practice. Missing balance in her life Feels anxious and stressed because of the general rhythm in her life Missing a safe space. Missing expert guidance in their mindfulness practices. Doesn't know how to trust the information she finds."
  );
  const [interests, setInterests] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat beatae accusantium, veritatis ea doloribus non soluta voluptate, vitae voluptates facilis tenetur mollitia deleniti amet inventore harum cumque earum cupiditate quis.'
  );
  const [currentFeelings, setCurrentFeelings] = useState(
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi quo quos quae qui, cupiditate eveniet quasi! Eos est, doloribus animi nam quasi deleniti blanditiis, saepe alias error tempore soluta beatae.'
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('portfolio/newportfolio ', {
        userName,
        natureKeywords,
        bio,
        goalsInterests,
        painPointsConcerns,
        interests,
        currentFeelings,
      });
      console.log(response);
      alert('Portfolio submitted successfully!');
    } catch (error) {
      console.log('Error submitting portfolio:', error);
    }
  };

  return (
    <div className="portfolio-container">
      <div className="headerrr">
        <span style={{ fontSize: '24px' }}>User Profile</span>
        <div style={{ textAlign: 'center' }}>
          <label htmlFor="user-name-input">User Name:</label>
          <br />
          <input
            type="text"
            id="user-name-input"
            name="UserName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{ marginLeft: '0px', color: '#000' }}
          />
          <br />
          <label htmlFor="nature-keywords-input">Nature Keywords:</label>
          <br />
          <input
            type="text"
            id="nature-keywords-input"
            name="UserNatureKeywords"
            value={natureKeywords}
            onChange={(e) => setNatureKeywords(e.target.value)}
            style={{ marginRight: '20px', color: '#000' }}
          />
          <br />
        </div>
      </div>
      <div className="left-section">
        <div className="bio-section">
          <h3>Bio</h3>
          <textarea
            id="bio-input"
            name="UserBio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows="5"
            cols="33"
          ></textarea>
        </div>
        <div className="goals-interests-section">
          <h3>Goals and Interests</h3>
          <textarea
            id="goals-interests-input"
            name="UserGoalsInterests"
            value={goalsInterests}
            onChange={(e) => setGoalsInterests(e.target.value)}
            rows="5"
            cols="33"
          ></textarea>
        </div>
      </div>
      <div className="right-section">
        <div className="pain-points-concerns-section">
          <h3>Pain Points and Concerns</h3>
          <textarea
            id="pain-points-concerns-input"
            name="UserPainPointsConcerns"
            value={painPointsConcerns}
            onChange={(e) => setPainPointsConcerns(e.target.value)}
            rows="5"
            cols="33"
          ></textarea>
        </div>
        <div className="interests-section">
          <h3>Interests</h3>
          <textarea
            id="interests-input"
            name="UserInterests"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            rows="5"
            cols="33"
          ></textarea>
        </div>
        <div className="current-feelings-section">
          <h3>Current Feelings</h3>
          <textarea
            id="current-feelings-input"
            name="UserCurrentFeelings"
            value={currentFeelings}
            onChange={(e) => setCurrentFeelings(e.target.value)}
            rows="5"
            cols="33"
          ></textarea>
        </div>
      </div>
      <div className="submit-section">
      <Link to="/dashboard/PortfolioOutputDashbaord">
        <button 
        // type="submit"
        //  onClick={handleSubmit}
         >
          Submit
        </button>
        </Link>
      </div>
    </div>
  );
}

export default PortfolioForm;


function axiosConfig() {
  const token = localStorage.getItem('authToken');

  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
}

const axiosInstance = axios.create(axiosConfig);

export { axiosInstance as axios };