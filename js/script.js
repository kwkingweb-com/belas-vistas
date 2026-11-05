'use strict';
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const WHATSAPP = '5535999541898';
const PHOTOS = [
  {src:'https://ecrie.com.br/sistema/conteudos/imagem/g_50_0_8_21032024091346.jpeg',alt:'Vista aérea dos chalés com telhados triangulares e montanhas verdes ao redor',name:'A vista lá de cima',type:'paisagem'},
  {src:'https://ecrie.com.br/sistema/conteudos/imagem/g_50_1_7_21032024091346.jpeg',alt:'Chalés em formato de A com flores e gramado verde',name:'Entre flores e montanhas',type:'chales'},
  {src:'https://ecrie.com.br/sistema/conteudos/imagem/g_50_2_6_21032024091346.jpeg',alt:'Caminho ladeado por chalés e montanhas com sol no horizonte',name:'O fim de tarde',type:'paisagem'},
  {src:'https://ecrie.com.br/sistema/conteudos/imagem/g_50_3_5_21032024091346.jpeg',alt:'Piscina, jardim e varandas dos Chalés Bela Vista',name:'Perto da piscina',type:'lazer'},
  {src:'https://ecrie.com.br/sistema/conteudos/imagem/m_50_1_11_27012020142422.jpg',alt:'Chalé azul de dois andares, telhado triangular, varanda e flores',name:'O charme da arquitetura',type:'chales'},
  {src:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/94/b0/32/mais-de-8-tipos-de-chales.jpg?h=-1&s=1&w=900',alt:'Quarto de madeira com cama de casal e varanda para a mata',name:'Aconchego em madeira',type:'chales'},
  {src:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/94/b0/31/mais-de-8-tipos-de-chales.jpg?h=-1&s=1&w=1000',alt:'Varanda em madeira com mesa, cadeiras e vista para o bosque',name:'Um lugar para contemplar',type:'chales'},
  {src:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/fc/6a/33/caption.jpg?h=-1&s=1&w=1100',alt:'Quarto com varanda aberta para o vale verde e montanhas',name:'Janela para a natureza',type:'chales'},
  {src:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/94/b1/07/mais-de-37-cachoeiras.jpg?h=1200&s=1&w=1200',alt:'Piscina externa azul com espreguiçadeiras e natureza ao redor',name:'Mergulho com vista',type:'lazer'},
  {src:'https://media-cdn.tripadvisor.com/media/photo-s/1c/4b/ae/07/rancho-bela-vista.jpg',alt:'Prato servido no Rancho Bela Vista diante de montanhas verdes',name:'Sabores do Rancho',type:'lazer'},
  {src:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/9e/28/b5/chales-bela-vista.jpg?h=600&s=1&w=1000',alt:'Fileira de chalés azuis em forma triangular sob céu azul',name:'A identidade do Bela Vista',type:'chales'}
];
const localToday = () => {
  const d = new Date();
  return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');
};
const parseDate = s => /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(new Date(s+'T12:00:00').getTime()) && new Date(s+'T12:00:00').toISOString().slice(0,10) === s;
const nextDay = s => {const d=new Date(s+'T12:00:00');d.setDate(d.getDate()+1);return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-')};
const ptDate = s => s.split('-').reverse().join('/');
const today = localToday();
function syncDateInputs(first, second) {
  first.min=today; second.min=nextDay(first.value && parseDate(first.value) ? first.value : today);
  first.addEventListener('change', () => {
    second.min=nextDay(first.value && parseDate(first.value) ? first.value : today);
    if(second.value && second.value < second.min) second.value='';
  });
}
syncDateInputs($('#quickStart'), $('#quickEnd'));
syncDateInputs($('#start'), $('#end'));
$('#year').textContent = String(new Date().getFullYear());
// Header and reading progress
const header=$('#header'),progress=$('#scrollLine');
let ticking=false;
function updateScroll() {
  header.classList.toggle('scrolled',window.scrollY>24);
  const range=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
  progress.style.width=(Math.min(1,window.scrollY/range)*100).toFixed(2)+'%';
  ticking=false;
}
window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(updateScroll);ticking=true}},{passive:true});updateScroll();
// Mobile navigation
const menuToggle=$('#menuToggle'),mobileNav=$('#mobileNav');
function closeMenu(){mobileNav.classList.remove('open');header.classList.remove('menu-open');menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Abrir menu');mobileNav.inert=true}
menuToggle.addEventListener('click',()=>{
  const isOpen=!mobileNav.classList.contains('open');
  mobileNav.classList.toggle('open',isOpen);header.classList.toggle('menu-open',isOpen);
  menuToggle.setAttribute('aria-expanded',String(isOpen));menuToggle.setAttribute('aria-label',isOpen?'Fechar menu':'Abrir menu');mobileNav.inert=!isOpen;
});
$$('#mobileNav a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu()});
// Hero slideshow
const slides=$$('.hero-slide'),slideCounter=$('#slideCounter');let slide=0,slideInterval;
function showSlide(n) {
  slide=(n+slides.length)%slides.length;
  slides.forEach((el,i)=>el.classList.toggle('active',i===slide));
  slideCounter.textContent=String(slide+1).padStart(2,'0')+' / '+String(slides.length).padStart(2,'0');
}
function startSlides(){clearInterval(slideInterval);if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches&&!document.hidden)slideInterval=setInterval(()=>showSlide(slide+1),7800)};
$('#slidePrev').addEventListener('click',()=>{showSlide(slide-1);startSlides()});
$('#slideNext').addEventListener('click',()=>{showSlide(slide+1);startSlides()});
document.addEventListener('visibilitychange',startSlides);startSlides();
// Quick date lookup copies into the complete booking form
$('#quickForm').addEventListener('submit',event=>{
  event.preventDefault();
  const a=$('#quickStart').value,b=$('#quickEnd').value,err=$('#quickError');
  if(!parseDate(a)||a<today||!parseDate(b)||b<=a){err.textContent='Escolha uma entrada e saída válidas.';return}
  err.textContent='';$('#start').value=a;$('#end').min=nextDay(a);$('#end').value=b;$('#adults').value=$('#quickGuests').value;
  $('#reservas').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
  $('#name').focus({preventScroll:true});
});
// Reveal: CSS-only graceful fallback if IntersectionObserver unavailable
if('IntersectionObserver' in window){
 const observer=new IntersectionObserver((entries,obs)=>{
   entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');obs.unobserve(e.target)}});
 },{threshold:.08,rootMargin:'0px 0px -15px 0px'});
 $$('.reveal').forEach(el=>observer.observe(el));
}else $$('.reveal').forEach(el=>el.classList.add('is-visible'));
// Gallery with source-verified photos
const galleryGrid=$('#galleryGrid'),galleryCount=$('#galleryCount'),galleryMore=$('#galleryMore');
let currentFilter='todos',expanded=false,visiblePhotos=[];
function renderGallery() {
 const all=PHOTOS.filter(photo=>currentFilter==='todos'||photo.type===currentFilter);
 visiblePhotos=expanded?all:all.slice(0,7);
 const fragment=document.createDocumentFragment();
 visiblePhotos.forEach((p,i)=>{
  const button=document.createElement('button');button.type='button';button.className='gallery-item';button.setAttribute('aria-label','Ampliar: '+p.name);
  const image=document.createElement('img');image.src=p.src;image.alt=p.alt;image.loading='lazy';image.decoding='async';
  const caption=document.createElement('span');caption.textContent=p.name+' ';const arrow=document.createElement('b');arrow.textContent='↗';caption.append(arrow);
  button.append(image,caption);button.addEventListener('click',()=>openPhoto(visiblePhotos,i));fragment.append(button);
 });
 galleryGrid.replaceChildren(fragment);
 galleryCount.textContent=visiblePhotos.length+' de '+all.length+' fotografias';
 galleryMore.hidden=all.length<=7;
 galleryMore.innerHTML=expanded?'Mostrar menos <span>−</span>':'Ver mais fotografias <span>＋</span>';
}
$$('.gallery-filters button').forEach(btn=>btn.addEventListener('click',()=>{
 currentFilter=btn.dataset.filter;expanded=false;
 $$('.gallery-filters button').forEach(x=>{const on=x===btn;x.classList.toggle('current',on);x.setAttribute('aria-pressed',String(on))});
 renderGallery();
}));
galleryMore.addEventListener('click',()=>{expanded=!expanded;renderGallery();if(!expanded)galleryGrid.scrollIntoView({behavior:'smooth',block:'start'})});
renderGallery();
// Photo modal
const photoDialog=$('#photoDialog'),dialogImage=$('#dialogImage'),dialogCaption=$('#dialogCaption'),photoIndex=$('#photoIndex');
let modalPhotos=[],modalIndex=0,lastFocus=null;
function setPhoto(i){
 modalIndex=(i+modalPhotos.length)%modalPhotos.length;
 const p=modalPhotos[modalIndex];dialogImage.src=p.src;dialogImage.alt=p.alt;dialogCaption.textContent=p.name;
 photoIndex.textContent=String(modalIndex+1).padStart(2,'0')+' / '+String(modalPhotos.length).padStart(2,'0');
 $('#photoPrev').hidden=modalPhotos.length<=1;$('#photoNext').hidden=modalPhotos.length<=1;
}
function openPhoto(photos,i){lastFocus=document.activeElement;modalPhotos=photos;setPhoto(i);photoDialog.showModal();document.body.classList.add('dialog-open')}
function closePhoto(){if(photoDialog.open)photoDialog.close()}
$('#dialogClose').addEventListener('click',closePhoto);
$('#photoPrev').addEventListener('click',()=>setPhoto(modalIndex-1));$('#photoNext').addEventListener('click',()=>setPhoto(modalIndex+1));
photoDialog.addEventListener('click',e=>{if(e.target===photoDialog)closePhoto()});
photoDialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');if(lastFocus?.isConnected)lastFocus.focus()});
// Accommodation directory: filters are only a browsing aid, not an availability check.
$$('.room-filter').forEach(button=>button.addEventListener('click',()=>{
  const choice=button.dataset.cap;
  $$('.room-filter').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  let total=0;
  $$('.room-directory-card').forEach(card=>{
    const cap=Number(card.dataset.capacity);
    const visible=choice==='all'||(choice==='2'&&cap===2)||(choice==='sofa'&&card.dataset.group==='sofa')||(choice==='6'&&cap>=4);
    card.hidden=!visible;
    if(visible)total++;
  });
}));
// Preselect accommodation when coming back from a detailed page.
const choiceParam=new URLSearchParams(window.location.search).get('acomodacao');
if(choiceParam&&$('#roomChoice')){
 const option=Array.from($('#roomChoice').options).find(o=>o.value===choiceParam);
 if(option)$('#roomChoice').value=choiceParam;
}
document.addEventListener('keydown',e=>{
 if(e.key==='Escape')closeMenu();
 if(photoDialog.open&&e.key==='ArrowLeft')setPhoto(modalIndex-1);
 if(photoDialog.open&&e.key==='ArrowRight')setPhoto(modalIndex+1);
});
// Complete reservation request
$('#bookingForm').addEventListener('submit',e=>{
 e.preventDefault();const error=$('#formError');error.textContent='';
 const name=$('#name').value.trim().replace(/\s+/g,' '),phone=$('#phone').value.trim(),phoneDigits=phone.replace(/\D/g,''),start=$('#start').value,end=$('#end').value;
 const adults=$('#adults').value,kids=$('#kids').value,notes=$('#notes').value.trim(),roomChoice=$('#roomChoice').value;
 function invalid(message,element){error.textContent=message;element.focus();return}
 if(name.length<3||!name.includes(' '))return invalid('Informe seu nome e sobrenome.',$('#name'));
 if(phoneDigits.length<10||phoneDigits.length>13)return invalid('Informe um WhatsApp válido com DDD.',$('#phone'));
 if(!parseDate(start)||start<localToday())return invalid('Escolha uma data de entrada válida, a partir de hoje.',$('#start'));
 if(!parseDate(end)||end<=start)return invalid('A saída precisa ser depois da entrada.',$('#end'));
 const message=[
  'Olá! Gostaria de solicitar uma reserva nos *Chalés Bela Vista*, em Bueno Brandão.',
  '', '*SOLICITAÇÃO DE HOSPEDAGEM*',
  '👤 *Nome:* '+name,
  '📱 *Contato:* '+phone,
  roomChoice?'🏡 *Acomodação desejada:* '+roomChoice:'🏡 *Acomodação:* gostaria de uma sugestão',
  '📅 *Entrada:* '+ptDate(start),
  '📅 *Saída:* '+ptDate(end),
  '👥 *Adultos:* '+adults,
  '🧒 *Crianças:* '+kids,
  notes?'📝 *Observações:* '+notes:'',
  '', 'Esta é uma solicitação, sujeita à confirmação de valores, condições e disponibilidade pela pousada.'
 ].filter(Boolean).join('\n');
 const url='https://wa.me/'+WHATSAPP+'?text='+encodeURIComponent(message);
 const opened=window.open(url,'_blank');
 if(opened)opened.opener=null;
 else window.location.href=url;
});
// Address copy
$('#copyAddress').addEventListener('click',async()=>{
 const address='Chalés Bela Vista, Sítio São José, 01, Estrada Bueno Brandão / Monte Sião, km 1, bairro Lava Pés, Bueno Brandão - MG, 37578-000';
 try{
  if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(address)}
  else{const ta=document.createElement('textarea');ta.value=address;document.body.append(ta);ta.select();if(!document.execCommand('copy'))throw Error('Copy blocked');ta.remove()}
  $('#copyMessage').textContent='Endereço copiado.';
 }catch(error){$('#copyMessage').textContent='Endereço: '+address}
});
// Visible image failure feedback (no substitute photos are invented)
document.addEventListener('error',e=>{
 const img=e.target;
 if(img.tagName!=='IMG')return;
 img.classList.add('image-not-loaded');
 img.setAttribute('title','Fotografia indisponível. Verifique a conexão com a internet.');
},true);
