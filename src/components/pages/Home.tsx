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
            src="https://o.remove.bg/downloads/fb8723ac-c2fd-4ce5-adcb-a438bda35cd3/_methode_sundaytimes_prod_web_bin_5e724310-20a4-11ed-8cc0-b6d3f6238a92-removebg-preview.png"
            alt="Rocket 1"
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