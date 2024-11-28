import { Github } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* 标题部分 */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-8">关于</h1>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto my-4'>作者：<Link className='text-blue-400 hover:underline' href={'https://github.com/cdt3211'} target='blank'>Abner</Link></p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          本项目由<Link className='text-blue-400 hover:underline' href={'https://nextjs.org/'}>NextJS</Link>开发，使用<Link className='text-blue-400 hover:underline' href={'https://cloud.tencent.com/product/cos'}>腾讯云COS</Link>存储图片，部署于<Link className='text-blue-400 hover:underline' href={'https://vercel.com'}>Vercel</Link>。
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">图片均为原图，故加载时间可能不是很快。</p>
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
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
}