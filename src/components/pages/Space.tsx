import { Link } from 'react-router-dom';
const Space = () => {
    return (
      <div className="space-page">
        <header className="space-header">
          <h1 className="space-title">Space Exploration</h1>
          <nav className="space-nav">
            <ul>
            <li>
            <Link to="/" className="text-white hover:text-gray-500 transition duration-200">
              Home
            </Link>
            </li>
              <li>
                <Link to="/about" className="text-white hover:text-gray-500 transition duration-200">
              About
            </Link>
              </li>
              <li>
                <a href="#planets">Planets</a>
              </li>
              <li>
                <a href="#stars">Stars</a>
              </li>
              <li>
                <a href="#galaxy">Galaxy</a>
              </li>
            </ul>
          </nav>
        </header>
        <section id="about" className="space-section">
          <h2>About Space</h2>
          <p>
            Space is the vast, seemingly infinite expanse that exists beyond Earth. It is home to countless celestial bodies, including planets, stars, galaxies, and more. Space exploration has enabled us to learn about the universe and discover its wonders.
          </p>
        </section>
        <section id="planets" className="space-section">
          <h2>Planets</h2>
          <div className="planets-container">
            <div className="planet mercury"></div>
            <div className="planet venus"></div>
            <div className="planet earth"></div>
            <div className="planet mars"></div>
            <div className="planet jupiter"></div>
            <div className="planet saturn"></div>
            <div className="planet uranus"></div>
            <div className="planet neptune"></div>
          </div>
        </section>
        <section id="stars" className="space-section">
          <h2>Stars</h2>
          <div className="stars-container">
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
          </div>
        </section>
        <section id="galaxy" className="space-section">
          <h2>Galaxy</h2>
          <p>
            The galaxy is a vast system of stars, planets, and other celestial objects. Our solar system is part of the Milky Way galaxy, which contains billions of stars. The study of galaxies helps us understand the structure and evolution of the universe.
          </p>
        </section>
        <footer className="space-footer">
          <p>&copy; 2023 SpaceX. All rights reserved.</p>
        </footer>
      </div>
    );
  };
  
  export default Space;
