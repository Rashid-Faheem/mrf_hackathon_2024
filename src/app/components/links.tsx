import React from 'react'

const Links = () => {
  return (
    <div>
      
        {/* Links */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-[80%] mx-auto mb-6 md:mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">Icons</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Air Force 1</li>
              <li className="text-gray-600">Huarache</li>
              <li className="text-gray-600">Air Max 90</li>
              <li className="text-gray-600">Air Max 95</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Shoes</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">All Shoes</li>
              <li className="text-gray-600">Custom Shoes</li>
              <li className="text-gray-600">Jordan Shoes</li>
              <li className="text-gray-600">Running Shoes</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Clothing</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">All Clothing</li>
              <li className="text-gray-600">Modest Wear</li>
              <li className="text-gray-600">Hoodies & Pullovers</li>
              <li className="text-gray-600">Shirts & Tops</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Kids'</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Infant & Toddler Shoes</li>
              <li className="text-gray-600">Kids' Shoes</li>
              <li className="text-gray-600">Kids' Jordan Shoes</li>
              <li className="text-gray-600">Kids' Basketball Shoes</li>
            </ul>
          </div>
        </div>

    </div>
  )
}

export default Links
