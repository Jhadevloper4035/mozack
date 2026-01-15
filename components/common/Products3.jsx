"use client";
import ProductCard1 from "@/components/productCards/ProductCard1";
import { productMain } from "@/data/products";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const tabItems = [
  { label: "Acrylish", productType: "Acrylish Laminates" },
  { label: "PVC", productType: "pvc" },
  { label: "Soffitto", productType: "Soffitto Panels" }
];

export default function Products3({ parentClass = "flat-spacing-3" }) {
  const [activeItem, setActiveItem] = useState(tabItems[0]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const newArrivalsEl = document.getElementById("newArrivals");
    if (newArrivalsEl) {
      newArrivalsEl.classList.remove("filtered");
    }
    
    setTimeout(() => {
      // Filter products by productType and limit to first 8
      const filtered = productMain
        .filter((elm) => elm.productType === activeItem.productType)
        .slice(0, 8); // Show only first 8 products
      
      setSelectedItems(filtered);
      
      if (newArrivalsEl) {
        newArrivalsEl.classList.add("filtered");
      }
    }, 300);
  }, [activeItem]);

  return (
    <section className={parentClass}>
      <div className="container">
         <div className="heading-section text-center">
          <h3 className="heading wow fadeInUp">Customer Say!</h3>
          <p className="subheading wow fadeInUp">
            Our customers adore our products, and we constantly aim to delight
            them.
          </p>
        </div>
        <div className="flat-animate-tab">
          <ul className="tab-product justify-content-sm-center" role="tablist">
            {tabItems.map((item) => (
              <li key={item.label} className="nav-tab-item">
                <a
                  href="#"
                  className={activeItem.label === item.label ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveItem(item);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="tab-content">
            <div
              className="tab-pane active show tabFilter filtered"
              id="newArrivals"
              role="tabpanel"
            >
              <div className="tf-grid-layout tf-col-2 lg-col-3 xl-col-4">
                {selectedItems.length > 0 ? (
                  selectedItems.map((product, i) => (
                    <ProductCard1 key={i} product={product} />
                  ))
                ) : (
                  <div className="col-12 text-center">
                    <p>No products found in this category</p>
                  </div>
                )}
              </div>

              <div className="sec-btn text-center">
                <Link 
                  href={`/shop-${activeItem.label.toLowerCase()}`} 
                  className="btn-line"
                >
                  View All {activeItem.label} Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}