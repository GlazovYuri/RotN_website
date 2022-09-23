document.querySelector('.social-icons').onmousemove = e => {

    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    const deg = Math.atan2(y - 40, x - 40) / Math.PI * 180 + 90;
    //const perc = Math.sqrt((y - 40)*(y - 40)+(x - 40)*(x - 40)) / (40 * Math.sqrt(2));
  
    e.target.style.setProperty('--deg', `${deg}deg`);
    //e.target.style.setProperty('--color', `${Math.round(68 * perc)*10000 + Math.round(56 * perc)*100 + Math.round(86 * perc)}`);

    //68, 56, 87
  
  };