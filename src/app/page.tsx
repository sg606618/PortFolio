import Background from "@/components/Background";
import Header from "@/components/Header/Header";
import NavBar from "@/components/Header/NavBar";
import Slogan from "@/components/Slogan";
import Footer from "../components/Footer/Footer";
import MainSection from "@/components/MainSections/MainSection";

export default function Home() {
  return (
    <>
      <div className="container mx-auto md:px-0 px-3 relative overflow-hidden">
        <Header />
        <NavBar />
        <Slogan />
        <Background />
        <main>
          <MainSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
