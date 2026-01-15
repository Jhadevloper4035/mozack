import React from "react";
import Link from "next/link";

export default function Topbar() {
  return (
    <div className="tf-topbar bg-main">
      <div className="container">
        <div className="tf-topbar_wrap d-flex align-items-center justify-content-center justify-content-xl-between">
          <ul className="topbar-left">
            <li>
              <a className="text-caption-1 text-white" href="tel:+918010800400">
                +91 8010 8004 00
              </a>
            </li>
            <li>
              <a className="text-caption-1 text-white" href="mailto:info@mozaiclam.com">
                info@mozaiclam.com
              </a>
            </li>
            <li>
              <Link
                className="text-caption-1 text-white text-decoration-underline"
                href={`/store-list`}
              >
                Experience Center
              </Link>
            </li>
          </ul>
          
          <div className="topbar-right d-none d-xl-block">
            <ul className="tf-social-icon d-flex gap-10">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="box-icon w_28 round social-facebook bg_line"
                >
                  <i className="icon fs-16 icon-fb text-white"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="box-icon w_28 round social-instagram bg_line"
                >
                  <i className="icon fs-16 icon-instagram text-white"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918010800400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="box-icon w_28 round social-whatsapp bg_line"
                >
                  <i className="icon fs-16 icon-whatsapp text-white"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="box-icon w_28 round social-youtube bg_line"
                >
                  <i className="icon fs-16 icon-youtube text-white"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="box-icon w_28 round social-linkedin bg_line"
                >
                  <i className="icon fs-16 icon-linkedin text-white"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}