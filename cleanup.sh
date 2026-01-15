#!/bin/bash

# Navigate to project root
cd /home/claude/modavenextjs

echo "Starting cleanup process..."

# Keep only home-fashion-main, remove all other home themes
cd 'app/(homes)'
for dir in */; do
    if [ "$dir" != "home-fashion-main/" ]; then
        echo "Removing theme: $dir"
        rm -rf "$dir"
    fi
done
cd ../..

# Keep only essential product listing pages: shop-default-grid, shop-left-sidebar, checkout
cd 'app/(products)'
KEEP_PAGES=("shop-default-grid" "shop-left-sidebar" "checkout" "search-result")
for dir in */; do
    dir_name="${dir%/}"
    if [[ ! " ${KEEP_PAGES[@]} " =~ " ${dir_name} " ]]; then
        echo "Removing product page: $dir"
        rm -rf "$dir"
    fi
done

# Remove shopping-cart as per requirements
if [ -d "shopping-cart" ]; then
    echo "Removing shopping-cart page"
    rm -rf "shopping-cart"
fi
cd ../..

# Keep only product-detail for default product page, remove others
cd 'app/(productDetails)'
for dir in */; do
    if [ "$dir" != "product-detail/" ]; then
        echo "Removing product detail variant: $dir"
        rm -rf "$dir"
    fi
done
cd ../..

# Clean up components - keep only what's needed for main theme
echo "Cleaning up component directories..."

# Keep only Header1 in headers
cd components/headers
KEEP_HEADERS=("Header1.jsx" "Topbar.jsx" "Nav.jsx" "ProductSearch.jsx" "CategoryList.jsx" "ProductSorting.jsx" "ToolbarBottom.jsx")
for file in *.jsx; do
    if [[ ! " ${KEEP_HEADERS[@]} " =~ " ${file} " ]]; then
        echo "Removing header component: $file"
        rm -f "$file"
    fi
done
cd ../..

# Keep only Footer1 in footers
cd components/footers
for file in *.jsx; do
    if [ "$file" != "Footer1.jsx" ]; then
        echo "Removing footer component: $file"
        rm -f "$file"
    fi
done
cd ../..

# Clean up home component directories - keep only home-1 and fashion-main
cd components/homes
for dir in */; do
    if [ "$dir" != "home-1/" ] && [ "$dir" != "fashion-main/" ]; then
        echo "Removing home component: $dir"
        rm -rf "$dir"
    fi
done
cd ../..

echo "Cleanup complete!"
echo ""
echo "Remaining structure:"
echo "- Main theme: home-fashion-main"
echo "- Product pages: shop-default-grid, shop-left-sidebar, checkout, search-result"
echo "- Product detail: product-detail"
echo "- Header: Header1 only"
echo "- Footer: Footer1 only"
