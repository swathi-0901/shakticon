import React from 'react';
import styled from "@emotion/styled";


const IntroSectionWrap = styled.section`
    background: ${({ bg}) => bg ? `url(${bg})` : '#333' };
    background-size: cover;
    color: #EEE;
    margin-top: 50px;
    h4 {
        text-shadow: 2px 3px 2px rgba(0,0,0,0.5);
    }
    h1 {
        font-weight: 900;
        text-transform: uppercase;
        text-shadow: 2px 3px 4px rgba(0,0,0,0.5);
    }
    .wrapper {
      padding: 8vh 2vw;
      min-height: 80vh;
      background: linear-gradient(to right, rgba(0,0,0,0.25) 20%,  rgba(0,0,0,0.85));
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    p {
      color: white;
      font-size: 16px;
      max-width: 600px;
      text-shadow: 2px 2px 2px rgba(0,0,0,0.25);
      b {
          font-weight: 600;
          color: yellow;
      }
    }
`;

const ShaktiConIntro = () => {

    return <IntroSectionWrap bg={require('../../images/cyberpunk_woman.jpg')}>
    <div className="wrapper">
        <div className="p-2" style={{ maxWidth: '720px' }}>
            <h4>What is Shakticon?</h4>
            <h1>Inspiring & Empowering Women in CyberSecurity</h1>
            <div>
                <p>
                    ShaktiCon is a free global conference focused on inspiring, training, and upskilling women in cybersecurity.
                </p>
                <p>
                    Born out of an understanding that cultural circumstances do not always encourage women to flourish in male
                    dominated fields, ShaktiCon is committed to creating a female focused environment to showcase the range of
                    talented women in cybersecurity.
                </p>
                <p>
                    By doing this we hope to train a new generation of women to be more actively engaged in the field and enter
                    the cybersecurity workforce. ShaktiCon is <b>all about women role models inspiring & encouraging
                    young & aspiring women hackers to attain their goals without any fear.</b>
                </p>
            </div>
        </div>
    </div>
    </IntroSectionWrap>


};

export default ShaktiConIntro;