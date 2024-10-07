/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "vn"], // Các ngôn ngữ được hỗ trợ
    defaultLocale: "en", // Ngôn ngữ mặc định
  },
  reactStrictMode: true,
};

export default nextConfig;
