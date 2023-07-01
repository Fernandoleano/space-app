import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="space-bg h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 flex items-center">
            <div className="w-1/2">
              <h1 className="text-4xl text-white font-bold mb-12">
                SpaceX
              </h1>
              <p className="text-white mt-2">
                Rocket ships have always captured the imagination of humans. They are incredible machines that can defy gravity and travel beyond Earth's atmosphere. The development of rocket technology has opened up new frontiers of exploration and scientific discovery.
              </p>
            </div>
            <div className="w-1/2 flex justify-center">
              <img
                src="https://o.remove.bg/downloads/7165cfe9-798d-405b-b7ec-1ef9c3e4b42c/pngegg-removebg-preview.png"
                alt="Rocket 1"
                className="rocket-image"
              />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
