import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-intro">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>Code2Game</strong> — your launchpad into the world of game development.
        </p>
      </section>
      < div className='about-sections'>
      <section className="about-mission">
        <h2>🎯 Our Mission</h2>
        <p>
          We aim to democratize game development by offering accessible, high-quality training in Unity,
          Unreal Engine, Game Art, and Design. We prepare students to become the creators of tomorrow’s games.
        </p>
      </section>

      <section className="about-team">
        <h2>👥 Meet Our Team</h2>
        <div className="team-members">

          <div className="team-card">
            <h3>Aarif Aslam</h3>
            <p className="role">Lead Unity Instructor</p>
            <p>5+ years experience | 8+ published games</p>
            <p>Expert in 2D/3D game mechanics, mobile optimization.</p>
          </div>

          <div className="team-card">
            <h3>Sarah Thomas</h3>
            <p className="role">Game Design & Storyboarding</p>
            <p>7 years experience | RPG and narrative games</p>
            <p>Specialist in user experience and level design.</p>
          </div>

          <div className="team-card">
            <h3>Nikhil Ramesh</h3>
            <p className="role">Art Director</p>
            <p>6+ years in 3D modeling and animation</p>
            <p>Expert in Blender, Maya, Substance Painter.</p>
          </div>

        </div>
      </section>
    </div>
    </div>
  );
};

export default About;
