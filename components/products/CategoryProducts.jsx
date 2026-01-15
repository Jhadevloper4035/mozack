"use client";

import LayoutHandler from "./LayoutHandler";
import Sorting from "./Sorting";
import Listview from "./Listview";
import GridView from "./GridView";
import { useEffect, useReducer, useState } from "react";
import FilterModal from "./FilterModal";
import { initialState, reducer } from "@/reducer/filterReducer";
import { productMain } from "@/data/products";
import FilterMeta from "./FilterMeta";

export default function CategoryProducts({ 
  parentClass = "flat-spacing",
  productType = null // Filter by productType: "pvc", "Acrylish Laminates", "Soffitto Panels"
}) {
  const [activeLayout, setActiveLayout] = useState(4);
  
  // Filter products by productType if provided
  const categoryProducts = productType 
    ? productMain.filter(product => product.productType === productType)
    : productMain;
  
  // Create initial state with filtered products
  const categoryInitialState = {
    ...initialState,
    filtered: categoryProducts,
    sorted: categoryProducts,
  };
  
  const [state, dispatch] = useReducer(reducer, categoryInitialState);
  const {
    price,
    availability,
    color,
    size,
    brands,
    filtered,
    sortingOption,
    sorted,
    activeFilterOnSale,
    currentPage,
    itemPerPage,
  } = state;

  const allProps = {
    ...state,
    setPrice: (value) => dispatch({ type: "SET_PRICE", payload: value }),
    setColor: (value) => {
      value == color
        ? dispatch({ type: "SET_COLOR", payload: "All" })
        : dispatch({ type: "SET_COLOR", payload: value });
    },
    setSize: (value) => {
      value == size
        ? dispatch({ type: "SET_SIZE", payload: "All" })
        : dispatch({ type: "SET_SIZE", payload: value });
    },
    setAvailability: (value) => {
      value == availability
        ? dispatch({ type: "SET_AVAILABILITY", payload: "All" })
        : dispatch({ type: "SET_AVAILABILITY", payload: value });
    },
    setBrands: (newBrand) => {
      const updated = [...brands].includes(newBrand)
        ? [...brands].filter((elm) => elm != newBrand)
        : [...brands, newBrand];
      dispatch({ type: "SET_BRANDS", payload: updated });
    },
    removeBrand: (newBrand) => {
      const updated = [...brands].filter((brand) => brand != newBrand);
      dispatch({ type: "SET_BRANDS", payload: updated });
    },
    setSortingOption: (value) =>
      dispatch({ type: "SET_SORTING_OPTION", payload: value }),
    toggleFilterWithOnSale: () => dispatch({ type: "TOGGLE_FILTER_ON_SALE" }),
    setCurrentPage: (value) =>
      dispatch({ type: "SET_CURRENT_PAGE", payload: value }),
    setItemPerPage: (value) => {
      dispatch({ type: "SET_CURRENT_PAGE", payload: 1 }),
        dispatch({ type: "SET_ITEM_PER_PAGE", payload: value });
    },
    clearFilter: () => {
      dispatch({ type: "CLEAR_FILTER" });
    },
  };

  useEffect(() => {
    let filteredArrays = [];

    if (brands.length) {
      const filteredByBrands = [...categoryProducts].filter((elm) =>
        brands.every((el) => elm.filterBrands.includes(el))
      );
      filteredArrays = [...filteredArrays, filteredByBrands];
    }
    if (availability !== "All") {
      const filteredByavailability = [...categoryProducts].filter(
        (elm) => availability.value === elm.inStock
      );
      filteredArrays = [...filteredArrays, filteredByavailability];
    }
    if (color !== "All") {
      const filteredByColor = [...categoryProducts].filter((elm) =>
        elm.filterColor.includes(color.name)
      );
      filteredArrays = [...filteredArrays, filteredByColor];
    }
    if (size !== "All" && size !== "Free Size") {
      const filteredBysize = [...categoryProducts].filter((elm) =>
        elm.filterSizes.includes(size)
      );
      filteredArrays = [...filteredArrays, filteredBysize];
    }
    if (activeFilterOnSale) {
      const filteredByonSale = [...categoryProducts].filter((elm) => elm.oldPrice);
      filteredArrays = [...filteredArrays, filteredByonSale];
    }

    const filteredByPrice = [...categoryProducts].filter(
      (elm) => elm.price >= price[0] && elm.price <= price[1]
    );
    filteredArrays = [...filteredArrays, filteredByPrice];

    const commonItems = [...categoryProducts].filter((item) =>
      filteredArrays.every((array) => array.includes(item))
    );
    dispatch({ type: "SET_FILTERED", payload: commonItems });
  }, [price, availability, color, size, brands, activeFilterOnSale, productType]);

  useEffect(() => {
    if (sortingOption === "Price Ascending") {
      dispatch({
        type: "SET_SORTED",
        payload: [...filtered].sort((a, b) => a.price - b.price),
      });
    } else if (sortingOption === "Price Descending") {
      dispatch({
        type: "SET_SORTED",
        payload: [...filtered].sort((a, b) => b.price - a.price),
      });
    } else if (sortingOption === "Title Ascending") {
      dispatch({
        type: "SET_SORTED",
        payload: [...filtered].sort((a, b) => a.title.localeCompare(b.title)),
      });
    } else if (sortingOption === "Title Descending") {
      dispatch({
        type: "SET_SORTED",
        payload: [...filtered].sort((a, b) => b.title.localeCompare(a.title)),
      });
    } else {
      dispatch({ type: "SET_SORTED", payload: filtered });
    }
    dispatch({ type: "SET_CURRENT_PAGE", payload: 1 });
  }, [filtered, sortingOption]);

  // Pagination logic - slice products for current page
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentProducts = sorted.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sorted.length / itemPerPage);

  return (
    <>
      <section className={parentClass}>
        <div className="container">
          <div className="tf-shop-control">
            <div className="tf-control-filter">
              <FilterModal allProps={allProps} />
            </div>
            <div className="tf-control-layout d-flex justify-content-between align-items-center">
              <LayoutHandler
                activeLayout={activeLayout}
                setActiveLayout={setActiveLayout}
              />
              <Sorting allProps={allProps} />
            </div>
          </div>
          <div className="wrapper-control-shop">
            <FilterMeta productLength={sorted.length} allProps={allProps} />

            {activeLayout == 1 ? (
              <div className="tf-list-layout wrapper-shop" id="listLayout">
                <Listview products={currentProducts} pagination={false} />
              </div>
            ) : (
              <div
                className={`tf-grid-layout wrapper-shop tf-col-${activeLayout}`}
                id="gridLayout"
              >
                <GridView products={currentProducts} pagination={false} />
              </div>
            )}

            {/* Custom Pagination */}
            {sorted.length > itemPerPage && (
              <ul className="wg-pagination justify-content-center">
                <li onClick={() => allProps.setCurrentPage(currentPage - 1)}>
                  <a
                    className={`pagination-item text-button ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <i className="icon-arrLeft" />
                  </a>
                </li>
                {Array.from({ length: totalPages }, (_, index) => {
                  const page = index + 1;
                  return (
                    <li
                      key={page}
                      className={page === currentPage ? "active" : ""}
                      onClick={() => allProps.setCurrentPage(page)}
                    >
                      <div className="pagination-item text-button">{page}</div>
                    </li>
                  );
                })}
                <li onClick={() => allProps.setCurrentPage(currentPage + 1)}>
                  <a
                    className={`pagination-item text-button ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                  >
                    <i className="icon-arrRight" />
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </section>
    </>
  );
}