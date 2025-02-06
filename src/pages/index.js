
import Navbar from "../components/Navbar";
import Hero from "../components/Principal";
import Principal from "../components/Principal";
import Footer from "../components/Footer";
import VerticalSlider from "@/components/VerticalSlider";
import Gallery from "@/components/Gallery";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Principal/>
      <Gallery/>
      <Footer />
    </div>
  );
}
