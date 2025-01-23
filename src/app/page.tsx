
import Navbar from "../app/components/Navbar";
import Hero from './components/Hero';
import Banner from './components/Banner';
import Offer from './components/Offer';
import Card from './components/Card';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import Menuitems from './components/Menuitems';
  export default  function Page () {
    return (
      <div>
        <Navbar />
        <Hero />
        <Menuitems />
        <Banner />
        <Offer />
        <Card />
        <Reservation />
        <Footer />
      </div>
    );
  }
  