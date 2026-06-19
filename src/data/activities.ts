// 1ページあたりの表示件数。ここを変えるだけで全体に反映される。
export const ACTIVITY_PER_PAGE = 15;

export interface ActivityItem {
  when: string;
  ja: string;
  en: string;
  /** 末尾に <em> で表示する補足（日本語）例: "— 大阪会場賞" */
  italicJa?: string;
  /** 末尾に <em> で表示する補足（英語）例: "— Osaka Venue Award" */
  italicEn?: string;
}

export const ACTIVITIES: ActivityItem[] = [
  { when: '2026/06', ja: 'SECCON Beginners CTF 2026に参加', en: 'Participated in the SECCON Beginners 2026' },
  { when: '2026/06', ja: '学内ハッカソンにメンターとして参加', en: 'Participated in an on-campus hackathon as a mentor' },
  { when: '2026/06', ja: 'セキュリティ・キャンプ 全国大会 2026 脅威解析クラス選考通過', en: 'Selected for the National Security Camp, Threat Analysis Class' },
  { when: '2026/05', ja: '学内で初学者向け表層解析ワークショップを開催', en: 'Hosted a beginner surface-analysis workshop on campus' },
  { when: '2026/04', ja: 'try! Swift Tokyo に初参加', en: 'Attended try! Swift Tokyo for the first time' },
  { when: '2026/03', ja: 'セキュリティ・キャンプ コネクト 2026 デバイスクラス修了', en: 'Completed Security Camp Connect 2026, Device Class' },
  { when: '2026/02', ja: 'KC3Hack に参加', en: 'Took part in KC3Hack' },
  { when: '2025/12–2026/05', ja: 'Web 開発の長期インターンに従事', en: 'Long-term web development internship' },
  { when: '2025/08', ja: '基本情報技術者試験に合格', en: 'Passed the Fundamental Information Technology Engineer Exam' },
  { when: '2025/07', ja: 'TOEIC 950点を取得', en: 'Scored TOEIC 950' },
  { when: '2025/06', ja: '登竜門ハッカソン', en: 'Toryumon Hackathon', italicJa: '— 大阪会場賞', italicEn: '— Osaka Venue Award' },
];
