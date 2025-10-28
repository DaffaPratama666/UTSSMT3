// Toggle nav untuk setiap halaman
function setupNav(toggleId, navId){
  const btn = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  if(!btn || !nav) return;
  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

setupNav('navToggle','mainNav');
setupNav('navToggle2','mainNav2');
setupNav('navToggle3','mainNav3');

// Modal proyek
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('.open-modal').forEach(btn => {
  btn.addEventListener('click', () => {
    const title = btn.dataset.title || 'Detail Proyek';
    const desc = btn.dataset.desc || '';
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modal.setAttribute('aria-hidden','false');
  });
});

if(modalClose){
  modalClose.addEventListener('click', () => modal.setAttribute('aria-hidden','true'));
}
modal.addEventListener('click', e => {
  if(e.target === modal) modal.setAttribute('aria-hidden','true');
});
