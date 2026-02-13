// Generate floating hearts on load
for(let i=0;i<15;i++){
  let heart=document.createElement('div');
  heart.className='heart';
  heart.style.left=Math.random()*100+'vw';
  heart.style.animationDuration=(2+Math.random()*2)+'s';
  heart.style.width=heart.style.height=10+Math.random()*15+'px';
  document.body.appendChild(heart);
}
