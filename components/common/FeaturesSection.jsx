"use client";
import React, { useEffect, useRef, useState } from "react";

export default function FeaturesSection() {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  const features = [
    {
      id: 1,
      icon: (
        <svg
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 30C15 30 18 28 22 28C26 28 28 30 32 30C36 30 38 28 42 28C46 28 48 30 52 30M15 38C15 38 18 36 22 36C26 36 28 38 32 38C36 38 38 36 42 36C46 36 48 38 52 38"
            stroke="#B89968"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="35"
            cy="35"
            r="18"
            stroke="#B89968"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M25 48L22 52M45 48L48 52M35 18V15M20 20L17 17M50 20L53 17"
            stroke="#B89968"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Premium Surface Options",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      icon: (
        <svg
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 20H45C47 20 48 21 48 23V47C48 49 47 50 45 50H25C23 50 22 49 22 47V23C22 21 23 20 25 20Z"
            stroke="#B89968"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="35"
            cy="35"
            r="8"
            stroke="#B89968"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M35 27V35L39 39"
            stroke="#B89968"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28 20V17M42 20V17M22 28H18M52 28H48M22 42H18M52 42H48"
            stroke="#B89968"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Seamless Edge Banding",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      icon: (
        <svg
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35 15L40 28L53 28L43 36L47 49L35 40L23 49L27 36L17 28L30 28L35 15Z"
            stroke="#B89968"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle
            cx="35"
            cy="35"
            r="22"
            stroke="#B89968"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            fill="none"
          />
        </svg>
      ),
      title: "Exceptional Durability",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 4,
      icon: (
        <svg
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="22"
            y="18"
            width="20"
            height="28"
            rx="2"
            stroke="#B89968"
            strokeWidth="1.5"
          />
          <path
            d="M26 23H38M26 28H38M26 33H38M26 38H34"
            stroke="#B89968"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M44 24L48 30L44 36"
            stroke="#B89968"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="48"
            cy="44"
            r="6"
            stroke="#B89968"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M48 41V44L50 46"
            stroke="#B89968"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Effortless Fabrication",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 5,
      icon: (
        <svg
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="35"
            cy="35"
            r="15"
            stroke="#B89968"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M35 23V35L42 38"
            stroke="#B89968"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35 15L32 18M35 55L32 52M50 35L47 32M20 35L23 32"
            stroke="#B89968"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle
            cx="35"
            cy="35"
            r="2"
            fill="#B89968"
          />
          <path
            d="M43 20L45 18M27 20L25 18M43 50L45 52M27 50L25 52"
            stroke="#B89968"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Low Maintenance Appeal",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 6,
      icon: (
        <svg
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="35"
            cy="35"
            r="14"
            stroke="#B89968"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M35 21L37 26L42 28L37 30L35 35L33 30L28 28L33 26L35 21Z"
            stroke="#B89968"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M35 17V14M35 56V53M49 35H52M18 35H21"
            stroke="#B89968"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M44 22L46 20M26 22L24 20M44 48L46 50M26 48L24 50"
            stroke="#B89968"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Flexible Substrate Options",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 200);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap');

        .premium-features-section {
          padding: 80px 0;
          background: linear-gradient(180deg, #fdfbf8 0%, #f9f6f1 100%);
          position: relative;
          overflow: hidden;
        }

        .premium-features-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, #d4c4b0 50%, transparent 100%);
        }

        .premium-features-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .premium-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .premium-feature-card {
          background: #ffffff;
          padding: 35px 35px;
          border-radius: 0;
          text-align: center;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 12px rgba(184, 153, 104, 0.06);
          border: 1px solid rgba(184, 153, 104, 0.12);
          opacity: 0;
          transform: translateY(60px);
          position: relative;
          overflow: hidden;
        }

        .premium-feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #B89968 0%, #D4C4B0 100%);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .premium-feature-card:hover::before {
          transform: scaleX(1);
        }

        .premium-feature-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, #B89968 50%, transparent 100%);
          transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .premium-feature-card:hover::after {
          width: 80%;
        }

        .premium-feature-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .premium-feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 48px rgba(184, 153, 104, 0.14);
          border-color: rgba(184, 153, 104, 0.25);
        }

        .premium-icon-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 90px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .premium-icon-wrapper::before {
          content: '';
          position: absolute;
          width: 85px;
          height: 85px;
          background: radial-gradient(circle, rgba(184, 153, 104, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          transform: scale(0);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .premium-feature-card:hover .premium-icon-wrapper::before {
          transform: scale(1);
        }

        .premium-feature-card:hover .premium-icon-wrapper {
          transform: translateY(-5px);
        }

        .premium-icon-wrapper svg {
          position: relative;
          z-index: 1;
          filter: drop-shadow(0 2px 8px rgba(184, 153, 104, 0.15));
          transition: all 0.4s ease;
        }

        .premium-feature-card:hover .premium-icon-wrapper svg {
          filter: drop-shadow(0 4px 16px rgba(184, 153, 104, 0.25));
        }

        .premium-feature-title {
          font-size: 22px;
          font-weight: 600;
          color: #2c2520;
          margin-bottom: 12px;
          letter-spacing: -0.3px;
          line-height: 1.4;
          transition: color 0.3s ease;
        }

        .premium-feature-card:hover .premium-feature-title {
          color: #B89968;
        }

        .premium-feature-description {
          font-size: 16px;
          line-height: 1.7;
          color: #6b6561;
          font-weight: 400;
          letter-spacing: 0.2px;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .premium-features-section {
            padding: 80px 0;
          }

          .premium-features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
          }

          .premium-feature-card {
            padding: 45px 30px;
          }

          .premium-icon-wrapper {
            height: 80px;
            margin-bottom: 26px;
          }

          .premium-icon-wrapper svg {
            width: 65px;
            height: 65px;
          }

          .premium-feature-title {
            font-size: 20px;
            margin-bottom: 16px;
          }

          .premium-feature-description {
            font-size: 14px;
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .premium-features-section {
            padding: 60px 0;
          }

          .premium-features-container {
            padding: 0 16px;
          }

          .premium-features-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .premium-feature-card {
            padding: 40px 28px;
          }

          .premium-icon-wrapper {
            height: 75px;
            margin-bottom: 24px;
          }

          .premium-icon-wrapper svg {
            width: 60px;
            height: 60px;
          }

          .premium-icon-wrapper::before {
            width: 75px;
            height: 75px;
          }

          .premium-feature-title {
            font-size: 19px;
            margin-bottom: 14px;
          }

          .premium-feature-description {
            font-size: 14px;
            line-height: 1.65;
          }
        }

        @media (max-width: 480px) {
          .premium-features-section {
            padding: 50px 0;
          }

          .premium-feature-card {
            padding: 35px 24px;
          }

          .premium-icon-wrapper {
            height: 70px;
            margin-bottom: 22px;
          }

          .premium-icon-wrapper svg {
            width: 55px;
            height: 55px;
          }

          .premium-feature-title {
            font-size: 18px;
          }

          .premium-feature-description {
            font-size: 13px;
          }
        }
      `}</style>

      <section className="premium-features-section" ref={sectionRef}>
        <div className="premium-features-container">
          <div className="heading-section text-center">
          <h3 className="heading wow fadeInUp">Customer Say!</h3>
          <p className="subheading wow fadeInUp">
            Our customers adore our products, and we constantly aim to delight
            them.
          </p>
        </div>
          <div className="premium-features-grid">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`premium-feature-card ${
                  visibleCards.includes(index) ? "visible" : ""
                }`}
              >
                <div className="premium-icon-wrapper">{feature.icon}</div>
                <h3 className="premium-feature-title">{feature.title}</h3>
                <p className="premium-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}