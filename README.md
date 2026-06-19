# 山口 暖 — portfolio (Astro)

相対性理論 × 低レイヤーの世界観でつくったポートフォリオサイト。
Astro 製の静的サイトで、GitHub Pages にそのまま乗せられます。

## ローカル確認

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に本番ビルド
npm run preview  # ビルド結果をローカル確認
```

## デプロイ（GitHub Pages）

### 1. astro.config.mjs を設定する

自分の状況に合わせてどちらかを選んでください。

**パターンA：`<username>.github.io` リポジトリの場合**
```js
export default defineConfig({
  site: 'https://<your-username>.github.io',
});
```

**パターンB：`<username>.github.io/<repo>` の場合**
```js
export default defineConfig({
  site: 'https://<your-username>.github.io',
  base: '/<repo-name>',
});
```

### 2. GitHub でリポジトリを作る

- リポジトリ名を `<username>.github.io` にするとパターンA
- 別の名前にするとパターンB（base の設定が必要）

### 3. GitHub Actions を有効にする

リポジトリの Settings → Pages → Source を **GitHub Actions** に設定。
`.github/workflows/deploy.yml` を push するだけで自動ビルド＆デプロイ。

## 公開前に必ず直すところ

1. **`astro.config.mjs`** の `<your-username>` を実際のGitHubユーザー名に変更（→ OGP の絶対URL化）
2. **`src/components/Contact.astro`** の GitHub / Gmail / X の `href="#"` を実リンクに
3. **`src/components/Blog.astro`** の Qiita 記事タイトルを実際のものに（いまは仮）

## ファイル構成

```
.github/workflows/deploy.yml  … GitHub Actions 自動デプロイ
public/
├── favicon.svg               … タブアイコン（朱の幽霊）
├── og-image.png              … SNS シェア画像（1200×630）
└── icon.jpg                  … About のプロフィールアイコン
src/
├── layouts/Base.astro        … <head>・OGP・グローバルCSS・言語切替JS
├── pages/index.astro         … 組み立て
├── styles/global.css         … 全スタイル（生成り＋明朝×ゴシック＋朱）
└── components/
    ├── Cover.astro           … ヘッダー（幽霊パターン＋09:09）
    ├── Nav.astro             … ナビ＋日英トグル
    ├── About.astro           … 名前・所属・bio・アイコン
    ├── Skills.astro          … 言語・資格（装飾: 窒素水素）
    ├── Interests.astro       … 趣味・技術関心・Spotify・hello.asm（装飾: 星）
    ├── Activity.astro        … 年表（装飾: 風船）
    ├── Blog.astro            … Qiita / Medium / Zenn カード（装飾: 太平洋）
    └── Contact.astro         … GitHub / Gmail / X（装飾: 惑星）
```

## 日英切り替え

右上ボタンで `body.lang-en` をトグル。
テキストは `<span class="ja">…</span><span class="en">…</span>` で用意。

## 装飾について

各セクションの図鑑モチーフ（窒素水素・星・太平洋・惑星・風船）は
700px 以下で自動非表示。スマホで文字に被りません。
# potoforio
