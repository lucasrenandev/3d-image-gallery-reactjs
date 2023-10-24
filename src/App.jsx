import { useEffect } from "react";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import img6 from "./assets/img6.jpg";
import img7 from "./assets/img7.jpg";
import img8 from "./assets/img8.jpg";
import './App.css';

export default function App() {
  useEffect(() => {
    {/* Elementos */}
    const box = document.querySelector(".content .box");
    const previousBtn = document.querySelector(".buttons .btn1");
    const nextBtn = document.querySelector(".buttons .btn2");

    {/* Variável para o ângulo de rotação */}
    let degrees = 0;

    {/* Imagem anterior */}
    function previous() {
      degrees += 45;
      box.style = `transform: perspective(1000px) rotateY(${degrees}deg);`;
    }

    {/* Próxima imagem */}
    function next() {
      degrees -= 45;
      box.style = `transform: perspective(1000px) rotateY(${degrees}deg);`;
    }

    {/* Eventos */}
    previousBtn.addEventListener("click", previous);
    nextBtn.addEventListener("click", next);

    {/* Rotação automática */}
    setInterval(next, 4000);
  }, []);

  return (
    <>
      <section className="section">
        <main className="content">
          <div className="box">
            <figure style={{"--i":1}}>
              <img src={img1} alt="Image 1" />
            </figure>
            <figure style={{"--i":2}}>
              <img src={img2} alt="Image 2" />
            </figure>
            <figure style={{"--i":3}}>
              <img src={img3} alt="Image 3" />
            </figure>
            <figure style={{"--i":4}}>
              <img src={img4} alt="Image 4" />
            </figure>
            <figure style={{"--i":5}}>
              <img src={img5} alt="Image 5" />
            </figure>
            <figure style={{"--i":6}}>
              <img src={img6} alt="Image 6" />
            </figure>
            <figure style={{"--i":7}}>
              <img src={img7} alt="Image 7" />
            </figure>
            <figure style={{"--i":8}}>
              <img src={img8} alt="Image 8" />
            </figure>
          </div>{/*End box*/}
        </main>{/*End content*/}
        <div className="buttons">
          <div className="button btn1"></div>
          <div className="button btn2"></div>
        </div>{/*End buttons*/}
      </section>{/*End section*/}
    </>
  )
}