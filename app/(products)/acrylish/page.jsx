import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar6 from "@/components/headers/Topbar";
import Products from "@/components/products/ProductsProductType";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Acrylish Laminates | Mozack",
  description: "Browse our collection of Acrylish laminate products",
};

export default function ShopAcrylishPage() {
  return (
    <>
      <Topbar6 bgColor="bg-main" />
      <Header1 />
      <div
        className="page-title"
        style={{ backgroundImage: "url(/images/banner/2.jpg)" }}
      >
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <h3 className="heading text-center">Acrylish Laminates</h3>
              <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                <li>
                  <Link className="link" href={`/`}>
                    Homepage
                  </Link>
                </li>
                <li>
                  <i className="icon-arrRight" />
                </li>
                <li>Acrylish Laminates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Products productpage="Acrylish Laminates" />
      <Footer1 />
    </>
  );
}