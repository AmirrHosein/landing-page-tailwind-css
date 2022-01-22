import "./App.css";
import Card from "./components/Card/Card";
import FAQ from "./components/FAQ/FAQ";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Card />
      <FAQ />
      <Footer />
    </>
  );
}
