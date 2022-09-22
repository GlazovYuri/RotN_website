document.querySelector('.social-icons').onmousemove = e => {

    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    const deg = Math.atan2(y - 40, x - 40) / Math.PI * 180 + 90;
  
    e.target.style.setProperty('--deg', `${deg}deg`);
  
  };