// Menu toggle and theme toggle
(function(){
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  const themeBtn = document.getElementById('theme-toggle');

  if(navToggle){
    navToggle.addEventListener('click', ()=>{
      const open = document.documentElement.classList.toggle('nav-open');
      if(open){
        mainNav.style.display = 'flex';
        mainNav.style.flexDirection = 'column';
        mainNav.style.gap = '0.5rem';
      } else {
        mainNav.style.display = '';
      }
    });
  }

  function setTheme(theme){
    if(theme === 'dark') document.documentElement.setAttribute('data-theme','dark');
    else document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('site-theme', theme);
  }

  // Initialize theme from localStorage or prefers-color-scheme
  const saved = localStorage.getItem('site-theme');
  if(saved) setTheme(saved);
  else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('dark');

  if(themeBtn){
    themeBtn.addEventListener('click', ()=>{
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }
})();
