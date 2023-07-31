import '../styles/About.css';
import Carousel from './Carousel';

function About() {
  return (
    <div className="about">
      <div className="about-text">
        <p>
          I&apos;m a full stack developer with a passion for all layers of
          software development, from server-side logic to client-side
          aesthetics.{' '}
        </p>

        <p>
          My learning journey has taught me the value of adaptability. I&apos;ve
          encountered my fair share of hurdles throughout my projects, and
          rather than being deterred, I&apos;ve learned to view these as
          opportunities for growth and innovation. This proactive mindset keeps
          me motivated and allows me to welcome challenges head-on. Moreover,
          I&apos;m a firm believer that there&apos;s always room for
          improvement. That&apos;s why I&apos;m committed to continually
          learning new tools and technologies.
        </p>

        <p>
          Outside of coding, I enjoy solving puzzles, riding rollercoasters, and
          playing fantasy games like Zelda.
        </p>
      </div>

      <div className="icons-container">
        <p className="small-title">Technologies & Tools</p>
        <Carousel />
      </div>
    </div>
  );
}

export default About;
