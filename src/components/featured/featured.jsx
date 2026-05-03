import "./featured.css";
import img1 from "../../assets/featured/img1.jpg";
import img2 from "../../assets/featured/img2.jpg";
import img3 from "../../assets/featured/img3.jpg";
import img4 from "../../assets/featured/img4.jpg";
import img5 from "../../assets/featured/img5.jpg";
import img6 from "../../assets/featured/img6.jpg";
import img7 from "../../assets/featured/img7.jpg";
import img8 from "../../assets/featured/img8.jpg";

export default function Featured() {

  const handleInstagramRedirect = () => {
    window.open("https://www.instagram.com/clicksbykorniza/", "_blank");
  };

  return (
    <section className="featured">

      <span className="tag">OUR FAVORITE MOMENTS</span>
      <h2>FEATURED WEDDING</h2>

      <div className="bento-container">

        {/* TOP IMAGE */}
        <div className="bento-item main-header">
          <img src={img1} alt="" />
          <div className="overlay-text">
            <h3>THE CHATEAU RECEPTION</h3>
          </div>
        </div>

        {/* GRID */}
        <div className="bento-grid">

          <div className="bento-item tall">
            <img src={img2} alt="" />
          </div>

          <div className="bento-item wide">
            <img src={img3} alt="" />
          </div>

          <div className="bento-item center-play">
            <img src={img4} alt="" />
          </div>

          <div className="bento-item tall">
            <img src={img5} alt="" />
          </div>

          <div className="bento-item ">
            <img src={img6} alt="" />
          </div>

          <div className="bento-item wide">
            <img src={img7} alt="" />
          </div>
{/* 
          <div className="bento-item  wide">
            <img src={img8} alt="" />
          </div> */}

        </div>
      </div>

      <button className="featured-btn" onClick={handleInstagramRedirect}>
        VIEW FULL GALLERY
      </button>

    </section>
  );
}