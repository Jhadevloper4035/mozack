"use client";
import React from "react";
import Link from "next/link";
import { allProducts } from "@/data/products";
import { usePathname } from "next/navigation";
export default function Breadcumb({ product }) {
  const pathname = usePathname();
  return (
    <div className="tf-breadcrumb" style={{ backgroundColor : "#F2F0EF"}}>
      <div className="container">
        <div className="tf-breadcrumb-wrap" style={{ padding : "15px"}} >
          <div className="tf-breadcrumb-list">
            <Link href={`/`} className="text text-caption-1">
              Home
            </Link>
             <i className="icon icon-arrRight" />

             <Link href={`/`} className="text text-caption-1">
              {product.productType}
            </Link>

             <i className="icon icon-arrRight" />

              <Link href={`/`} className="text text-caption-1">
              {product.category}
              </Link>

             <i className="icon icon-arrRight" />

            <span className="text text-caption-1">{product.productName}</span>
          </div>
          <div className="tf-breadcrumb-prev-next">
            <Link
              href={`/${pathname.split("/")[1]}/${
                product.id <= 1 ? 1 : product.id - 1
              }`}
              className="tf-breadcrumb-prev"
            >
              <i className="icon icon-arrLeft" />
            </Link>
            
            <a href="#" className="tf-breadcrumb-back">
              <i className="icon icon-squares-four" />
            </a>
            <Link
              href={`/${pathname.split("/")[1]}/${
                product.id >= allProducts.length ? 1 : product.id + 1
              }`}
              className="tf-breadcrumb-next"
            >
              <i className="icon icon-arrRight" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
