const header=document.getElementById('header');
const burger=document.getElementById('burger');
const nav=document.getElementById('nav');
if(burger&&nav){burger.onclick=()=>nav.classList.toggle('open');nav.querySelectorAll('a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));}
window.addEventListener('scroll',()=>{if(header)header.classList.toggle('on',scrollY>30);},{passive:true});
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target);}});},{threshold:.12,rootMargin:'0px 0px -30px 0px'});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
function countUp(el){const t=+el.dataset.n;if(!t)return;const t0=performance.now();(function frame(now){const p=Math.min((now-t0)/1100,1);el.textContent=Math.round(t*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(frame);})(t0);}
const so=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.querySelectorAll('[data-n]').forEach(countUp);so.unobserve(e.target);}});},{threshold:.5});
document.querySelectorAll('.stats').forEach(s=>so.observe(s));
const c=document.getElementById('bg');
if(c){const x=c.getContext('2d');let w,h,ps=[];const N=50;
function resize(){w=c.width=innerWidth;h=c.height=innerHeight;}
function init(){ps=Array.from({length:N},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.6+.4,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,col:Math.random()>.5?'34,211,238':'167,139,250'}));}
function draw(){x.clearRect(0,0,w,h);for(let i=0;i<ps.length;i++){const p=ps[i];p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;x.beginPath();x.arc(p.x,p.y,p.r,0,Math.PI*2);x.fillStyle=`rgba(${p.col},.35)`;x.fill();for(let j=i+1;j<ps.length;j++){const q=ps[j],dx=p.x-q.x,dy=p.y-q.y,d=Math.hypot(dx,dy);if(d<110){x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.strokeStyle=`rgba(34,211,238,${.07*(1-d/110)})`;x.lineWidth=.6;x.stroke();}}}requestAnimationFrame(draw);}
addEventListener('resize',()=>{resize();init();});resize();init();draw();}
