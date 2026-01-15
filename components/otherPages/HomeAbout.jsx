"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function About() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="flat-spacing about-us-main pb_0">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Image Section */}
          <div className="col-md-6">
            <div
              className="about-us-features wow fadeInUp"
              data-wow-delay="0.2s"
              data-wow-duration="1s"
            >
              <Image
                className="lazyload"
                src="/images/section/about.jpg"
                alt="Mozaic PVC Laminates Manufacturing Unit"
                width={930}
                height={618}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="col-md-6">
            <div
              className="about-us-content wow fadeInUp"
              data-wow-delay="0.4s"
              data-wow-duration="1s"
            >
              <h3 className="title">
                Redefining Surfaces with Style
              </h3>

              <h6
                style={{
                  fontStyle: "italic",
                  marginTop: "-10px",
                  marginBottom: "20px",
                }}
              >
                "Mozaic Artistic PVC Laminates – European Technology, Indian Craftsmanship"
              </h6>

              <div className="widget-tabs style-3">
                <div className="widget-content-tab">
                  <div
                    className={`widget-content-inner ${
                      activeTab === 1 ? "active" : ""
                    }`}
                  >
                    <p>
                      Mozaic Artistic PVC Laminates has completed four years of
                      operations in India since its establishment in 2017.
                      The company operates a world-class manufacturing unit
                      at Greater Noida, Uttar Pradesh, equipped with advanced
                      European technology and high-standard facilities.
                      With a strong distributor and dealer network across India,
                      Mozaic offers a wide range of beautiful colors, exotic
                      designs, and performance-driven laminates.
                    </p>

                    <br />

                    <p>
                      Available in 1.25mm & 3.25mm thickness, Mozaic PVC laminates
                      provide excellent dimensional stability for architects
                      and interior designers. Each design is thoughtfully
                      crafted to reflect client preferences while enhancing
                      everyday living through resilient, flexible, and
                      stylish surface décor solutions.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="tf-btn btn-fill wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <span className="text text-button">Read More</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
