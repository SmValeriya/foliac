document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelector('.tabs');
  const portfolioItems = document.querySelectorAll('.portfolio__item');

  filterShowItems('all', portfolioItems);

  tabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.tabs__btn');
    if (!btn) return;
    tabs.querySelectorAll('.tabs__btn').forEach((btn) => {
      btn.classList.remove('tabs__btn--active');
    })
    btn.classList.add('tabs__btn--active');
    const filter = btn.dataset.filter;
    filterShowItems(filter, portfolioItems);
  });
});

function filterShowItems(filter, arr) {
  arr.forEach(item => {
    item.classList.remove('portfolio__item--visible');
    if (item.classList.contains(filter) || filter === 'all') {
      item.classList.add('portfolio__item--visible');
    }
  });
}