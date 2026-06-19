import { defineConfig } from 'astro/config';

// GitHub Pages の設定
// パターンA: username.github.io にそのまま置く場合（リポジトリ名が "<username>.github.io"）
//   site だけ設定、base は不要
//
// パターンB: username.github.io/portfolio のようにサブパスに置く場合
//   site と base を両方設定
//
// → 自分の状況に合わせてどちらかを選んでコメントアウトを外してください

// ▼ パターンA（username.github.io）
export default defineConfig({
  site: 'https://hughman090.github.io',  // ← GitHubのユーザー名に変更
});

// ▼ パターンB（username.github.io/リポジトリ名）—— こちらを使う場合は上をコメントアウト
// export default defineConfig({
//   site: 'https://<your-username>.github.io',
//   base: '/portfolio',  // ← リポジトリ名に変更
// });
