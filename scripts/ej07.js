const toggleBtn = document.getElementById('toggleMenu');
const subMenu = document.getElementById('subMenu');

toggleBtn.addEventListener('click', () => {
  if(subMenu.style.display === 'block'){
    subMenu.style.display = 'none';
  } else {
    subMenu.style.display = 'block';
  }
});
