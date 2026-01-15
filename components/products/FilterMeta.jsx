// components/products/FilterMeta.js
"use client";

export default function FilterMeta({ productLength, allProps }) {
  const {
    productType,
    category,
    subCategory,
    texture,
    selectedSize,
    brands,
    color,
    availability,
    price,
    activeFilterOnSale,
    setProductType,
    setCategory,
    setSubCategory,
    setTexture,
    setSelectedSize,
    removeBrand,
    setColor,
    setAvailability,
    setPrice,
    toggleFilterWithOnSale,
    clearFilter,
  } = allProps;

  // Check if any filters are active
  const hasActiveFilters =
    productType ||
    category ||
    subCategory ||
    texture ||
    selectedSize ||
    brands.length > 0 ||
    color !== "All" ||
    availability !== "All" ||
    activeFilterOnSale ||
    price[0] !== 0 ||
    price[1] !== 1000;

  return (
    <div className="tf-shop-content">
      {/* Product Count */}
      <div className="mb-3">
        <p className="text-caption-1 fw-5">
          Showing {productLength} {productLength === 1 ? "result" : "results"}
        </p>
      </div>

      {/* Applied Filters Section */}
      {hasActiveFilters && (
        <div className="applied-filters-section mb-4">
          
          <div className="d-flex align-items-center justify-content-between mb-2">
            <h6 className="mb-0">Applied Filters:</h6>
            <button
              onClick={clearFilter}
              className="btn btn-sm btn-outline-danger"
              style={{ fontSize : "12px"}}
            >
              Clear All Filters
            </button>
          </div>

          <div className="filter-tags-wrapper d-flex flex-wrap gap-2">
            {/* Cascading Filters */}
            {productType && (
              <span className="filter-tag badge bg-primary d-inline-flex align-items-center gap-2 py-2 px-3">
                <strong>Product Type:</strong> {productType}
                <button
                  onClick={() => setProductType("")}
                  className="btn-close btn-close-white"
                  style={{ fontSize: '0.65rem', opacity: 0.8 }}
                  aria-label="Remove product type filter"
                />
              </span>
            )}

            {category && (
              <span className="filter-tag badge bg-info d-inline-flex align-items-center gap-2 py-2 px-3">
                <strong>Category:</strong> {category}
                <button
                  onClick={() => setCategory("")}
                  className="btn-close btn-close-white"
                  style={{ fontSize: '0.65rem', opacity: 0.8 }}
                  aria-label="Remove category filter"
                />
              </span>
            )}

            {subCategory && (
              <span className="filter-tag badge bg-success d-inline-flex align-items-center gap-2 py-2 px-3">
                <strong>Sub Category:</strong> {subCategory}
                <button
                  onClick={() => setSubCategory("")}
                  className="btn-close btn-close-white"
                  style={{ fontSize: '0.65rem', opacity: 0.8 }}
                  aria-label="Remove sub category filter"
                />
              </span>
            )}

            {texture && (
              <span className="filter-tag badge bg-warning text-dark d-inline-flex align-items-center gap-2 py-2 px-3">
                <strong>Texture:</strong> {texture}
                <button
                  onClick={() => setTexture("")}
                  className="btn-close"
                  style={{ fontSize: '0.65rem', opacity: 0.8 }}
                  aria-label="Remove texture filter"
                />
              </span>
            )}

            {selectedSize && (
              <span className="filter-tag badge bg-secondary d-inline-flex align-items-center gap-2 py-2 px-3">
                <strong>Size:</strong> {selectedSize}
                <button
                  onClick={() => setSelectedSize("")}
                  className="btn-close btn-close-white"
                  style={{ fontSize: '0.65rem', opacity: 0.8 }}
                  aria-label="Remove size filter"
                />
              </span>
            )}

            {/* Brand Filters */}
            {brands.map((brand, index) => (
              <span
                key={index}
                className="filter-tag badge bg-dark d-inline-flex align-items-center gap-2 py-2 px-3"
              >
                <strong>Brand:</strong> {brand}
                <button
                  onClick={() => removeBrand(brand)}
                  className="btn-close btn-close-white"
                  style={{ fontSize: '0.65rem', opacity: 0.8 }}
                  aria-label={`Remove ${brand} filter`}
                />
              </span>
            ))}

            {/* Color Filter */}
            {color !== "All" && (
              <span className="filter-tag badge bg-purple d-inline-flex align-items-center gap-2 py-2 px-3" style={{ backgroundColor: '#6f42c1' }}>
                <strong>Color:</strong> {typeof color === 'object' ? color.name : color}
                <button
                  onClick={() => setColor("All")}
                  className="btn-close btn-close-white"
                  style={{ fontSize: '0.65rem', opacity: 0.8 }}
                  aria-label="Remove color filter"
                />
              </span>
            )}

            {/* Availability Filter */}
            {availability !== "All" && (
              <span className="filter-tag badge bg-info d-inline-flex align-items-center gap-2 py-2 px-3">
                <strong>Availability:</strong> {availability.value ? "In Stock" : "Out of Stock"}
                <button
                  onClick={() => setAvailability("All")}
                  className="btn-close btn-close-white"
                  style={{ fontSize: '0.65rem', opacity: 0.8 }}
                  aria-label="Remove availability filter"
                />
              </span>
            )}

            {/* Price Range Filter */}
            {(price[0] !== 0 || price[1] !== 1000) && (
              <span className="filter-tag badge bg-success d-inline-flex align-items-center gap-2 py-2 px-3">
                <strong>Price:</strong> ₹{price[0]} - ₹{price[1]}
                <button
                  onClick={() => setPrice([0, 1000])}
                  className="btn-close btn-close-white"
                  style={{ fontSize: '0.65rem', opacity: 0.8 }}
                  aria-label="Remove price filter"
                />
              </span>
            )}

            {/* On Sale Filter */}
            {activeFilterOnSale && (
              <span className="filter-tag badge bg-danger d-inline-flex align-items-center gap-2 py-2 px-3">
                <strong>On Sale Items Only</strong>
                <button
                  onClick={toggleFilterWithOnSale}
                  className="btn-close btn-close-white"
                  style={{ fontSize: '0.65rem', opacity: 0.8 }}
                  aria-label="Remove on sale filter"
                />
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}