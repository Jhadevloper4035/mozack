// store/useFilterStore.js
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { productMain } from '@/data/products';

export const useFilterStore = create(
  devtools(
    (set, get) => ({
      // Cascading Filter State
      productType: '',
      category: '',
      subCategory: '',
      texture: '',
      selectedSize: '',

      // Existing Filter State
      price: [0, 1000],
      availability: 'All',
      color: 'All',
      size: 'All',
      brands: [],
      activeFilterOnSale: false,

      // Sorting & Pagination
      sortingOption: 'Default',
      currentPage: 1,
      itemPerPage: 12,

      // Filtered & Sorted Products
      filtered: productMain,
      sorted: productMain,

      // Cascading Filter Actions - NO AUTO-RESET, INDEPENDENT
      setProductType: (value) => {
        set({ productType: value });
        get().applyFilters();
      },

      setCategory: (value) => {
        set({ category: value });
        get().applyFilters();
      },

      setSubCategory: (value) => {
        set({ subCategory: value });
        get().applyFilters();
      },

      setTexture: (value) => {
        set({ texture: value });
        get().applyFilters();
      },

      setSelectedSize: (value) => {
        set({ selectedSize: value });
        get().applyFilters();
      },

      // Existing Filter Actions
      setPrice: (value) => {
        set({ price: value });
        get().applyFilters();
      },

      setAvailability: (value) => {
        set({ availability: value === get().availability ? 'All' : value });
        get().applyFilters();
      },

      setColor: (value) => {
        set({ color: value === get().color ? 'All' : value });
        get().applyFilters();
      },

      setSize: (value) => {
        set({ size: value === get().size ? 'All' : value });
        get().applyFilters();
      },

      setBrands: (newBrand) => {
        const currentBrands = get().brands;
        const updated = currentBrands.includes(newBrand)
          ? currentBrands.filter(b => b !== newBrand)
          : [...currentBrands, newBrand];
        set({ brands: updated });
        get().applyFilters();
      },

      removeBrand: (brand) => {
        const updated = get().brands.filter(b => b !== brand);
        set({ brands: updated });
        get().applyFilters();
      },

      toggleFilterWithOnSale: () => {
        set({ activeFilterOnSale: !get().activeFilterOnSale });
        get().applyFilters();
      },

      setSortingOption: (value) => {
        set({ sortingOption: value });
        get().applySorting();
      },

      setCurrentPage: (value) => set({ currentPage: value }),

      setItemPerPage: (value) => {
        set({ itemPerPage: value, currentPage: 1 });
      },

      clearFilter: () => {
        set({
          productType: '',
          category: '',
          subCategory: '',
          texture: '',
          selectedSize: '',
          price: [0, 1000],
          availability: 'All',
          color: 'All',
          size: 'All',
          brands: [],
          activeFilterOnSale: false,
          sortingOption: 'Default',
          currentPage: 1,
        });
        get().applyFilters();
      },

      // Apply All Filters
      applyFilters: () => {
        const {
          productType,
          category,
          subCategory,
          texture,
          selectedSize,
          price,
          availability,
          color,
          size,
          brands,
          activeFilterOnSale,
        } = get();

        let filtered = [...productMain];

        // Independent Cascading Filters - Apply only if selected
        if (productType) {
          filtered = filtered.filter(p => p.productType === productType);
        }

        if (category) {
          filtered = filtered.filter(p => p.category === category);
        }

        if (subCategory) {
          filtered = filtered.filter(p => p.subCategory === subCategory);
        }

        if (texture) {
          filtered = filtered.filter(p => p.texture === texture);
        }

        if (selectedSize) {
          filtered = filtered.filter(p => p.filterSizes && p.filterSizes.includes(selectedSize));
        }

        // Price Filter
        filtered = filtered.filter(
          p => p.price >= price[0] && p.price <= price[1]
        );

        // Availability Filter
        if (availability !== 'All') {
          filtered = filtered.filter(p => p.inStock === availability.value);
        }

        // Color Filter
        if (color !== 'All') {
          const colorName = typeof color === 'object' ? color.name : color;
          filtered = filtered.filter(p => p.filterColor && p.filterColor.includes(colorName));
        }

        // Size Filter
        if (size !== 'All' && size !== 'Free Size') {
          filtered = filtered.filter(p => p.filterSizes && p.filterSizes.includes(size));
        }

        // Brands Filter
        if (brands.length > 0) {
          filtered = filtered.filter(p =>
            p.filterBrands && brands.every(brand => p.filterBrands.includes(brand))
          );
        }

        // On Sale Filter
        if (activeFilterOnSale) {
          filtered = filtered.filter(p => p.oldPrice);
        }

        set({ filtered });
        get().applySorting();
      },

      // Apply Sorting
      applySorting: () => {
        const { filtered, sortingOption } = get();
        let sorted = [...filtered];

        switch (sortingOption) {
          case 'Price Ascending':
            sorted.sort((a, b) => a.price - b.price);
            break;
          case 'Price Descending':
            sorted.sort((a, b) => b.price - a.price);
            break;
          case 'Title Ascending':
            sorted.sort((a, b) => a.title.localeCompare(b.title));
            break;
          case 'Title Descending':
            sorted.sort((a, b) => b.title.localeCompare(a.title));
            break;
          default:
            break;
        }

        set({ sorted, currentPage: 1 });
      },

      // Smart Cascading: Get available options based on OTHER selected filters
      // Product Types available based on selected category, subCategory, texture, size
      getAvailableProductTypes: () => {
        const { category, subCategory, texture, selectedSize } = get();
        let products = [...productMain];

        // Filter by OTHER selected options (not productType itself)
        if (category) {
          products = products.filter(p => p.category === category);
        }
        if (subCategory) {
          products = products.filter(p => p.subCategory === subCategory);
        }
        if (texture) {
          products = products.filter(p => p.texture === texture);
        }
        if (selectedSize) {
          products = products.filter(p => p.filterSizes && p.filterSizes.includes(selectedSize));
        }

        return [...new Set(products.map(p => p.productType))].filter(Boolean).sort();
      },

      // Categories available based on selected productType, subCategory, texture, size
      getAvailableCategories: () => {
        const { productType, subCategory, texture, selectedSize } = get();
        let products = [...productMain];

        if (productType) {
          products = products.filter(p => p.productType === productType);
        }
        if (subCategory) {
          products = products.filter(p => p.subCategory === subCategory);
        }
        if (texture) {
          products = products.filter(p => p.texture === texture);
        }
        if (selectedSize) {
          products = products.filter(p => p.filterSizes && p.filterSizes.includes(selectedSize));
        }

        return [...new Set(products.map(p => p.category))].filter(Boolean).sort();
      },

      // SubCategories available based on selected productType, category, texture, size
      getAvailableSubCategories: () => {
        const { productType, category, texture, selectedSize } = get();
        let products = [...productMain];

        if (productType) {
          products = products.filter(p => p.productType === productType);
        }
        if (category) {
          products = products.filter(p => p.category === category);
        }
        if (texture) {
          products = products.filter(p => p.texture === texture);
        }
        if (selectedSize) {
          products = products.filter(p => p.filterSizes && p.filterSizes.includes(selectedSize));
        }

        return [...new Set(products.map(p => p.subCategory))].filter(Boolean).sort();
      },

      // Textures available based on selected productType, category, subCategory, size
      getAvailableTextures: () => {
        const { productType, category, subCategory, selectedSize } = get();
        let products = [...productMain];

        if (productType) {
          products = products.filter(p => p.productType === productType);
        }
        if (category) {
          products = products.filter(p => p.category === category);
        }
        if (subCategory) {
          products = products.filter(p => p.subCategory === subCategory);
        }
        if (selectedSize) {
          products = products.filter(p => p.filterSizes && p.filterSizes.includes(selectedSize));
        }

        return [...new Set(products.map(p => p.texture))].filter(Boolean).sort();
      },

      // Sizes available based on selected productType, category, subCategory, texture
      getAvailableSizes: () => {
        const { productType, category, subCategory, texture } = get();
        let products = [...productMain];

        if (productType) {
          products = products.filter(p => p.productType === productType);
        }
        if (category) {
          products = products.filter(p => p.category === category);
        }
        if (subCategory) {
          products = products.filter(p => p.subCategory === subCategory);
        }
        if (texture) {
          products = products.filter(p => p.texture === texture);
        }

        return [...new Set(products.flatMap(p => p.filterSizes || []))].filter(Boolean).sort();
      },
    }),
    { name: 'filter-store' }
  )
);