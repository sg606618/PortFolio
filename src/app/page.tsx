import About from "@/components/About";
import Background from "@/components/Background";
import Header from "@/components/Header/Header";
import NavBar from "@/components/Header/NavBar";
import Services from "@/components/Services";
import Slogan from "@/components/Slogan";

export default function Home() {
  return (
    <>
      <div className="container mx-auto md:px-0 px-3 relative">
        <header>
          <Header />
          <NavBar />
        </header>
        <main>
          <Slogan />
          <Background />
          <About />
        </main>
      </div>
    </>
  );
}
