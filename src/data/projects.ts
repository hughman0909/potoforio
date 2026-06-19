// 1ページあたりの表示件数。ここを変えるだけで全体に反映される。
export const PROJECT_PER_PAGE = 6;

export interface ProjectStep {
  labelJa: string;
  labelEn: string;
  descJa: string;
  descEn: string;
}

export interface ProjectItem {
  date: string;
  /** カテゴリタグ（フィルタ追加時に使用）*/
  tags: string[];
  titleJa: string;
  titleEn: string;
  overviewJa: string;
  overviewEn: string;
  steps: ProjectStep[];
  tools: string[];
  links?: { labelJa: string; labelEn: string; href: string }[];
}

export const PROJECTS: ProjectItem[] = [
  {
    date: '2026/05',
    tags: ['Workshop', 'Campus'],
    titleJa: '初学者向け表層解析ワークショップ',
    titleEn: 'Beginner Surface-Analysis Workshop',
    overviewJa: '学内の1・2年生を対象に、マルウェアの表層解析手法を実践形式で学べる2時間のワークショップを企画・開催した。',
    overviewEn: 'Designed and ran a 2-hour hands-on workshop for first- and second-year students on static malware surface analysis.',
    steps: [
      {
        labelJa: 'テーマ選定',
        labelEn: 'Theme selection',
        descJa: '初学者に難しい静的解析と、学内で行うには危険な動的解析を避け、ツールを使って安全に学べる"表層解析"をテーマに据えた。',
        descEn: 'Avoided deep static analysis (too complex for beginners) and dynamic analysis (too risky on campus); chose "surface analysis" as a safe, tool-driven entry point.',
      },
      {
        labelJa: 'カリキュラム構成',
        labelEn: 'Curriculum design',
        descJa: '拡張子の偽装とハッシュ → バイナリからの文字列抽出 → 破損ファイルの修復 → UPX によるパッキング → 総合問題、と段階的に難易度が上がる5章構成にした。',
        descEn: 'Structured 5 chapters of increasing difficulty: extension spoofing & hashing → string extraction → corrupted file repair → UPX packing → final challenge.',
      },
      {
        labelJa: '環境整備',
        labelEn: 'Environment setup',
        descJa: 'macOS 標準ツール中心で構成し、追加インストールを upx のみに抑えることで環境依存トラブルを最小化した。',
        descEn: 'Built around macOS built-in tools and limited additional installs to upx only, minimising environment-related friction.',
      },
      {
        labelJa: '当日進行',
        labelEn: 'Day-of facilitation',
        descJa: '詰まった箇所を個別にサポートしながら進行し、2時間のハンズオンで参加者が手を動かしきれる構成で運営した。',
        descEn: 'Supported participants one-on-one when they got stuck and kept pacing so everyone could finish all exercises within the 2-hour session.',
      },
    ],
    tools: ['file', 'strings', 'xxd', 'shasum', 'upx'],
    links: [
      { labelJa: 'GitHub', labelEn: 'GitHub', href: 'https://github.com/hughman0909/sacw' },
    ],
  },
];
