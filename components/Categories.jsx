import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-backgrounddark shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-2xl mb-8 text-mtitle font-title border-b pb-4">Categories</h3>
      {categories.map((category) => (
          <span className="block pb-3 mb-3">
              {category.name}
          </span>
      ))}
    </div>
  );
};

export default Categories;