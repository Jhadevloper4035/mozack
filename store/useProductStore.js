// store/useProductStore.js
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { productMain } from '@/data/products';

export const useProductStore = create(
  devtools(
    (set, get) => ({
      products: productMain,

      // Get unique values for cascading filters
      getUniqueProductTypes: () => {
        const products = get().products;
        return [...new Set(products.map(p => p.productType))].filter(Boolean).sort();
      },

      getCategoriesByProductType: (productType) => {
        const products = get().products;
        if (!productType) return [];
        return [...new Set(
          products
            .filter(p => p.productType === productType)
            .map(p => p.category)
        )].filter(Boolean).sort();
      },

      getSubCategoriesByCategory: (productType, category) => {
        const products = get().products;
        if (!productType || !category) return [];
        return [...new Set(
          products
            .filter(p => p.productType === productType && p.category === category)
            .map(p => p.subCategory)
        )].filter(Boolean).sort();
      },

      getTexturesBySubCategory: (productType, category, subCategory) => {
        const products = get().products;
        if (!productType || !category || !subCategory) return [];
        return [...new Set(
          products
            .filter(p => 
              p.productType === productType && 
              p.category === category && 
              p.subCategory === subCategory
            )
            .map(p => p.texture)
        )].filter(Boolean).sort();
      },

      getSizesByTexture: (productType, category, subCategory, texture) => {
        const products = get().products;
        if (!productType || !category || !subCategory || !texture) return [];
        return [...new Set(
          products
            .filter(p => 
              p.productType === productType && 
              p.category === category && 
              p.subCategory === subCategory &&
              p.texture === texture
            )
            .flatMap(p => p.filterSizes || [])
        )].filter(Boolean).sort();
      },

      getAllBrands: () => {
        const products = get().products;
        return [...new Set(products.flatMap(p => p.filterBrands || []))].filter(Boolean).sort();
      },

      getAllColors: () => {
        const products = get().products;
        const colors = products.flatMap(p => p.filterColor || []);
        return [...new Set(colors)].filter(Boolean).sort();
      },

      getAllSizes: () => {
        const products = get().products;
        return [...new Set(products.flatMap(p => p.filterSizes || []))].filter(Boolean).sort();
      },
    }),
    { name: 'product-store' }
  )
);