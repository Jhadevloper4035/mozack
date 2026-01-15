// components/products/FilterSidebar.js
"use client";

import { useProductStore } from "@/store";

// Helper function to get color codes
const getColorCode = (colorName) => {
  const colorMap = {
    // Basic Colors
    Red: "#ff0000",
    Blue: "#0000ff",
    Green: "#008000",
    Yellow: "#ffff00",
    Orange: "#ffa500",
    Purple: "#800080",
    Pink: "#ffc0cb",
    Brown: "#a52a2a",
    Black: "#000000",
    White: "#ffffff",
    Gray: "#808080",
    Grey: "#808080",

    // Extended Colors
    Beige: "#f5f5dc",
    Navy: "#000080",
    Teal: "#008080",
    Maroon: "#800000",
    Olive: "#808000",
    Lime: "#00ff00",
    Aqua: "#00ffff",
    Silver: "#c0c0c0",
    Gold: "#ffd700",
    Coral: "#ff7f50",
    Salmon: "#fa8072",
    Khaki: "#f0e68c",
    Plum: "#dda0dd",
    Indigo: "#4b0082",
    Violet: "#ee82ee",
    Turquoise: "#40e0d0",
    Tan: "#d2b48c",
    Ivory: "#fffff0",
    Crimson: "#dc143c",

    // Wood/Natural Colors
    Oak: "#c19a6b",
    Walnut: "#773f1a",
    Mahogany: "#c04000",
    Cherry: "#de3163",
    Maple: "#f4a460",
    Pine: "#e9c2a6",
    Teak: "#c19a6b",

    // Stone/Mineral Colors
    Granite: "#676767",
    Marble: "#f8f8f8",
    Slate: "#708090",
    Sandstone: "#d2b48c",
  };

  // Return color from map or default to gray if not found
  return colorMap[colorName] || "#808080";
};

