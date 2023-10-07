import "./index.css";
import paintingOne from "./imgs/paintingOne.png";
import paintingTwo from "./imgs/painitngTwo.png";
import painitngThree from "./imgs/paintingThree.png";
import { useEffect, useState } from "react";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  let updatePosition = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", updatePosition);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <nav>
          <div className="logo"></div>

          <div className="items">
            <h3>A</h3>
            <h3>B</h3>
            <h3>C</h3>
          </div>
        </nav>

        <div
          className="art artOne"
          style={{ opacity: scrollPosition > 100 ? 1 : 0 }}
        >
          <div className="details">
            <h2>Jadé Fadojutimi</h2>
            <p>
              Whilst I whimper, I hope I can become whimsical on a whim, 2023
            </p>
          </div>
          <img src={paintingOne} alt="" />
        </div>

        <div
          className="art artOne"
          style={{ opacity: scrollPosition > 600 ? 1 : 0 }}
        >
          <div className="details">
            <h2>Stanley Whitney</h2>
            <p>Untitled, 2022</p>
          </div>
          <img src={paintingTwo} alt="" />
        </div>

        <div
          className="art artOne"
          style={{ opacity: scrollPosition > 1100 ? 1 : 0 }}
        >
          <div className="details">
            <h3>Ahn Doo Jin</h3>
            <p>Fallen Stone, 2014</p>
          </div>
          <img src={painitngThree} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
