let currentLang='en';
const $=(s)=>document.querySelector(s);
const $$=(s)=>document.querySelectorAll(s);


function applyBusinessSettings(){
  const smsBody=encodeURIComponent(BUSINESS.estimateText);
  const phoneHref=`tel:${BUSINESS.phoneLink}`;
  const textHref=`sms:${BUSINESS.phoneLink}?body=${smsBody}`;
  const emailHref=`mailto:${BUSINESS.email}?subject=${encodeURIComponent('Estimate request — Veritas Solution LLC')}`;

  const setHref=(selector,value)=>{const el=$(selector);if(el)el.href=value;};
  setHref('#hero-phone-link',phoneHref);
  setHref('#hero-text-link',textHref);
  setHref('#commercial-text-link',textHref);
  setHref('#contact-phone-link',phoneHref);
  setHref('#contact-text-link',textHref);
  setHref('#contact-email-link',emailHref);
  setHref('#footer-email',emailHref);

  const setText=(selector,value)=>{const el=$(selector);if(el)el.textContent=value;};
  setText('#contact-phone',BUSINESS.phoneDisplay);
  setText('#contact-email',BUSINESS.email);
  setText('#footer-email',BUSINESS.email);
  setText('#footer-business-name',BUSINESS.name);
}

function renderServices(){
  const grid=$('#services-grid');
  grid.innerHTML=SITE_CONTENT.services.map(s=>`<article class="card"><div class="icon">${s.icon}</div><h3>${s.title[currentLang]}</h3><p>${s.text[currentLang]}</p></article>`).join('');
}
async function loadProjects(){
  try{
    const response=await fetch('projects.json',{cache:'no-store'});
    if(!response.ok) throw new Error('Could not load projects.json');
    SITE_CONTENT.projects=await response.json();
  }catch(error){
    console.error(error);
  }
}

let activeProjectIndex=0;
let activePhotoIndex=0;

function getProjectGallery(project){
  const rawGallery=Array.isArray(project.gallery) && project.gallery.length
    ? project.gallery
    : [project.image];

  return rawGallery.map((item,index)=>{
    if(typeof item==='string'){
      return {
        src:item,
        label:index===0 ? '' : `Photo ${index+1}`
      };
    }
    return {
      src:item.src,
      label:item.label?.[currentLang] || item.label?.en || item.label || ''
    };
  });
}

function renderProjects(){
  const grid=$('#projects-grid');
  grid.innerHTML=SITE_CONTENT.projects.map((p,index)=>`
    <article class="project" data-project-index="${index}" tabindex="0" role="button" aria-label="${p.title[currentLang]}">
      <img src="${p.image}" alt="${p.title[currentLang]}">
      <div class="project-info">
        <strong>${p.title[currentLang]}</strong>
        <span>${p.city || p.category || ''}</span>
        ${getProjectGallery(p).length>1 ? `<small class="photo-count">View ${getProjectGallery(p).length} photos</small>` : ''}
      </div>
    </article>
  `).join('');

  $$('.project').forEach(el=>{
    const open=()=>openProjectGallery(Number(el.dataset.projectIndex),0);
    el.addEventListener('click',open);
    el.addEventListener('keydown',event=>{
      if(event.key==='Enter' || event.key===' '){
        event.preventDefault();
        open();
      }
    });
  });
}

function updateLightbox(){
  const project=SITE_CONTENT.projects[activeProjectIndex];
  const gallery=getProjectGallery(project);
  const photo=gallery[activePhotoIndex];

  $('#lightbox-image').src=photo.src;
  $('#lightbox-image').alt=`${project.title[currentLang]}${photo.label ? ` — ${photo.label}` : ''}`;
  $('#lightbox-title').textContent=project.title[currentLang];
  $('#lightbox-label').textContent=photo.label;
  $('#lightbox-counter').textContent=`${activePhotoIndex+1} / ${gallery.length}`;

  const showNavigation=gallery.length>1;
  $('.lightbox-prev').hidden=!showNavigation;
  $('.lightbox-next').hidden=!showNavigation;
}

function openProjectGallery(projectIndex,photoIndex=0){
  activeProjectIndex=projectIndex;
  activePhotoIndex=photoIndex;
  updateLightbox();

  const lb=$('#lightbox');
  lb.classList.add('open');
  lb.setAttribute('aria-hidden','false');
  document.body.classList.add('no-scroll');
}

function changeLightboxPhoto(direction){
  const project=SITE_CONTENT.projects[activeProjectIndex];
  const gallery=getProjectGallery(project);
  activePhotoIndex=(activePhotoIndex+direction+gallery.length)%gallery.length;
  updateLightbox();
}

function closeLightbox(){
  const lb=$('#lightbox');
  lb.classList.remove('open');
  lb.setAttribute('aria-hidden','true');
  document.body.classList.remove('no-scroll');
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
$('.menu-toggle').addEventListener('click',()=>$('.menu').classList.toggle('open'));
$$('.menu a').forEach(a=>a.addEventListener('click',()=>$('.menu').classList.remove('open')));
$$('[data-lang]').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
$('.lightbox-close').addEventListener('click',closeLightbox);
$('.lightbox-prev').addEventListener('click',()=>changeLightboxPhoto(-1));
$('.lightbox-next').addEventListener('click',()=>changeLightboxPhoto(1));
$('#lightbox').addEventListener('click',e=>{if(e.target.id==='lightbox')closeLightbox();});
document.addEventListener('keydown',e=>{
  if(!$('#lightbox').classList.contains('open')) return;
  if(e.key==='Escape') closeLightbox();
  if(e.key==='ArrowLeft') changeLightboxPhoto(-1);
  if(e.key==='ArrowRight') changeLightboxPhoto(1);
});
$('#year').textContent=new Date().getFullYear();
async function initializeSite(){
  applyBusinessSettings();
  renderAreas();
  await loadProjects();
  setLanguage('en');
}
initializeSite();