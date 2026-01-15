// components/LetsConnect.jsx
"use client";

import { useState, useEffect, useRef } from "react";

export default function LetsConnect() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef(null);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setOffsetY(window.scrollY * 0.3);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleConnectClick = () => {
    console.log("Connect with us clicked");
    // window.location.href = '/contact';
  };

  const handleInspirationClick = () => {
    console.log("Inspiration clicked");
    // window.location.href = '/gallery';
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/YOUR_PHONE_NUMBER", "_blank");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="lets-connect-section" ref={sectionRef}>
        {/* Content Container - Bottom Right */}
        <div className="content-container">
          <div className="content-box">
            {/* Small Title */}
            <p className="small-title">LET'S CONNECT</p>

            {/* Main Heading */}
            <h2 className="main-heading">Bring Your Vision to Life</h2>

            {/* Description */}
            <p className="description">
              A Wide Range of Premium surfaces and finishes is a given with
              Mozack. Crafted to drive inspiration, our products make it easy to
              turn creativity into practicality and inspire freedom in beautiful
              spaces.
            </p>

            {/* CTA Buttons */}
            <div className="button-group">
              <button
                className={`cta-button primary ${
                  hoveredButton === "connect" ? "hovered" : ""
                }`}
                onClick={handleConnectClick}
                onMouseEnter={() => setHoveredButton("connect")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <span>Connect with us</span>
                <svg
                  className="arrow-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              <button
                className={`cta-button secondary ${
                  hoveredButton === "inspiration" ? "hovered" : ""
                }`}
                onClick={handleInspirationClick}
                onMouseEnter={() => setHoveredButton("inspiration")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <span>Inspiration</span>
                <svg
                  className="arrow-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Section Styles with Background Image */
        .lets-connect-section {
          position: relative;
          min-height: 600px;
          height: 100vh;
          max-height: 800px;
          background-image: url("/images/section/cta1.webp");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding: 2rem;
        }

        /* Overlay for better contrast */
        .lets-connect-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.4) 100%
          );
          pointer-events: none;
        }

        /* Content Container - Bottom Right */
        .content-container {
          position: relative;
          z-index: 2;
          max-width: 500px;
          width: 100%;
        }

        .content-box {
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 1.75rem;
          border-radius: 4px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          max-height: 360px;
          display: flex;
          flex-direction: column;
        }

        /* Small Title */
        .small-title {
          font-size: 0.625rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          margin-bottom: 0.625rem;
          text-transform: uppercase;
          color: #6b7280;
        }

        /* Main Heading */
        .main-heading {
          font-size: 1.375rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 0.625rem;
          color: #111827;
        }

        /* Description */
        .description {
          font-size: 0.75rem;
          line-height: 1.4;
          margin-bottom: 1rem;
          color: #4b5563;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Button Group */
        .button-group {
          display: flex;
          gap: 0.625rem;
          flex-wrap: wrap;
        }

        /* CTA Buttons */
        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 1rem;
          background: transparent;
          border: 1.5px solid #111827;
          color: #111827;
          font-size: 0.75rem;
          font-weight: 500;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          white-space: nowrap;
        }

        .cta-button span {
          position: relative;
          z-index: 2;
        }

        .arrow-icon {
          position: relative;
          z-index: 2;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .cta-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: #111827;
          transition: left 0.4s ease;
          z-index: 1;
        }

        .cta-button:hover::before {
          left: 0;
        }

        .cta-button:hover {
          color: #fff;
        }

        .cta-button:hover .arrow-icon {
          transform: translateX(3px);
        }

        .cta-button.secondary {
          border-color: #6b7280;
          color: #000;
        }

        .cta-button.secondary::before {
          background: #6b7280;
          color: #fff !important;
        }

        /* Tablet Styles */
        @media (min-width: 768px) {
          .lets-connect-section {
            padding: 3rem;
          }

          .content-container {
            max-width: 550px;
          }

          .content-box {
            padding: 2rem;
          }

          .small-title {
            font-size: 0.6875rem;
            margin-bottom: 0.75rem;
          }

          .main-heading {
            font-size: 1.625rem;
            margin-bottom: 0.75rem;
          }

          .description {
            font-size: 0.8125rem;
            line-height: 1.5;
            margin-bottom: 1.25rem;
            -webkit-line-clamp: 3;
          }

          .button-group {
            gap: 0.75rem;
          }

          .cta-button {
            padding: 0.625rem 1.25rem;
            font-size: 0.8125rem;
          }
        }

        /* Desktop Styles */
        @media (min-width: 1024px) {
          .lets-connect-section {
            max-height: 900px;
            padding: 4rem;
          }

          .content-container {
            max-width: 600px;
          }

          .content-box {
            padding: 2.25rem;
          }

          .main-heading {
            font-size: 1.875rem;
          }

          .description {
            font-size: 0.875rem;
            line-height: 1.6;
          }

          .scroll-top-button {
            display: flex;
          }
        }

        /* Mobile Optimization */
        @media (max-width: 767px) {
          .lets-connect-section {
            min-height: 100vh;
            height: auto;
            background-attachment: scroll;
            align-items: center;
            justify-content: center;
            padding: 1.5rem;
          }

          .content-container {
            max-width: 100%;
          }

          .content-box {
            padding: 1.5rem;
            max-height: none;
          }

          .small-title {
            font-size: 0.5625rem;
            margin-bottom: 0.5rem;
          }

          .main-heading {
            font-size: 1.25rem;
            margin-bottom: 0.625rem;
          }

          .description {
            font-size: 0.75rem;
            line-height: 1.4;
            margin-bottom: 1rem;
            -webkit-line-clamp: 3;
          }

          .button-group {
            flex-direction: column;
            gap: 0.625rem;
          }

          .cta-button {
            width: 100%;
            justify-content: center;
            padding: 0.625rem 1rem;
            font-size: 0.75rem;
          }

          .whatsapp-button {
            width: 55px;
            height: 55px;
            bottom: 1.5rem;
            left: 1.5rem;
          }

          .scroll-top-button {
            width: 45px;
            height: 45px;
            bottom: 1.5rem;
            right: 1.5rem;
          }
        }

        /* Very Small Mobile */
        @media (max-width: 380px) {
          .main-heading {
            font-size: 1.125rem;
          }

          .description {
            font-size: 0.6875rem;
          }
        }
      `}</style>
    </>
  );
}
