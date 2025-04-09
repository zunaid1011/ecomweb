import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../hooks/useCart';

export function Home() {
  const { addToCart } = useCart();
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-4">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to ShopHub
            </h1>
            <p className="text-xl mb-8">
              Discover our latest collection of premium products
            </p>
            <Link
              to="/shop"
              className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="bg-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Special Offer!
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get 20% off on all electronics this week
          </p>
          <Link
            to="/shop"
            className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Shop Electronics
          </Link>
        </div>
      </div>
    </div>
  );
}