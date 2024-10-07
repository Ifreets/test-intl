import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "vn"], // Các ngôn ngữ hỗ trợ
  defaultLocale: "en", // Ngôn ngữ mặc định
});

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"], // Áp dụng middleware cho tất cả các route ngoại trừ `_next` và `favicon`
};
