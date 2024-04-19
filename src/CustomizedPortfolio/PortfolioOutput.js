import React from 'react';
import Image from './Image.png'; // assuming you have the image in the same directory

const PortfolioOutput = () => {
  const rectangleContainer = {
    marginTop: '50px',
    marginLeft: '100px',
    width: '1080px',
    height: '85vh',
    backgroundColor: '#fff',
  };

  const headerContainer = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    color: '#fff',
    height: '60px',
    width: '100%',
    backgroundColor: '#305448',
    marginTop: '0px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflowWrap: 'break-word',
  };

  const userName = {
    marginLeft: '20px',
  };

  const userNatureKeywords = {
    marginRight: '10px',
  };

  const leftPartContainer = {
    backgroundColor: '#E0E5E1',
    height: `calc(85vh - 60px)`,
    width: '30%',
    float: 'left',
    padding: '50px',
  };

  const rightPartContainer = {
    backgroundColor: '#fff',
    height: `calc(85vh - 60px)`,
    width: '70%',
    float: 'right',
  };

  const leftPartImg = {
    padding: '0px',
    height: '230px',
  };

  const bioContainer = {
    marginTop: '10px',
  };

  const bioH3 = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
    color: '#fff',
    height: '20px',
    marginLeft: '30px',
    marginRight: '30px',
    width: '90%',
    backgroundColor: '#D4B6AE',
    marginTop: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const paragraph = {
    fontSize: 'small',
    fontStyle: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '30px',
    marginRight: '30px',
    width: '90%',
    overflowWrap: 'break-word',
  };

  const subLeft1 = {
    // float: 'left',
    fontSize: '14px',
    color: '#fff',
    height: '20px',
    width: '90%',
    marginLeft: '30px',
    marginRight: '30px',
    backgroundColor: '#7DA090',
    marginTop: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // marginRight: '2%',
  };

  const subRight1 = {
    // float: 'right',
    fontSize: '14px',
    color: '#fff',
    height: '20px',
    width: '90%',
    marginLeft: '30px',
    marginRight: '30px',
    backgroundColor: '#984647',
    marginTop: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const subLeft2 = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    color: '#fff',
    height: '20px',
    marginLeft: '30px',
    marginRight: '18px',
    width: '90%',
    backgroundColor: '#7DA090',
    marginTop: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // float: 'left',
  };
  const subRight2 = {
    // float: 'right',
    fontSize: '14px',
    color: '#fff',
    height: '20px',
    width: '90%',
    backgroundColor: '#984647',
    marginTop: '0px',
    marginLeft: '30px',
    marginRight: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const Paragraphcustomstyleleft = {
 
    fontSize: 'small',
    fontStyle: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '30px',
    marginRight: '30px',
    // float: 'left',
    overflowWrap: 'break-word',
  };
  const Paragraphcustomstyleright = {
    fontSize: 'small',
    fontStyle: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '30px',
    marginRight: '30px',
    // float: 'right',
    overflowWrap: 'break-word',
  };

  return (
    <div style={rectangleContainer}>
      <div style={headerContainer}>
        <h3 style={userName}>Conscious Mary</h3>
        <h4 style={userNatureKeywords}>Kind - Conscious - Gentle</h4>
      </div>
      <div style={leftPartContainer}>
        <img style={leftPartImg} src={Image} alt="Mary" />
      </div>
      <div style={rightPartContainer}>
        <div style={bioContainer}>
          <h3 style={bioH3}>Bio</h3>
          <p style={paragraph}>
            Mary is a mindful and active person who values her mental and physical well-being. She enjoys
            practicing mindfulness and is curious about journaling. She is creative and enjoys exploring
            different creative outlets such as painting writing, and photography. Mary is also a quiet person
            who values spending time taking care of herself.
          </p>
        </div>
        <div 
        // style={subLeft1}
        >
          <h3 style={subLeft1}>Goals & Interest</h3>
          <p style={Paragraphcustomstyleleft}>
            Understand her feelings,
            Cope with her emotions,
            Be more constant in her actions,
            Maintainher emotional well-being.
          </p>
        </div>
        <div 
        // style={subRight1}
        >
          <h3 style={subRight1}>Skills</h3>
          <p style={Paragraphcustomstyleright}>
            Strengthening mindfulness,
            Exploring different creative outlets,
            Developing her journaling skills,
            Staying true to herself.
          </p>
        </div>
        <div 
        // style={subLeft2}
        >
          <h3 style={subLeft2}>Interests</h3>
          <p style={Paragraphcustomstyleleft}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat beatae accusantium, veritatis ea
            doloribus non soluta voluptate, vitae voluptates facilis tenetur mollitia deleniti amet inventore
            harum cumque earum cupiditate quis.
          </p>
        </div>
        <div
        //  style={subRight2}
        >
          <h3 style={subRight2}>Current Feelings</h3>
          <p style={Paragraphcustomstyleright}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi quo quos quae qui, cupiditate
            eveniet quasi! Eos est, doloribus animi nam quasi deleniti blanditiis, saepe alias error tempore
            soluta beatae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioOutput;