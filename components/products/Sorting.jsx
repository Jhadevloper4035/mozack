// components/products/Sorting.js
"use client";

export default function Sorting({ allProps }) {
  const { sortingOption, setSortingOption } = allProps;

  const sortOptions = [
    "Default",
    "Price Ascending",
    "Price Descending",
    "Title Ascending",
    "Title Descending",
  ];

  return (
    <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
      <div className="btn-select">
        <span className="text-sort-value">{sortingOption}</span>
        <span className="icon icon-arrow-down" />
      </div>
      <div className="dropdown-menu">
        <div className="tf-dropdown-sort-list">
          {sortOptions.map((option, index) => (
            <div
              key={index}
              onClick={() => setSortingOption(option)}
              className={`tf-dropdown-sort-item ${
                sortingOption === option ? "active" : ""
              }`}
            >
              <span className="text-value-item">{option}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}