export default function FilterSidebar({ allProps }) {
  const {
    productType,
    category,
    subCategory,
    texture,
    selectedSize,
    setProductType,
    setCategory,
    setSubCategory,
    setTexture,
    setSelectedSize,
    getAvailableProductTypes,
    getAvailableCategories,
    getAvailableSubCategories,
    getAvailableTextures,
    getAvailableSizes,
    clearFilter,
    // Additional filters
    price,
    setPrice,
    availability,
    setAvailability,
    color,
    setColor,
    size,
    setSize,
    brands,
    setBrands,
  } = allProps;

  const { getAllBrands, getAllColors, getAllSizes } = useProductStore();

  const availableProductTypes = getAvailableProductTypes();
  const availableCategories = getAvailableCategories();
  const availableSubCategories = getAvailableSubCategories();
  const availableTextures = getAvailableTextures();
  const availableSizes = getAvailableSizes();

  // Get all brands, colors, and sizes from store
  const allBrands = getAllBrands();
  const allColors = getAllColors();
  const allSizes = getAllSizes();

  const hasCascadingFilters =
    productType || category || subCategory || texture || selectedSize;
  const hasOtherFilters =
    brands.length > 0 ||
    color !== "All" ||
    size !== "All" ||
    availability !== "All" ||
    price[0] !== 0 ||
    price[1] !== 1000;

  const availabilityOptions = [
    { label: "All", value: "All" },
    { label: "In Stock", value: { value: true } },
    { label: "Out of Stock", value: { value: false } },
  ];

  return (
    <div className="tf-shop-sidebar wrap-sidebar-mobile">
      {/* {(hasCascadingFilters || hasOtherFilters) && (
        <div className="mb-3">
          <button
            onClick={clearFilter}
            className="tf-btn btn-outline animate-hover-btn w-100"
          >
            <span className="icon icon-close me-2" />
            Clear All Filters
          </button>
        </div>
      )} */}

      {/* SMART CASCADING FILTER SECTION */}
      <div className="widget-facet wd-categories">
        <div
          className="facet-title"
          data-bs-target="#cascading"
          data-bs-toggle="collapse"
          aria-expanded="true"
          aria-controls="cascading"
        >
          <span>Product Filters</span>
          <span className="icon icon-arrow-up" />
        </div>
        <div id="cascading" className="collapse show">
          <div className="widget-content">
            {/* Product Type */}
            <div className="form-group mb-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <label className="mb-0 fw-5">Product Type</label>
                {productType && (
                  <button
                    onClick={() => setProductType("")}
                    className="btn btn-sm btn-link text-danger p-0"
                    style={{ fontSize: "0.75rem" }}
                  >
                    Clear
                  </button>
                )}
              </div>
              <select
                className={`form-select ${productType ? "border-primary" : ""}`}
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
              >
                <option value="">All ({availableProductTypes.length})</option>
                {availableProductTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Category */}
            <div className="form-group mb-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <label className="mb-0 fw-5">Category</label>
                {category && (
                  <button
                    onClick={() => setCategory("")}
                    className="btn btn-sm btn-link text-danger p-0"
                    style={{ fontSize: "0.75rem" }}
                  >
                    Clear
                  </button>
                )}
              </div>
              <select
                className={`form-select ${category ? "border-info" : ""}`}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">All ({availableCategories.length})</option>
                {availableCategories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Sub Category */}
            <div className="form-group mb-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <label className="mb-0 fw-5">Sub Category</label>
                {subCategory && (
                  <button
                    onClick={() => setSubCategory("")}
                    className="btn btn-sm btn-link text-danger p-0"
                    style={{ fontSize: "0.75rem" }}
                  >
                    Clear
                  </button>
                )}
              </div>
              <select
                className={`form-select ${subCategory ? "border-success" : ""}`}
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
              >
                <option value="">All ({availableSubCategories.length})</option>
                {availableSubCategories.map((subCat, index) => (
                  <option key={index} value={subCat}>
                    {subCat}
                  </option>
                ))}
              </select>
            </div>

            {/* Texture */}
            <div className="form-group mb-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <label className="mb-0 fw-5">Texture</label>
                {texture && (
                  <button
                    onClick={() => setTexture("")}
                    className="btn btn-sm btn-link text-danger p-0"
                    style={{ fontSize: "0.75rem" }}
                  >
                    Clear
                  </button>
                )}
              </div>
              <select
                className={`form-select ${texture ? "border-warning" : ""}`}
                value={texture}
                onChange={(e) => setTexture(e.target.value)}
              >
                <option value="">All ({availableTextures.length})</option>
                {availableTextures.map((tex, index) => (
                  <option key={index} value={tex}>
                    {tex}
                  </option>
                ))}
              </select>
            </div>

            {/* Size - Cascading Filter */}
            <div className="form-group mb-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <label className="mb-0 fw-5">Size (Cascading)</label>
                {selectedSize && (
                  <button
                    onClick={() => setSelectedSize("")}
                    className="btn btn-sm btn-link text-danger p-0"
                    style={{ fontSize: "0.75rem" }}
                  >
                    Clear
                  </button>
                )}
              </div>
              <select
                className={`form-select ${
                  selectedSize ? "border-secondary" : ""
                }`}
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="">All ({availableSizes.length})</option>
                {availableSizes.map((sizeOption, index) => (
                  <option key={index} value={sizeOption}>
                    {sizeOption}
                  </option>
                ))}
              </select>
            </div>

            {/* Active Filters Summary in Sidebar */}
            {hasCascadingFilters && (
              <div className="active-filters-summary mt-3 p-3 bg-light rounded">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <small className="fw-bold text-muted">Active Filters</small>
                  <button
                    onClick={clearFilter}
                    className="btn btn-sm btn-link text-danger p-0"
                    style={{ fontSize: "0.75rem" }}
                  >
                    Clear All
                  </button>
                </div>
                <div className="d-flex flex-wrap gap-1">
                  {productType && (
                    <span
                      className="badge bg-primary"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {productType}
                    </span>
                  )}
                  {category && (
                    <span
                      className="badge bg-info"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {category}
                    </span>
                  )}
                  {subCategory && (
                    <span
                      className="badge bg-success"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {subCategory}
                    </span>
                  )}
                  {texture && (
                    <span
                      className="badge bg-warning text-dark"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {texture}
                    </span>
                  )}
                  {selectedSize && (
                    <span
                      className="badge bg-secondary"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {selectedSize}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* COLOR FILTER */}
      <div className="widget-facet facet-color">
        <div
          className="facet-title"
          data-bs-target="#color"
          data-bs-toggle="collapse"
          aria-expanded="true"
          aria-controls="color"
        >
          <span>Colors</span>
          <span className="icon icon-arrow-up" />
        </div>
        <div id="color" className="collapse show">
          <div className="facet-color-box">
            {/* All Colors Option */}
            <div
              onClick={() => setColor("All")}
              className={`color-item color-check ${
                color === "All" ? "active" : ""
              }`}
            >
              <span
                className="color bg-light border"
                style={{
                  background: "linear-gradient(135deg, #fff 50%, #e9ecef 50%)",
                }}
              />
              All Colors
            </div>

            {/* Individual Colors */}
            {allColors.map((colorOption, index) => (
              <div
                onClick={() => setColor(colorOption)}
                key={index}
                className={`color-item color-check ${
                  color === colorOption ? "active" : ""
                }`}
              >
                <span
                  className="color"
                  style={{
                    backgroundColor: getColorCode(colorOption),
                    border: "1px solid #ddd",
                  }}
                />
                {colorOption}
              </div>
            ))}
          </div>
          {color !== "All" && (
            <button
              onClick={() => setColor("All")}
              className="btn btn-sm btn-link text-danger p-0 mt-2"
              style={{ fontSize: "0.75rem" }}
            >
              Clear Color
            </button>
          )}
        </div>
      </div>

      {/* AVAILABILITY FILTER */}
      <div className="widget-facet facet-fieldset">
        <div
          className="facet-title"
          data-bs-target="#availability"
          data-bs-toggle="collapse"
          aria-expanded="true"
          aria-controls="availability"
        >
          <span>Availability</span>
          <span className="icon icon-arrow-up" />
        </div>
        <div id="availability" className="collapse show">
          <div className="box-fieldset-item">
            {availabilityOptions.map((option, index) => (
              <fieldset
                key={index}
                className="fieldset-item"
                onClick={() => setAvailability(option.value)}
              >
                <input
                  type="radio"
                  name="availability"
                  className="tf-check"
                  readOnly
                  checked={
                    JSON.stringify(availability) ===
                    JSON.stringify(option.value)
                  }
                />
                <label>
                  {option.label}{" "}
                  <span className="count-stock">
                    (
                    {option.value === "All"
                      ? allProps.filtered.length
                      : allProps.filtered.filter(
                          (el) => el.inStock === option.value.value
                        ).length}
                    )
                  </span>
                </label>
              </fieldset>
            ))}
          </div>
        </div>
      </div>

      {/* BRAND FILTER */}
      <div className="widget-facet">
        <div
          className="facet-title"
          data-bs-target="#brand"
          data-bs-toggle="collapse"
          aria-expanded="true"
          aria-controls="brand"
        >
          <span>Brand</span>
          <span className="icon icon-arrow-up" />
        </div>
        <div id="brand" className="collapse show">
          <ul className="list-categoris">
            {allBrands.map((brand, index) => (
              <li key={index}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={brands.includes(brand)}
                    onChange={() => setBrands(brand)}
                    id={`brand-${index}`}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`brand-${index}`}
                  >
                    {brand}
                  </label>
                </div>
              </li>
            ))}
          </ul>
          {brands.length > 0 && (
            <button
              onClick={() => allProps.setBrands([])}
              className="btn btn-sm btn-link text-danger p-0 mt-2"
              style={{ fontSize: "0.75rem" }}
            >
              Clear All Brands
            </button>
          )}
        </div>
      </div>

      {/* Active Filters Summary in Sidebar */}
      {hasCascadingFilters && (
        <div className="active-filters-summary mt-3 p-3 bg-light rounded">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <small className="fw-bold text-muted">Active Filters</small>
            <button
              onClick={clearFilter}
              className="btn btn-sm btn-link text-danger p-0"
              style={{ fontSize: "0.75rem" }}
            >
              Clear All
            </button>
          </div>
          <div className="d-flex flex-wrap gap-1">
            {productType && (
              <span
                className="badge bg-primary"
                style={{ fontSize: "0.75rem" }}
              >
                {productType}
              </span>
            )}
            {category && (
              <span className="badge bg-info" style={{ fontSize: "0.75rem" }}>
                {category}
              </span>
            )}
            {subCategory && (
              <span
                className="badge bg-success"
                style={{ fontSize: "0.75rem" }}
              >
                {subCategory}
              </span>
            )}
            {texture && (
              <span
                className="badge bg-warning text-dark"
                style={{ fontSize: "0.75rem" }}
              >
                {texture}
              </span>
            )}
            {selectedSize && (
              <span
                className="badge bg-secondary"
                style={{ fontSize: "0.75rem" }}
              >
                {selectedSize}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
