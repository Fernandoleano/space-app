import Header from '../Header';
import './About.css';

const About = () => {
  return (
    <div className="space-bg min-h-screen">
      <Header />
      <div className="container mx-auto py-16">
        <h1 className="text-4xl text-white font-bold mb-8">About Us</h1>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-1">
            <img
              src="https://o.remove.bg/downloads/61c40dd5-d7d9-4c5e-9c37-567ec850894b/space-shuttle-transparent-background-3d-rendering-illustration_494250-21331-removebg-preview.png"
              alt="Spaceship"
              className="rounded-lg"
            />
          </div>
          <div className="flex-1">
            <p className="text-white text-lg">
              We are passionate about exploring the depths of the universe and sharing our knowledge with the world. Our mission is to inspire and educate people about the wonders of space through engaging content, breathtaking imagery, and interactive experiences.
            </p>
            <p className="text-white text-lg mt-4">
              Join us on this cosmic journey and let's embark on an adventure that will expand your horizons and ignite your curiosity about the mysteries of the cosmos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
