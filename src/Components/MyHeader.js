import React, { useEffect, useRef } from "react";
import person from "../assests/avataaars.svg";
function MyHeader() {
  const h = useRef(null);
  useEffect(() => {
    const m1 = h.current;
    m1.innerHTML = "Rohit";
  }, [1]); //componentDidMount

  return (
    <>
      <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          <img className="masthead-avatar mb-5" src={person} alt="..." />
          <h1 ref={h} className="masthead-heading text-uppercase mb-0">
            Start Bootstrap
          </h1>
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <p className="masthead-subheading font-weight-light mb-0">
            Graphic Artist - Web Designer - Illustrator
          </p>
          <button
            onClick={() => {
              
              const m1 = h.current;
              // m1.innerHTML = "Anshu";
              m1.classList.add("abcd");
            }}
          >
            Change
          </button>
        </div>
      </header>
    </>
  );
}

export default MyHeader;
