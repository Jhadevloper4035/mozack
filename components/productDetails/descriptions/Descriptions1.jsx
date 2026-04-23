"use client";
import React from "react";

export default function Descriptions1({ product }) {
  const rows = [
    { label: "Product Code", value: product.productCode?.toUpperCase() },
    { label: "Product Name", value: product.productName },
    { label: "Design Name", value: product.designName?.toUpperCase() },
    { label: "Product Type", value: product.productType },
    { label: "Category", value: product.category },
    { label: "Sub Category", value: product.subCategory },
    { label: "Texture", value: product.texture },
    { label: "Texture Code", value: product.textureCode },
    { label: "Size", value: product.size },
    { label: "Width", value: product.width },
  ].filter((row) => row.value);

  return (
    <section className="flat-spacing-9 pt_0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} style={{ borderBottom: "1px solid #efefef" }}>
                    <td style={{
                      padding: "13px 0",
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
                      padding: "13px 0",
                      textAlign: "right",
                      fontSize: "14px",
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

            <div className="d-flex gap-3 mt-4">
              <a
                href="#ask_question"
                data-bs-toggle="modal"
                className="btn-style-2 flex-grow-1 text-btn-uppercase fw-6 btn-add-to-cart"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
              >
                <i className="icon-mail" />
                Send Enquiry
              </a>
              {product.pdfUrlPath && (
                <a
                  href={product.pdfUrlPath}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-style-3 flex-grow-1 text-btn-uppercase"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
                >
                  <i className="icon-file-text" />
                  Product Catalogue
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
