import type { NextConfig } from "next";

// お名前.com のレンタルサーバーに置くため、静的書き出し(out/)にする。
// GitHub Actions がビルドして build ブランチの dist/ に置き、PHP の /web/deploy/dummy/ が公開フォルダに配置する。
const nextConfig: NextConfig = {
  output: "export",
  // /login → /login/index.html。サーバー共通の .htaccess(DirectoryIndex)で表示する
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
