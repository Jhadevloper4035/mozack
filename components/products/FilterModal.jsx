// components/products/FilterModal.js
"use client";

import { useProductStore } from "@/store";

// Helper function to get color codes (same as FilterSidebar)
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

  return colorMap[colorName] || "#808080";
};

export default function FilterModal({ allProps }) {
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
    brands,
    setBrands,
  } = allProps;

  const { getAllBrands, getAllColors } = useProductStore();

  const availableProductTypes = getAvailableProductTypes();
  const availableCategories = getAvailableCategories();
  const availableSubCategories = getAvailableSubCategories();
  const availableTextures = getAvailableTextures();
  const availableSizes = getAvailableSizes();

  const allBrands = getAllBrands();
  const allColors = getAllColors();

  const hasActiveFilters =
    productType ||
    category ||
    subCategory ||
    texture ||
    selectedSize ||
    brands.length > 0 ||
    color !== "All" ||
    availability !== "All" ||
    price[0] !== 0 ||
    price[1] !== 1000;

  const availabilityOptions = [
    { label: "All", value: "All" },
    { label: "In Stock", value: { value: true } },
    { label: "Out of Stock", value: { value: false } },
  ];

  return (
    <div
      className="offcanvas offcanvas-start canvas-filter"
      id="filterShop"
      tabIndex={-1}
    >
      <div className="canvas-wrapper">
        <header className="canvas-header">
          <div className="filter-icon">
            <span className="icon icon-filter" />
            <div>Filter</div>
          </div>
          <span
            className="icon-close icon-close-popup"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </header>

        <div className="canvas-body">
          {/* Active Filters Display at Top */}
          {hasActiveFilters && (
            <div className="mb-4 p-3 bg-light rounded">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <strong className="text-muted small">Active Filters:</strong>
                <button
                  onClick={clearFilter}
                  className="btn btn-sm btn-danger"
                  style={{ fontSize: "0.75rem" }}
                >
                  Clear All
                </button>
              </div>
              <div className="d-flex flex-wrap gap-1">
                {productType && (
                  <span className="badge bg-primary">{productType}</span>
                )}
                {category && <span className="badge bg-info">{category}</span>}
                {subCategory && (
                  <span className="badge bg-success">{subCategory}</span>
                )}
                {texture && (
                  <span className="badge bg-warning text-dark">{texture}</span>
                )}
                {selectedSize && (
                  <span className="badge bg-secondary">{selectedSize}</span>
                )}
                {brands.map((brand, i) => (
                  <span key={i} className="badge bg-dark">
                    {brand}
                  </span>
                ))}
                {color !== "All" && (
                  <span
                    className="badge"
                    style={{ backgroundColor: "#6f42c1", color: "#fff" }}
                  >
                    {color}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* SMART CASCADING FILTERS */}
          <div className="widget-facet wd-categories">
            <div className="facet-title">
              <span>Product Filters</span>
            </div>
            <div className="facet-content">
              {/* Product Type */}
              <div className="form-group mb-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <label className="mb-0">Product Type</label>
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
                  className="form-select"
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
                  <label className="mb-0">Category</label>
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
                  className="form-select"
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
                  <label className="mb-0">Sub Category</label>
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
                  className="form-select"
                  value={subCategory}
                  onChange={(e) => setSubCategory(e.target.value)}
                >
                  <option value="">
                    All ({availableSubCategories.length})
                  </option>
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
                  <label className="mb-0">Texture</label>
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
                  className="form-select"
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

              {/* Size - Cascading */}
              <div className="form-group mb-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <label className="mb-0">Size (Cascading)</label>
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
                  className="form-select"
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
            </div>
          </div>

          {/* COLOR FILTER - Matching Sidebar Style */}
          <div className="widget-facet facet-color">
            <div className="facet-title">
              <span>Colors</span>
            </div>
            <div className="facet-content">
              <div
                className="facet-color-box"
                style={{ maxHeight: "200px", overflowY: "auto" }}
              >
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
                      background:
                        "linear-gradient(135deg, #fff 50%, #e9ecef 50%)",
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

          {/* AVAILABILITY FILTER - Matching Sidebar Style */}
          <div className="widget-facet facet-fieldset">
            <div className="facet-title">
              <span>Availability</span>
            </div>
            <div className="facet-content">
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

          {/* BRAND FILTER - Matching Sidebar Style */}
          <div className="widget-facet">
            <div className="facet-title">
              <span>Brand</span>
            </div>
            <div className="facet-content">
              <ul
                className="list-categoris"
                style={{ maxHeight: "200px", overflowY: "auto" }}
              >
                {allBrands.map((brand, index) => (
                  <li key={index}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={brands.includes(brand)}
                        onChange={() => setBrands(brand)}
                        id={`brand-modal-${index}`}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`brand-modal-${index}`}
                      >
                        {brand}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
              {brands.length > 0 && (
                <button
                  onClick={() => {
                    const currentBrands = [...brands];
                    currentBrands.forEach((brand) => setBrands(brand));
                  }}
                  className="btn btn-sm btn-link text-danger p-0 mt-2"
                  style={{ fontSize: "0.75rem" }}
                >
                  Clear All Brands ({brands.length})
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="canvas-footer">
          <button data-bs-dismiss="offcanvas" className="tf-btn btn-fill w-100">
            Apply Filters {hasActiveFilters && "(Active)"}
          </button>
        </div>
      </div>
    </div>
  );
}
