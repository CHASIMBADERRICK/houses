import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewListings from "./components/NewListings";
import Footer from "./components/Footer";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div className="  ">
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <Hero />
      <br></br>

      {/* Slider */}
      <Slider />
      {/* New Listings */}
      <NewListings />
      {/* Take Action */}
      {/* Stickers */}
      {/* Related */}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
