"use client";

import LayoutHandler from "./LayoutHandler";
import Sorting from "./Sorting";
import Listview from "./Listview";
import GridView from "./GridView";
import { useEffect, useState } from "react";

import FilterModal from "./FilterModal";
import FilterMeta from "./FilterMetaCategory";
import FilterSidebar from "./FilterSidebarCategory";

import { useFilterStore } from "@/store";

export default function Products({productpage}) {
  const [activeLayout, setActiveLayout] = useState(3);
  const state = useFilterStore();

  const {
    sorted,
    activeFilterOnSale,
    currentPage,
    itemPerPage,

    // Cascading filters
    productType,
    category,
    subCategory,
    texture,
    selectedSize,

    // Actions
    setPrice,
    setColor,
    setSize,
    setAvailability,
    setBrands,
    removeBrand,
    setSortingOption,
    toggleFilterWithOnSale,
    setCurrentPage,
    setItemPerPage,
    clearFilter,

    // Cascading actions
    setProductType,
    setCategory,
    setSubCategory,
    setTexture,
    setSelectedSize,

    // Getters
    getAvailableProductTypes,
    getAvailableCategories,
    getAvailableSubCategories,
    getAvailableTextures,
    getAvailableSizes,

    applyFilters,
  } = state;

  // Initialize filters
  useEffect(() => {
    setProductType(productpage);
    applyFilters();
  }, []);

  // Create allProps object for backward compatibility with your existing components
  const allProps = {
    ...state,
    setPrice,
    setColor,
    setSize,
    setAvailability,
    setBrands,
    removeBrand,
    setSortingOption,
    toggleFilterWithOnSale,
    setCurrentPage,
    setItemPerPage,
    clearFilter,

    // Cascading filters
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
  };

  return (
    <>
      <section className="flat-spacing">
        <div className="container">
          <div className="tf-shop-control">
            <div className="tf-control-filter">
              <button className="filterShop tf-btn-filter hidden-mx-1200">
                <span className="icon icon-filter" />
                <span className="text">Filters</span>
              </button>

              <a
                href="#filterShop"
                data-bs-toggle="offcanvas"
                aria-controls="filterShop"
                className="tf-btn-filter show-mx-1200"
              >
                <span className="icon icon-filter" />
                <span className="text">Filters</span>
              </a>
              <div
                onClick={toggleFilterWithOnSale}
                className={`d-none d-lg-flex shop-sale-text ${
                  activeFilterOnSale ? "active" : ""
                }`}
              >
                <i className="icon icon-checkCircle" />
                <p className="text-caption-1">Shop sale items only</p>
              </div>
            </div>
            <ul className="tf-control-layout">
              <LayoutHandler
                setActiveLayout={setActiveLayout}
                activeLayout={activeLayout}
                hasSidebar
              />
            </ul>
            <div className="tf-control-sorting">
              <p className="d-none d-lg-block text-caption-1">Sort by:</p>
              <Sorting allProps={allProps} />
            </div>
          </div>
          <div className="wrapper-control-shop">
            <FilterMeta productLength={sorted.length} allProps={allProps} />
            <div className="row">
              <div className="col-xl-3">
                <FilterSidebar allProps={allProps} />
              </div>
              <div className="col-xl-9">
                {activeLayout == 1 ? (
                  <div className="tf-list-layout wrapper-shop" id="listLayout">
                    <Listview products={sorted} />
                  </div>
                ) : (
                  <div
                    className={`tf-grid-layout wrapper-shop tf-col-${activeLayout}`}
                    id="gridLayout"
                  >
                    <GridView products={sorted} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <FilterModal allProps={allProps} />
    </>
  );
}
