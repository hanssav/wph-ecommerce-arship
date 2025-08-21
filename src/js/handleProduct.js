import { products } from './products.js';

const featureProductContainer = document.getElementById(
  'featured-product-container'
);
function renderProducts(products) {
  products.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.className =
      'product-card rounded-xl shadow-[0_0_20px_0_#CBCACA40]';

    productCard.innerHTML = `
          <img
              src="${product.src}"
              alt="product-image-${product.id}"
              class="rounded-xs lg:w-full"
            />

            <div
              class="product-detail text-sm leading-sm lg:text-md lg:leading-md p-3 gap-3"
            >
              <p class="font-normal">${product.name}</p>

              <h4 class="price font-bold">Rp.${product.price.toLocaleString()}</h4>
              <div class="flex items-center gap-x-0.5-">
                <img src="./public/icons/start-rating.svg" alt="star-rating" />
                <p>${product.rating}</p>
              </div>
            </div>
          `;

    featureProductContainer.appendChild(productCard);
  });
}

renderProducts(products);
