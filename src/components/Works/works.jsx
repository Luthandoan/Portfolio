import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';

const portfolioItems = [
  {
    image: Portfolio1,
    link: 'https://github.com/Luthandoan/Employee-payroll-management-system.',
    title: 'Employee Payroll Management System',
  },
  {
    image: Portfolio2,
    link: 'https://github.com/Luthandoan/Quiz-App',
    title: 'Quiz App',
  },
  {
    image: Portfolio3,
    link: 'https://github.com/Luthandoan/Random-password-generator.',
    title: 'Password Generator',
  },
  {
    image: Portfolio4,
    link: 'https://github.com/Luthandoan/Weather-App',
    title: 'Weather App',
  },
  {
    image: Portfolio5,
    link: 'https://github.com/Luthandoan/Spotify-Clone-App',
    title: 'Spotify Clone App',
  },
];

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <div className="worksContainer">
        {portfolioItems.map((item, index) => (
          <div className="workItem" key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.image} alt={item.title} className="worksImg" />
              <div className="worksDesc">{item.title}</div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
