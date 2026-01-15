"use client";
import { collectionItems3 } from "@/data/collections";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
export default function Collections() {
  return (
    <section id="downSection" className="flat-spacing" style={{backgroundColor : "#333"}}>
      <div className="container">
         <div className="heading-section text-center">
          <h3 className="heading wow fadeInUp" style={{ color: "#fff" }}>Customer Say!</h3>
          <p className="subheading wow fadeInUp" style={{ color: "#fff" }}>
            Our customers adore our products, and we constantly aim to delight
            them.
          </p>
        </div>
        <Swiper
          dir="ltr"
          slidesPerView={3}
          breakpoints={{
            1300: {
              slidesPerView: 3,
            },
            924: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 1.7,
            },
          }}
          spaceBetween={30}
        >
          {collectionItems3.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="collection-position-2 style-5 hover-img wow fadeInUp"
                data-wow-delay={item.delay}
              >
                <a className="img-style">
                  <Image
                    className="lazyload"
                    data-src={item.imgSrc}
                    alt={item.alt}
                    src={item.imgSrc}
                    width={615}
                    height={819}
                  />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
