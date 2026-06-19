/**
 * ページ番号の範囲を構築する。7ページ以内は全表示、それ以上は省略（…）を挟む。
 *
 * 将来フィルタを追加する場合:
 *   const filtered = items.filter(activeFilter);
 *   const range = buildPageRange(currentPage, Math.ceil(filtered.length / PER_PAGE));
 * のように、filteredItems.length を渡すだけで対応できる。
 */
export function buildPageRange(current: number, total: number): (number | '...')[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | '...')[] = [1];

  if (current > 3) pages.push('...');

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) pages.push(i);

  if (current < total - 2) pages.push('...');

  pages.push(total);

  return pages;
}

/**
 * アイテム配列をページ分割する純粋関数。
 * フィルタと組み合わせる場合:
 *   const filtered = allItems.filter(predicate);
 *   const { items, page, totalPages } = paginate(filtered, requestedPage, PER_PAGE);
 */
export function paginate<T>(
  items: T[],
  page: number,
  perPage: number,
): { items: T[]; page: number; totalPages: number } {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const p = Math.min(Math.max(page, 1), totalPages);
  return {
    items: items.slice((p - 1) * perPage, p * perPage),
    page: p,
    totalPages,
  };
}
