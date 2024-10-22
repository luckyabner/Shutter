/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    COS_SECRET_ID: process.env.COS_SECRET_ID,
    COS_SECRET_KEY: process.env.COS_SECRET_KEY,
    COS_BUCKET: process.env.COS_BUCKET,
    COS_REGION: process.env.COS_REGION,
  },
  images: {
    domains: ['picture-1317606226.cos.ap-beijing.myqcloud.com'], // 添加您的 COS 域名
  },
};

export default nextConfig;
