import "./globals.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </main>
  );
}
