import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}{' '}
      <img src={arrow} alt="arrow-icon" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

InfoBox.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      안녕하세요/Hello/Hi, I am{' '}
      <span className="font-semibold">Mustofa Adny</span>👋
      <br />
      Junior Front-End Web Developer
      <br />
      <span className="text-xs mt-3">Drag or Swap to see Details</span>
    </h1>
  ),
  2: (
    <InfoBox
      text="Interest career as a Full-Stack Web Developer and picked up skill along the way"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="My projects to help me learn and improve my skills"
      link="/projects"
      btnText="Visit My Portofolio"
    />
  ),
  4: (
    <InfoBox
      text="Looking for a dev?, let's get in touch"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

export default function HomeInfo({ currentStage }) {
  return renderContent[currentStage] || null;
}

HomeInfo.propTypes = {
  currentStage: PropTypes.number.isRequired,
};
