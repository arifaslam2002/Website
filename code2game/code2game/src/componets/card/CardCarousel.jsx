import React, { useState, useEffect } from 'react';
import './CardCarousel.css';

const cardData = [
  {
    title: 'About Our Training Center',
    content:
      'Welcome to Code2Game, a premier Game Development Training Center committed to empowering future game creators. Our hands-on programs teach you to build games using Unity, Unreal Engine, and modern tools — guided by expert mentors and real-world projects.',
  },
  {
    title: 'For College Students',
    content:
      'Fuel your passion for gaming with real skills. At Code2Game, we turn students into game creators. Learn to design, code, and publish games using Unity, Unreal Engine, and more.',
  },
  {
    title: 'For Working Professionals',
    content:
      'Upgrade your career through Game Development. Our part-time courses help you master design, programming, and production — without quitting your job.',
  },
  {
    title: 'For Beginners & School Students',
    content:
      'Learn to make your own games — from scratch! No coding experience needed. We make game development fun and beginner-friendly.',
  },
];

const CardCarousel = () => {
  const [index, setIndex] = useState(0);

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % cardData.length);
  };

  const prevCard = () => {
    setIndex((prev) => (prev - 1 + cardData.length) % cardData.length);
    //
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <button className="arrow left" onClick={prevCard}>‹</button>

      <div className="carousel-card">
        <h3>{cardData[index].title}</h3>
        <p>{cardData[index].content}</p>
      </div>

      <button className="arrow right" onClick={nextCard}>›</button>
    </div>
  );
};

export default CardCarousel;
