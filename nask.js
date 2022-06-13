function setLightMode() {
    localStorage.setItem("mode", "light");
    document.body.className = 'light';
  }
  
  function setDarkMode() {
    localStorage.setItem("mode", "dark");
    document.body.className = 'dark';
  }
  
  function setMode() {
    let mode = localStorage.getItem("mode");
    document.body.className = mode;
  }