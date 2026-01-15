// utils/productFilters.js
export const extractUniqueFilters = (products) => {
  
  const filters = {
    productTypes: new Set(),
    categories: new Set(),
    subcategories: new Set(),
    textures: new Set(),
    sizes: new Set(),
    designNames: new Set(),
  };

  products.forEach((product) => {
    // Extract ProductType
    if (product.productType) {
      filters.productTypes.add(product.productType);
    }

    // Extract Category
    if (product.category) {
      filters.categories.add(product.category);
    }

    // Extract Subcategory (note: capital C in subCategory)
    if (product.subCategory) {
      filters.subcategories.add(product.subCategory);
    }

    // Extract Texture
    if (product.texture) {
      filters.textures.add(product.texture);
    }

    // Extract Size (handle both array and string)
    if (product.size) {
      if (Array.isArray(product.size)) {
        product.size.forEach(s => filters.sizes.add(s));
      } else {
        filters.sizes.add(product.size);
      }
    }

    // Extract Design Name
    if (product.designName) {
      filters.designNames.add(product.designName);
    }
  });

  // Convert Sets to sorted arrays with counts
  return {
    productTypes: Array.from(filters.productTypes).sort().map(type => ({
      name: type,
      count: products.filter(p => p.productType === type).length
    })),
    categories: Array.from(filters.categories).sort().map(cat => ({
      name: cat,
      count: products.filter(p => p.category === cat).length
    })),
    subcategories: Array.from(filters.subcategories).sort().map(sub => ({
      name: sub,
      count: products.filter(p => p.subCategory === sub).length
    })),
    textures: Array.from(filters.textures).sort().map(tex => ({
      name: tex,
      count: products.filter(p => p.texture === tex).length
    })),
    sizes: Array.from(filters.sizes).sort().map(size => ({
      name: size,
      count: products.filter(p => 
        Array.isArray(p.size) ? p.size.includes(size) : p.size === size
      ).length
    })),
    designNames: Array.from(filters.designNames).sort().map(design => ({
      name: design,
      count: products.filter(p => p.designName === design).length
    })),
  };
};