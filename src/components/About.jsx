import '../styles/About.css';
import Carousel from './Carousel';

function About() {
  return (
    <div className="about">
      <div className="about-text">
        <p>
          I'm a full stack developer with a passion for all layers of software
          development, from server-side logic to client-side aesthetics.{' '}
        </p>

        <p>
          My learning journey has taught me the value of adaptability. I've
          encountered my fair share of hurdles and unforeseen circumstances in
          projects, and rather than being deterred, I've learned to view these
          as opportunities for growth and innovation. This proactive mindset
          keeps me motivated and allows me to welcome challenges head-on.
          Moreover, I'm a firm believer that there's always room for
          improvement. That's why I'm committed to continually learning new
          tools and technologies.
        </p>

        <p>
          Outside of coding, I enjoy solving puzzles, riding rollercoasters, and
          playing fantasy games like Zelda.
        </p>
      </div>

      <Carousel />
    </div>
  );
}

export default About;
