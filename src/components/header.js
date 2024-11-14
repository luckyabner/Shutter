import Link from 'next/link';
import { Images } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-75 transition-opacity">
              <Images className="h-6 w-6" />
              <span className="text-xl font-bold">Album</span>
            </Link>
          </div>

          <nav className="flex items-center space-x-8">
            <Link
              href="/category"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              分类

            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}