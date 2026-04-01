document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.getElementById('weeklyForm');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const payload = {
        name: document.getElementById('name')?.value.trim() || '',
        email: document.getElementById('email')?.value.trim() || '',
        sport: document.getElementById('sport')?.value.trim() || '',
        createdAt: new Date().toISOString()
      };
      const existing = JSON.parse(localStorage.getItem('raySportsWeeklyLeads') || '[]');
      existing.push(payload);
      localStorage.setItem('raySportsWeeklyLeads', JSON.stringify(existing));
      document.getElementById('formNotice')?.classList.add('show');
      form.reset();
    });
  }
});
