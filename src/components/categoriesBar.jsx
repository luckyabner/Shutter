'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import ToolsBar from './toolsBar';
import SiteLogo from './siteLogo';

export default function CategoriesBar({ categories }) {
  const pathname = decodeURIComponent(usePathname());
  const [selectedCategory, setSeletedCategory] = useState('精选')

  useEffect(() => {
    const currentCategory = categories.find(cat =>
      pathname === `/category/${cat.Prefix}`
    )
    if (currentCategory) {
      setSeletedCategory(currentCategory.Prefix)
    } else {
      setSeletedCategory('精选')
    }
  }, [pathname, categories])

  return (
    <div className='sticky top-4 z-30 w-full flex items-center justify-between py-2'>
      <div className='flex items-center h-10 bg-gray-100/90 backdrop-blur-sm p-4 rounded-full shadow-md'>
        <SiteLogo />
      </div>
      <div className='w-fit h-10 flex items-center space-x-4 text-lg font-bold bg-gray-100/90 backdrop-blur-sm p-4 rounded-full shadow-md'>
        {categories.map((category, index) => (
          <Link
            key={index}
            href={category.Prefix === '精选' ? '/' : `/category/${category.Prefix}`}
            className={`cursor-pointer transition-colors ${selectedCategory === category.Prefix
              ? 'text-blue-600 underline underline-offset-4'
              : 'hover:text-blue-600'
              }`}
            onClick={() => setSeletedCategory(category.Prefix)}
          >
            {category.Prefix}
          </Link>
        ))}
      </div>
      {/* tool bar */}
      <div className='flex items-center space-x-4 h-10 bg-gray-100/90 dark:bg-gray-900 backdrop-blur-sm p-4 rounded-full shadow-md'>
        <ToolsBar />
      </div>
    </div>
  )
}
