const loginBtn = document.getElementById('loginBtn');
const dropdown = document.getElementById('loginDropdown');

// only attach handlers if both elements are present (some pages don't show login)
if (loginBtn && dropdown) {
  loginBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    dropdown.classList.remove('open');
  });

  dropdown.addEventListener('click', (e) => {
    e.stopPropagation();
  });
}


function showSection(sectionId) {

  // no special hiding logic; profile link should always be visible
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.remove('active');
  });

  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
  }

  document.querySelectorAll('.sidebar li').forEach(item => {
    item.classList.remove('active');
  });

  if (event && event.target) {
    event.target.classList.add('active');
  }

}

