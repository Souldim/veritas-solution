let currentLang='en';
const $=(s)=>document.querySelector(s);
const $$=(s)=>document.querySelectorAll(s);

function renderServices(){
  const grid=$('#services-grid');
  grid.innerHTML=SITE_CONTENT.services.map(s=>`<article class="card"><div class="icon">${s.icon}</div><h3>${s.title[currentLang]}</h3><p>${s.text[currentLang]}</p></article>`).join('');
}
function renderProjects(){
  const grid=$('#projects-grid');
  grid.innerHTML=SITE_CONTENT.projects.map((p,i)=>`<article class="project" data-image="${p.image}"><img src="${p.image}" alt="${p.title[currentLang]}"><div class="project-info"><strong>${p.title[currentLang]}</strong><span>${p.meta[currentLang]}</span></div></article>`).join('');
  $$('.project').forEach(el=>el.addEventListener('click',()=>openLightbox(el.dataset.image,el.querySelector('img').alt)));
}
function renderCommercial(){
  $('#commercial-list').innerHTML=SITE_CONTENT.commercial[currentLang].map(x=>`<li>${x}</li>`).join('');
}
function renderAreas(){
  $('#areas-list').innerHTML=SITE_CONTENT.areas.map(x=>`<span>${x}</span>`).join('');
}
function setLanguage(lang){
  currentLang=lang;
  document.documentElement.lang=lang==='uk'?'uk':lang;
  $$('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(TRANSLATIONS[lang][key])el.textContent=TRANSLATIONS[lang][key];});
  $$('[data-lang]').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  renderServices();renderProjects();renderCommercial();
}
function openLightbox(src,alt){
  const lb=$('#lightbox');lb.querySelector('img').src=src;lb.querySelector('img').alt=alt;lb.classList.add('open');lb.setAttribute('aria-hidden','false');
}
function closeLightbox(){const lb=$('#lightbox');lb.classList.remove('open');lb.setAttribute('aria-hidden','true');}
$('.menu-toggle').addEventListener('click',()=>$('.menu').classList.toggle('open'));
$$('.menu a').forEach(a=>a.addEventListener('click',()=>$('.menu').classList.remove('open')));
$$('[data-lang]').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
$('#lightbox button').addEventListener('click',closeLightbox);
$('#lightbox').addEventListener('click',e=>{if(e.target.id==='lightbox')closeLightbox();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox();});
$('#year').textContent=new Date().getFullYear();
renderAreas();setLanguage('en');