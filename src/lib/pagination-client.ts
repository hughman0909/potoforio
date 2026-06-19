import { buildPageRange } from './pagination';

export interface PaginationConfig {
  sectionId: string;
  wrapId: string;
  itemSelector: string;
  param: string;
  perPage: number;
}

/**
 * ページネーションを初期化する。
 * 戻り値の update() は外部からフィルタを渡す用途に使える。
 * 例: update(el => el.dataset.tags?.split(',').includes(activeTag))
 */
export function initPagination(config: PaginationConfig): {
  update: (filter?: (el: HTMLElement) => boolean) => void;
} {
  const { sectionId, wrapId, itemSelector, param, perPage } = config;

  function readPage(): number {
    const v = new URLSearchParams(location.search).get(param);
    const n = parseInt(v ?? '1', 10);
    return isNaN(n) || n < 1 ? 1 : n;
  }

  function renderNav(current: number, total: number): string {
    const range = buildPageRange(current, total);
    const atFirst = current === 1;
    const atLast = current === total;

    const prevBtn = atFirst
      ? `<span class="pg-btn pg-prev pg-disabled" aria-disabled="true" tabindex="-1"><span class="ja">前へ</span><span class="en">Prev</span></span>`
      : `<a class="pg-btn pg-prev" href="?${param}=${current - 1}#${sectionId}"><span class="ja">前へ</span><span class="en">Prev</span></a>`;

    const nextBtn = atLast
      ? `<span class="pg-btn pg-next pg-disabled" aria-disabled="true" tabindex="-1"><span class="ja">次へ</span><span class="en">Next</span></span>`
      : `<a class="pg-btn pg-next" href="?${param}=${current + 1}#${sectionId}"><span class="ja">次へ</span><span class="en">Next</span></a>`;

    const nums = range
      .map((p) =>
        p === '...'
          ? `<span class="pg-ellipsis">…</span>`
          : p === current
            ? `<a class="pg-num pg-current" href="?${param}=${p}#${sectionId}" aria-current="page" aria-label="ページ ${p}">${p}</a>`
            : `<a class="pg-num" href="?${param}=${p}#${sectionId}" aria-label="ページ ${p}">${p}</a>`,
      )
      .join('');

    return `<nav class="pg-nav" aria-label="ページネーション">${prevBtn}<span class="pg-pages">${nums}</span>${nextBtn}</nav>`;
  }

  function update(filter?: (el: HTMLElement) => boolean): void {
    const allItems = Array.from(document.querySelectorAll<HTMLElement>(itemSelector));
    const items = filter ? allItems.filter(filter) : allItems;
    const wrap = document.getElementById(wrapId);
    if (!wrap) return;

    const page = readPage();
    const totalPages = Math.max(1, Math.ceil(items.length / perPage));
    const current = Math.min(Math.max(page, 1), totalPages);
    const start = (current - 1) * perPage;
    const end = start + perPage;

    allItems.forEach((el) => { el.hidden = true; });
    items.forEach((el, i) => { el.hidden = i < start || i >= end; });

    if (totalPages <= 1) {
      wrap.innerHTML = '';
      wrap.hidden = true;
    } else {
      wrap.innerHTML = renderNav(current, totalPages);
      wrap.hidden = false;
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const wrap = document.getElementById(wrapId);
    if (!wrap) return;

    // SPA ナビゲーション: ページネーションリンクのクリックをフルリロードなしで処理する
    wrap.addEventListener('click', (e: MouseEvent) => {
      const a = (e.target as Element).closest<HTMLAnchorElement>('a[href]');
      if (!a) return;
      e.preventDefault();
      const url = new URL(a.href);
      history.pushState(null, '', url.pathname + url.search);
      update();
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    update();
  });

  // ブラウザの戻る/進むで URL が変わったときに再描画する
  window.addEventListener('popstate', () => update());

  return { update };
}
