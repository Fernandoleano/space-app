import Header from '../Header';
import Footer from '../Footer';

const Home = () => {
  return (
    <>
    <Header />
    <main>
    <div className="home-page h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 flex items-center">
        <div className="w-1/2">
          <h1 className="text-4xl text-white font-bold mb-12">
            SpaceX
          </h1>
          <p className="text-white mt-2 text-neon">
            Rocket ships have always captured the imagination of humans. They are incredible machines that can defy gravity and travel beyond Earth's atmosphere. The development of rocket technology has opened up new frontiers of exploration and scientific discovery.
          </p>
        </div>
        <div className="w-1/2 flex justify-center">
          <img
            src="https://o.remove.bg/downloads/61c40dd5-d7d9-4c5e-9c37-567ec850894b/space-shuttle-transparent-background-3d-rendering-illustration_494250-21331-removebg-preview.png"
            alt="Rocket"
            className="rocket-image"
          />
        </div>
      </div>
    </div>
    <Footer />
  </main>
  </>
  )
}

export default Home