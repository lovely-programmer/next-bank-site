import Tools from "@/components/Tools/Tools";
import Footer from "@/components/footer/Footer";
import Main from "@/components/main/Main";
import Navbar from "@/components/navbar/Navbar";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Services />
      <Tools />
      <Footer />
    </div>
  );
}
