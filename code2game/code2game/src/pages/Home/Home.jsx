import React from 'react'
import './home.css'
import student1 from '../../assets/student1.png'
import student2 from '../../assets/student3.png'
import student3 from '../../assets/student2.png'
import CardCarousel from '../../componets/card/CardCarousel'
const Home = () => {
  return (
    <div>
    <div className="home-container">
    <div className="home-card">
        <p className="trusted">⭐ Trusted by 2,500+ students</p>
        <h1>Master Game Development<br />with Expert Training</h1>
<p className="subtitle">
  Learn the art and science of game creation through our hands-on courses.<br />
  From coding and design to AI and publishing — level up your skills with us.
</p>
<button className="join-btn" onClick={() => window.location.href='/courses'}>Explore Our Courses</button>
    </div>
     </div>
     <CardCarousel />
     <div className='homechoose-container'>
     <div className="home-choose">
        <h1>Why to Choose Us?</h1>
        <div className="home-choose-cards">
            <div className="home-choose-card">
                <h2 className='card-title'>Expert Instructors</h2>
                <p className='card-description'>Learn from industry professionals with years of experience.</p>
            </div>
            <div className="home-choose-card">
                <h2 className='card-title'>Hands-On Projects</h2>
                <p className='card-description'>Build real games and applications as you learn.</p>
            </div>
            <div className="home-choose-card">
                <h2 className='card-title'>Community Support</h2>
                <p className='card-description'>Join a vibrant community of learners and creators.</p>
            </div>
            <div className="home-choose-card">
                <h2 className='card-title'>Flexible Learning</h2>
                <p className='card-description'>Study at your own pace with our online courses.</p>
            </div>
            <div className="home-choose-card">
                <h2 className='card-title'>Career Opportunities</h2>
                <p className='card-description'>Get guidance on internships and job placements.</p>
            </div>
            <div className="home-choose-card">
                <h2 className='card-title'>Certification</h2>
                <p className='card-description'>Receive a certificate upon course completion.</p>
            </div>
            <div className="home-choose-card">
                <h2 className='card-title'>Cutting-Edge Curriculum</h2>
                <p className='card-description'>Stay updated with the latest trends and technologies in game development.</p>
            </div>
            <div className="home-choose-card">
                <h2 className='card-title'>Affordable Pricing</h2>
                <p className='card-description'>Quality education at competitive prices.</p>
            </div>
        </div>
        </div>
        </div>
        <h1 className='home-testimonials-title'>What Our Students Say</h1>
        <div className="home-testimonials">
        <div className="home-testimonial">
            <img src={student1} alt="Student 1" className="testimonial-avatar" />
            <p>"This platform transformed my game development skills!"</p>
            <span>- Alex P.</span>
        </div>
        <div className="home-testimonial">
            <img src={student2} alt="Student 2" className="testimonial-avatar" />
            <p>"The hands-on projects were incredibly helpful."</p>
            <span>- Jamie L.</span>
        </div>
        <div className="home-testimonial">
        <img src={student3} alt="Student 3" className="testimonial-avatar" />
            <p>"I landed my dream job thanks to the career support!"</p>
            <span>- Taylor R.</span>
        </div>
        </div>
        </div>
  )
}

export default Home
