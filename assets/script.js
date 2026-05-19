// 填充年份
['year', 'year-2', 'year-3', 'year-4', 'year-5'].forEach((id) => {
  const el = document.getElementById(id);
  if (el) el.textContent = new Date().getFullYear();
});

// 首页卡片渐进出现（轻量，无第三方库）
document.querySelectorAll('.eva-block').forEach((card, index) => {
  card.style.animationDelay = `${Math.min(index * 0.12, 0.6)}s`;
});
