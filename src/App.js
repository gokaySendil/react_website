import { useState } from "react";
import "./main.scss";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Sections/Hero/Hero";
import Story from "./Components/Sections/Story/Story";
import Character from "./Components/Sections/Characters/Character";
import Footer from "./Components/Footer/Footer";
import Modal from "./Components/Modal/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [videoId, setvideoID] = useState("");
  const buttonClick = (id) => {
    setModalOpen(true);
    setvideoID(id);
  };
  return (
    <div className="App">
      {modalOpen && <Modal embedId={videoId} setOpenModal={setModalOpen} />}
      <Navbar />
      <Hero />
      <Story click={buttonClick} />
      <Character />
      <Footer />
    </div>
  );
}

export default App;
