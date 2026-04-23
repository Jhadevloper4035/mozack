"use client";
import React, { useState } from "react";
import Slider1 from "../sliders/Slider1";
import { useContextElement } from "@/context/Context";
import ProductStikyBottom from "../ProductStikyBottom";
export default function Details1({ product }) {
  const [activeColor, setActiveColor] = useState("gray");
  const [quantity, setQuantity] = useState(1);
  const {
    addProductToCart,
    addToWishlist,
    isAddedtoWishlist,
    isAddedtoCompareItem,
    addToCompareItem,
  } = useContextElement();

  return (
    <section className="flat-spacing">
      <div className="tf-main-product section-image-zoom">
        <div className="container">
          <div className="row">
            {/* Product default */}
            <div className="col-md-6">
              <div className="tf-product-media-wrap sticky-top">
                <Slider1
                  setActiveColor={setActiveColor}
                  activeColor={activeColor}
                  firstItem={product.imgSrc}
                />
              </div>
            </div>
            {/* /Product default */}
            {/* tf-product-info-list */}
            <div className="col-md-6">
              <div className="tf-product-info-wrap position-relative mw-100p-hidden ">
                <div className="tf-zoom-main" />
                <div className="tf-product-info-list other-image-zoom">
                  <div className="tf-product-info-heading">
                    <div className="tf-product-info-name">
                      {product.texture && (
                        <span style={{
                          display: "inline-block",
                          fontSize: "10px",
                          fontWeight: "700",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "#fff",
                          background: "#222",
                          borderRadius: "3px",
                          padding: "4px 10px",
                          marginBottom: "12px",
                        }}>
                          {product.texture}
                        </span>
                      )}
                      <h3 className="name" style={{ lineHeight: "1.25", marginBottom: "10px" }}>
                        {product.productName}
                      </h3>
                      <div className="sub">
                        <div className="tf-product-info-sold" style={{ alignItems: "center" }}>
                          <i className="icon icon-lightning" style={{ marginRight: "6px", opacity: 0.5 }} />
                          <div className="text text-caption-1" style={{ color: "#999", letterSpacing: "0.04em" }}>
                            {[product.productType, product.category, product.subCategory]
                              .filter(Boolean)
                              .join(" · ")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                     {/* Product detail table */}
                  <div className="tf-product-info-choose-option mt_20">
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                      <tbody>
                        {[
                          { label: "Product Code", value: product.productCode?.toUpperCase() },
                          { label: "Design Name", value: product.designName?.toUpperCase() },
                          { label: "Product Type", value: product.productType },
                          { label: "Category", value: product.category },
                          { label: "Sub-Category", value: product.subCategory },
                          { label: "Texture", value: product.texture },
                          { label: "Texture Code", value: product.textureCode },
                          { label: "Size", value: product.size },
                          { label: "Width", value: product.width },
                        ]
                          .filter((r) => r.value)
                          .map((row) => (
                            <tr key={row.label} style={{ borderBottom: "1px solid #efefef" }}>
                              <td style={{
                                padding: "11px 0",
                                fontWeight: "600",
                                textTransform: "uppercase",
                                fontSize: "10px",
                                letterSpacing: "0.1em",
                                color: "#aaa",
                                width: "45%",
                              }}>
                                {row.label}
                              </td>
                              <td style={{
                                padding: "11px 0",
                                textAlign: "right",
                                fontSize: "13px",
                                color: "#1a1a1a",
                                fontWeight: "500",
                                letterSpacing: "0.01em",
                              }}>
                                {row.value}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>

                    {/* Primary CTA buttons */}
                    <div className="d-flex gap-3 mt-4">
                      <a
                        href="#ask_question"
                        data-bs-toggle="modal"
                        className="btn-style-2 flex-grow-1 text-btn-uppercase fw-6"
                        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "14px 20px" }}
                      >
                        <i className="icon-mail" style={{ fontSize: "15px" }} />
                        Send Enquiry
                      </a>
                      {product.pdfUrlPath && (
                        <a
                          href={product.pdfUrlPath}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-style-3 flex-grow-1 text-btn-uppercase"
                          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "14px 20px" }}
                        >
                          <i className="icon-file-text" style={{ fontSize: "15px" }} />
                          Product Catalogue
                        </a>
                      )}
                    </div>

                    {/* Secondary actions row */}
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "20px",
                      paddingTop: "18px",
                      borderTop: "1px solid #f0f0f0",
                    }}>
                      <div style={{ display: "flex", gap: "8px" }}>
                        <a
                          onClick={() => addToWishlist(product.id)}
                          style={{
                            display: "flex", alignItems: "center", gap: "6px",
                            padding: "7px 16px",
                            border: `1px solid ${isAddedtoWishlist(product.id) ? "#c8102e" : "#e0e0e0"}`,
                            borderRadius: "50px", cursor: "pointer",
                            fontSize: "10px", fontWeight: "700",
                            textTransform: "uppercase", letterSpacing: "0.08em",
                            color: isAddedtoWishlist(product.id) ? "#c8102e" : "#555",
                            transition: "all 0.2s", textDecoration: "none",
                          }}
                        >
                          <span className="icon icon-heart" style={{ fontSize: "13px" }} />
                          {isAddedtoWishlist(product.id) ? "Saved" : "Save"}
                        </a>
                        <a
                          href="#compare"
                          data-bs-toggle="offcanvas"
                          aria-controls="compare"
                          onClick={() => addToCompareItem(product.id)}
                          style={{
                            display: "flex", alignItems: "center", gap: "6px",
                            padding: "7px 16px",
                            border: `1px solid ${isAddedtoCompareItem(product.id) ? "#222" : "#e0e0e0"}`,
                            borderRadius: "50px", cursor: "pointer",
                            fontSize: "10px", fontWeight: "700",
                            textTransform: "uppercase", letterSpacing: "0.08em",
                            color: isAddedtoCompareItem(product.id) ? "#222" : "#555",
                            transition: "all 0.2s", textDecoration: "none",
                          }}
                        >
                          <span className="icon icon-gitDiff" style={{ fontSize: "13px" }} />
                          {isAddedtoCompareItem(product.id) ? "Comparing" : "Compare"}
                        </a>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                        <a
                          href="#ask_question"
                          data-bs-toggle="modal"
                          style={{
                            display: "flex", alignItems: "center", gap: "5px",
                            fontSize: "10px", fontWeight: "700", color: "#999",
                            textTransform: "uppercase", letterSpacing: "0.08em",
                            textDecoration: "none",
                          }}
                        >
                          <i className="icon-question" style={{ fontSize: "13px" }} />
                          Ask a Question
                        </a>
                        <span style={{ width: "1px", height: "14px", background: "#e0e0e0" }} />
                        <a
                          href="#share_social"
                          data-bs-toggle="modal"
                          style={{
                            display: "flex", alignItems: "center", gap: "5px",
                            fontSize: "10px", fontWeight: "700", color: "#999",
                            textTransform: "uppercase", letterSpacing: "0.08em",
                            textDecoration: "none",
                          }}
                        >
                          <i className="icon-share" style={{ fontSize: "13px" }} />
                          Share
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* /Product detail table */}
               
                </div>
              </div>
            </div>
            {/* /tf-product-info-list */}
          </div>
        </div>
      </div>
      <ProductStikyBottom />
    </section>
  );
}
