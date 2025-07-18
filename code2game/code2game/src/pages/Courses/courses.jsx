import './courses.css';
import unity from '../../assets/images/unity.jpg';
import unreal from '../../assets/images/unreal.jpeg';
import gameDesign from '../../assets/images/game design.jpeg';
import art from '../../assets/images/2d.jpeg';
import programming from '../../assets/images/gaming pro.jpeg';
import multiplayer from '../../assets/images/multi.jpeg';
import mobile from '../../assets/images/mobile.jpeg';
import vrAr from '../../assets/images/ar.jpeg';
import levelDesign from '../../assets/images/level.jpeg';
import audio from '../../assets/images/audio.png';

const Courses = () => {
  return (
    <div className='courses-container'>
    <div className='courses-header'>
      <h1>Our Courses</h1>
      <p>Explore our range of game development courses designed for all skill levels.</p>
      </div>
       <div className="course-list">
  <div className="course-item">
    <img src={unity} alt="Unity Course" />
    <h2>Unity</h2>
    <p>Build 2D and 3D games using the Unity engine and C# scripting.</p>
    <p className='course-duration'><strong>Duration:</strong> 6 Weeks</p>
  </div>

  <div className="course-item">
    <img src={unreal} alt="Unreal Engine Course" />
    <h2>Unreal Engine</h2>
    <p>Create high-quality visuals and gameplay with Blueprints and C++.</p>
    <p className='course-duration'><strong>Duration:</strong> 8 Weeks</p>
  </div>

  <div className="course-item">
    <img src={gameDesign} alt="Game Design Course" />
    <h2>Game Design</h2>
    <p>Learn the principles of engaging game mechanics and user experience.</p>
    <p className='course-duration'><strong>Duration:</strong> 5 Weeks</p>
  </div>

  <div className="course-item">
    <img src={art} alt="2D/3D Art Course" />
    <h2>2D/3D Art</h2>
    <p>Master the creation of characters, environments, and assets.</p>
    <p className='course-duration'><strong>Duration:</strong> 6 Weeks</p>
  </div>

  <div className="course-item">
    <img src={programming} alt="Game Programming" />
    <h2>Game Programming</h2>
    <p>Develop skills in logic, AI, and performance based optimization etc.</p>
    <p className='course-duration'><strong>Duration:</strong> 7 Weeks</p>
  </div>

  <div className="course-item">
    <img src={multiplayer} alt="Multiplayer Game Development" />
    <h2>Multiplayer Game Development</h2>
    <p>Learn networking, matchmaking, and real-time multiplayer logic.</p>
    <p className='course-duration'><strong>Duration:</strong> 6 Weeks</p>
  </div>

  <div className="course-item">
    <img src={mobile} alt="Mobile Game Development" />
    <h2>Mobile Game Development</h2>
    <p>Build and publish games for Android and iOS platforms.</p>
    <p className='course-duration'><strong>Duration:</strong> 4 Weeks</p>
  </div>

  <div className="course-item">
    <img src={vrAr} alt="VR & AR Game Development" />
    <h2>VR & AR Game Development</h2>
    <p>Create immersive experiences using VR and AR tools.</p>
    <p className='course-duration'><strong>Duration:</strong> 6 Weeks</p>
  </div>

  <div className="course-item">
    <img src={levelDesign} alt="Level Design" />
    <h2>Level Design</h2>
    <p>Design intuitive, fun, and balanced levels for various game genres.</p>
    <p className='course-duration'><strong>Duration:</strong> 5 Weeks</p>
  </div>

  <div className="course-item">
    <img src={audio} alt="Game Audio Design" />
    <h2>Game Audio Design</h2>
    <p>Create soundscapes, SFX, and music that enhance player immersion.</p>
    <p className='course-duration'><strong>Duration:</strong> 3 Weeks</p>
  </div>
</div>
        </div>
  )
}

export default Courses
