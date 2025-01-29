function toggleNav() {
    const nav = document.getElementById('navbar-container');
    const menuIcon = document.getElementById('menu-icon');
  
    nav.classList.toggle('active');
  
    if (nav.classList.contains('active')) {
      menuIcon.innerHTML = '&times;'; 
    } else {
      menuIcon.innerHTML = '&#9776;'; 
    }
  }
  