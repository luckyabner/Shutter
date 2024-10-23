import { Code2, Image as ImageIcon, Folders, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* 标题部分 */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">关于相册</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          一个现代化的在线相册应用，让您以优雅的方式展示和管理珍贵的照片记忆。
        </p>
      </div>

      {/* 特性展示 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <ImageIcon className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">瀑布流布局</h3>
          <p className="text-gray-600">
            采用现代化的瀑布流布局，完美展示不同尺寸的照片，为您的相册带来视觉震撼。
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <Folders className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">分类管理</h3>
          <p className="text-gray-600">
            智能的分类系统，帮助您轻松整理和管理照片集，让查找变得简单快捷。
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">高性能体验</h3>
          <p className="text-gray-600">
            采用Next.js框架构建，结合现代化的图片优化技术，提供流畅的浏览体验。
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <Code2 className="w-6 h-6 text-orange-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">技术栈</h3>
          <p className="text-gray-600">
            基于React和Next.js构建，使用Tailwind CSS设计，确保卓越的用户体验。
          </p>
        </div>
      </div>

      {/* 技术栈详情 */}
      <div className="bg-gray-50 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-semibold mb-6">技术实现</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">前端技术：</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Next.js 14 应用框架</li>
              <li>React 服务器组件</li>
              <li>Tailwind CSS 样式框架</li>
              <li>响应式设计</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">核心功能：</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>瀑布流照片展示</li>
              <li>图片预览优化</li>
              <li>分类浏览系统</li>
              <li>性能优化方案</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 项目信息 */}
      <div className="text-center">
        <p className="text-gray-600 mb-4">
          项目开源在 GitHub，欢迎贡献和反馈
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/cdt3211/album-next"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-blue-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
          </a>
          {/* <span className="text-gray-300">|</span>
          <a
            href="mailto:example@example.com"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            联系我们
          </a> */}
        </div>
      </div>
    </div>
  );
}