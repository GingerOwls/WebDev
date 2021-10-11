const checkbox = document.getElementById('checkbox');
const body = document.getElementById('body');
const switchh = document.querySelector('.switch');
checkbox.addEventListener('click', thememode)

window.onload=()=>{
    let theme = localStorage.getItem('theme');
      if(theme === 'light-mode'){
        var element = document.body;
        element.classList.remove("dark-mode");
        localStorage.setItem('theme','light-mode');
      }
      else{
        var element = document.body;
        element.classList.add("dark-mode");
        localStorage.setItem('theme','dark-mode');
      }
  }

function thememode() {
    let theme = localStorage.getItem('theme');
    if(theme === 'light-mode'){
      var element = document.body;
      element.classList.add("dark-mode");
      localStorage.setItem('theme','dark-mode');
    }
    else{
      var element = document.body;
      element.classList.remove("dark-mode");
      localStorage.setItem('theme','light-mode');
    }
  }
