import React, { useState } from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png'; 
import Portfolio7 from '../../assets/porfolio-7.png';

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
  
   {
     image: Portfolio6,
    link: 'https://github.com/Luthandoan/Gym-management-system',
    title: 'Gym Management System',
   },

   {
    image: Portfolio7,
    link: 'https://github.com/Luthandoan/Student-and-Lecturer-Management-System',
    title: 'Student and Lecturer Management System',
   }
];

const Works = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? portfolioItems : portfolioItems.slice(0, 3);

  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <div className="worksContainer">
        {visibleItems.map((item, index) => (
          <div className="workItem" key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.image} alt={item.title} className="worksImg" />
              <div className="worksDesc">{item.title}</div>
            </a>
          </div>
        ))}
      </div>

      {portfolioItems.length > 3 && (
        <div className="seeMoreContainer">
          <button className="seeMoreBtn" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'See Less' : 'See More'}
          </button>
        </div>
      )}
    </section>
  );
};

export default Works;
