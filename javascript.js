// ===== DATA =====
const WPP = '5521999999999';

const TIMES = [
// ===========ÓCULOS ESPORTIVOS============
{id:'oculos-1', nome:'Óculos Esportivos', escudo:'<img src="images/simbOculos.png" style="width:100%;height:100%;object-fit:contain">', liga:'Acessórios', ligaCat:'Óculos Esportivos',
  camisas:[
    {nome:'Óculos Esportivo Pro UV400',temporada:'2024/25',versao:'Unissex',badge:'',img:'https://...'},
  ]},

  // ============= CAMISA DRY-FIT ================
  {id:'camisa-dry-1', nome:'Camisas Dry-Fit', escudo:'<img src="images/simbCamisas.png" style="width:100%;height:100%;object-fit:contain">', liga:'Dry-Fit', ligaCat:'Camisas Dry-Fit',
  camisas:[
    {nome:'Dry-Fit Adidas Preta',versao:'Adulto',badge:'Novo',img:'images1/camisaAdidasPreto.png'},
    {nome:'Dry-Fit Adidas Branca',versao:'Adulto',img:'images1/camisaAdidasBranco.png'},
    {nome:'Dry-Fit Adidas Cinza',versao:'Adulto',badge:'Novo',img:'images1/camisaAdidasCinza.png'},
    {nome:'Dry-Fit Nike Beje',versao:'Adulto',img:'images1/camisaNikeBeje.png'},
    {nome:'Dry-Fit Nike Azul',versao:'Adulto',badge:'Novo',img:'images1/camisaNikeAzul.png'},
    {nome:'Dry-Fit Nike Branca',versao:'Adulto',img:'images1/camisaNikeBranca.png'},
  ]},

  // ===========CALÇÕES DRY-FIT==========
{id:'calcao-dry-1', nome:'Calções Dry-Fit', escudo:'<img src="images/simbCalções.png" style="width:100%;height:100%;object-fit:contain">', liga:'Dry-Fit', ligaCat:'Calções Dry-Fit',
  camisas:[
    {nome:'Dry-Fit Adidas Preta',versao:'Adulto',badge:'Novo',img:'images1/calçaoAdidasPreto.png'},
    {nome:'Dry-Fit Adidas Branca',versao:'Adulto',img:'images1/calçaoAdidasBranco.png'},
    {nome:'Dry-Fit Adidas Cinza',versao:'Adulto',badge:'Novo',img:'images1/calçaoAdidasCinza.png'},
    {nome:'Dry-Fit Nike Beje',versao:'Adulto',img:'images1/calçaoNikeBeje.png'},
    {nome:'Dry-Fit Nike Azul',versao:'Adulto',badge:'Novo',img:'images1/calçaoNikeAzul.png'},
    {nome:'Dry-Fit Nike Branca',versao:'Adulto',img:'images1/calçaoNikeBranca.png'},
  ]},

  // ===== MEIAS ESPORTIVAS =====
{id:'meias-esportivas', nome:'Meias', escudo:'<img src="images/simbMeias.png" style="width:100%;height:100%;object-fit:contain">', liga:'Meias Esportivas', ligaCat:'Meias Esportivas',
  cor:'#F5F5F5',
  camisas:[
    {nome:'Meia Preta Cano Alto', versao:'Adulto', badge:'Novo', img:'images/meiaPreta.jpg'},
    {nome:'Meia Azul Cano Alto', versao:'Adulto', badge:'Novo', img:'images/meiaAzul.png'},
    {nome:'Meia Branca Cano Alto', versao:'Adulto', badge:'Novo', img:'images/meiaBranca.jpg'},
    {nome:'Meia Verde Cano Alto', versao:'Adulto', badge:'Novo', img:'images/meiaVerde.png'},
    {nome:'Meia Amarela Cano Alto', versao:'Adulto', badge:'Novo', img:'images/meiaAmarela.png'},
    {nome:'Meia Rosa Cano Alto', versao:'Adulto', badge:'Novo', img:'images/meiaRosa.png'},
  ]},

  // ===== CONJUNTOS DRY-FIT =====
{id:'conjunto-dry-fit', nome:'Conjuntos Dry-Fit', escudo:'<img src="images/simbConjuntos.png" style="width:100%;height:100%;object-fit:contain">', liga:'Conjuntos Dry-Fit', ligaCat:'Conjuntos Dry-Fit',
  cor:'#111111',
  camisas:[
    {nome:'Conjunto Adidas Preto', temporada:'Camisa + Calção', versao:'Adulto', badge:'Novo', img:'images1/conjAdidasPreto.png'},
    {nome:'Conjunto Adidas Branco', temporada:'Camisa + Calção', versao:'Adulto', img:'images1/conjAdidasBranco.png'},
    {nome:'Conjunto Adidas Cinza', temporada:'Camisa + Calção', versao:'Adulto', img:'images1/conjAdidasCinza.png'},
    {nome:'Conjunto Nike Beje', temporada:'Camisa + Calção', versao:'Adulto', badge:'Novo', img:'images1/conjNikeBeje.png'},
    {nome:'Conjunto Nike Branco', temporada:'Camisa + Calção', versao:'Adulto', img:'images1/conjNikeBranca.png'},
    {nome:'Conjunto Nike Azul', temporada:'Camisa + Calção', versao:'Adulto', img:'images1/conjNikeAzulescuro.png'},
  ]},


  // CAMISAS DE TIMES:

  // =========== BRASILEIRÃO: =============

  {id:'flamengo', nome:'Flamengo', escudo:'<img src="images/escudoFlamengo.png" style="width:100%;height:100%;object-fit:contain">', liga:'Brasileirão', ligaCat:'Brasileirão',
    cor:'#C1121F',
    camisas:[
      {nome:'Camisa I 25/26',temporada:'2025/26',versao:'titular',badge:'Novo',img:'images2/CAMISA FLAMENGO 01 2026.png'},
      {nome:'Camisa I 24/25',temporada:'2024/25',versao:'titular',img:'images2/FLAMENGO CAMISA 01 2025.png'},
      {nome:'Camisa Treino 24/25',temporada:'2024/25',versao:'treino',img:'images2/FLAMENGO CAMISA TREINO 2025.png'},
    ]},
  {id:'corinthians', nome:'Corinthians', escudo:'<img src="images/escudoCorinthians.png" style="width:100%;height:100%;object-fit:contain">', liga:'Brasileirão', ligaCat:'Brasileirão',
    cor:'#2a2a2a',
    camisas:[
      {nome:'Camisa III 25/26',temporada:'2025/26',versao:'Terceiro Uniforme',badge:'Novo',img:'images2/camisaCorinthians3.png'},
      {nome:'Camisa I 25/26',temporada:'2025/26',versao:'Titular',img:'images2/camisaCorinthiansBranca.png'},
    ]},
  {id:'palmeiras', nome:'Palmeiras', escudo:'<img src="images/escudoPalmeiras.png" style="width:100%;height:100%;object-fit:contain">', liga:'Brasileirão', ligaCat:'Brasileirão',
    cor:'#2d6a2d',
    camisas:[
      {nome:'Camisa I 25/26',temporada:'2025/26',versao:'Titular',img:'images2/camisaPalmeirasI.png'},
      {nome:'Camisa II 25/26',temporada:'2025/26',versao:'Reserva',img:'images2/camisaPalmeirasII.png'},
    ]},
  {id:'saopaulofc', nome:'São Paulo', escudo:'<img src="images/escudoSaopaulo.png" style="width:100%;height:100%;object-fit:contain">', liga:'Brasileirão', ligaCat:'Brasileirão',
    cor:'#C1121F',
    camisas:[
      {nome:'Camisa I 25/26',temporada:'2025/26',versao:'Titular',img:'images2/camisaSao1.png'},
      {nome:'Camisa II 25/26',temporada:'2025/26',versao:'Reserva',img:'images2/camisaSao2.png'},
    ]},
    {id:'santos', nome:'Santos', escudo:'<img src="images/simbSantos.png" style="width:100%;height:100%;object-fit:contain">', liga:'Brasileirão', ligaCat:'Brasileirão',
  cor:'#cccccc',
  camisas:[
    {nome:'Camisa I 25/26', temporada:'2025/26', versao:'Titular', img:'images2/camisaSantos1.png'},
    {nome:'Camisa II 25/26', temporada:'2025/26', versao:'Reserva', badge:'Novo', img:'images2/camisaSantos2.png'},
  ]},
    
{id:'vasco', nome:'Vasco da Gama', escudo:'<img src="images/simbVasco.png" style="width:100%;height:100%;object-fit:contain">', liga:'Brasileirão', ligaCat:'Brasileirão',
  cor:'#000000',
  camisas:[
    {nome:'Camisa I 25/26', temporada:'2025/26', versao:'Titular', badge:'Novo', img:'images2/camisaVasco1.png'},
    {nome:'Camisa II 25/26', temporada:'2025/26', versao:'Reserva', img:'images2/camisaVasco2.png'},
  ]},

{id:'cruzeiro', nome:'Cruzeiro', escudo:'<img src="images/simbCruzeiro.png" style="width:100%;height:100%;object-fit:contain">', liga:'Brasileirão', ligaCat:'Brasileirão',
  cor:'#003DA5',
  camisas:[
    {nome:'Camisa I 25/26', temporada:'2025/26', versao:'Titular', badge:'Novo', img:'images2/camisaCruzeiro1.png'},
  ]},

{id:'atleticomineiro', nome:'Atlético Mineiro', escudo:'<img src="images/simbMineiro.png" style="width:100%;height:100%;object-fit:contain">', liga:'Brasileirão', ligaCat:'Brasileirão',
  cor:'000000',
  camisas:[
    {nome:'Camisa I 25/26', temporada:'2025/26', versao:'Titular', img:'images2/camisaMineiro1.png'},
  ]},

{id:'fluminense', nome:'Fluminense', escudo:'<img src="images/simbFluminense.png" style="width:100%;height:100%;object-fit:contain">', liga:'Brasileirão', ligaCat:'Brasileirão',
  cor:'#8B0000',
  camisas:[
    {nome:'Camisa I 25/26', temporada:'2025/26', versao:'Titular', badge:'Novo', img:'images2/camisaFluminense1.png'},
  ]},

  
  // ================ LA LIGA ===============
    {id:'realmadrid', nome:'Real Madrid', escudo:'<img src="images/simbReal.png" style="width:100%;height:100%;object-fit:contain">', liga:'La Liga', ligaCat:'La Liga',
    cor:'#d4af37',
    camisas:[
      {nome:'Camisa I 25/26',temporada:'2024/25',versao:'Titular',badge:'',img:'images2/camisaReal1.png'},
      {nome:'Camisa II 25/26',temporada:'2025/26',versao:'Reserva',img:'images2/camisaReal2.png'},
    ]},
  {id:'barcelona', nome:'Barcelona', escudo:'<img src="images/simbBarça.png" style="width:100%;height:100%;object-fit:contain">', liga:'La Liga', ligaCat:'La Liga',
    cor:'#004D98',
    camisas:[
      {nome:'Camisa I 25/26',temporada:'2025/26',versao:'Titular',badge:'Novo',img:'images2/camisaBarça1.png'},
      {nome:'Camisa II 25/26',temporada:'2025/26',versao:'Reserva',img:'images2/camisaBarça2.png'},
    ]},

    // ============= PREMIER LEAGUE =============
  {id:'manchestercity', nome:'Manchester City', escudo:'<img src="images/simbCity.png" style="width:100%;height:100%;object-fit:contain">', liga:'Premier League', ligaCat:'Premier League',
    cor:'#6CABDD',
    camisas:[
      {nome:'Camisa I 25/26',temporada:'2025/26',versao:'Titular',badge:'',img:'images2/camisaCity1.png'},
      {nome:'Camisa III 25/26',temporada:'2025/26',versao:'Reserva',img:'images2/camisaCity3.png'},
    ]},

    // ================= BUDESLIGA =================
  {id:'bayern', nome:'Bayern de Munique', escudo:'<img src="images/simbBayer.png" style="width:100%;height:100%;object-fit:contain">', liga:'Bundesliga', ligaCat:'Bundesliga',
    cor:'#DC052D',
    camisas:[
      {nome:'Camisa I 25/26',temporada:'2025/26',versao:'Titular',badge:'Novo',img:'images2/camisaBayer1.png'},
    ]},

    // =============== SELEÇÕES ===================
  {id:'brasil', nome:'Brasil', escudo:'<img src="images/simbBrasil.png" style="width:100%;height:100%;object-fit:contain">', liga:'Seleções', ligaCat:'Seleções',
    cor:'#009C3B',
    camisas:[
      {nome:'Camisa I Copa 2026',temporada:'2025/26',versao:'Titular',badge:'Destaque',img:'images2/camisaBrasil1.png'},
      {nome:'Camisa II Copa 2026',temporada:'2025/26',versao:'Reserva', badge:'Destaque',img:'images2/camisaBrasil2.png'},
    ]},
{id:'argentina', nome:'Argentina', escudo:'<img src="images/simbArgentina.png" style="width:100%;height:100%;object-fit:contain">', liga:'Seleções', ligaCat:'Seleções',
  cor:'#74ACDF',
  camisas:[
    {nome:'Camisa I 25/26', temporada:'2025/26', versao:'Titular', badge:'Novo', img:'images2/camisaArgentina1.png'},
  ]},

{id:'portugal', nome:'Portugal', escudo:'<img src="images/simbPortugal.png" style="width:100%;height:100%;object-fit:contain">', liga:'Seleções', ligaCat:'Seleções',
  cor:'#C1121F',
  camisas:[
    {nome:'Camisa I 25/26', temporada:'2025/26', versao:'Titular', badge:'Novo', img:'images2/camisaPortugal1.png'},
  ]},

{id:'italia', nome:'Itália', escudo:'<img src="images/simbItalia.png" style="width:100%;height:100%;object-fit:contain">', liga:'Seleções', ligaCat:'Seleções',
  cor:'#003DA5',
  camisas:[
    {nome:'Camisa I 25/26', temporada:'2025/26', versao:'Titular', img:'images2/camisaItalia1.png'},
  ]},

{id:'espanha', nome:'Espanha', escudo:'<img src="images/simbEspanha.png" style="width:100%;height:100%;object-fit:contain">', liga:'Seleções', ligaCat:'Seleções',
  cor:'#C60B1E',
  camisas:[
    {nome:'Camisa I 25/26', temporada:'2025/26', versao:'Titular', badge:'', img:'images2/camisaEspanha1.png'},
  ]},

// ===== SAUDITÃO =====
{id:'alnassar', nome:'Al Nassr', escudo:'<img src="images/simbNassar.png" style="width:100%;height:100%;object-fit:contain">', liga:'Sauditão', ligaCat:'Sauditão',
  cor:'#F5C400',
  camisas:[
    {nome:'Camisa I 25/26', temporada:'2025/26', versao:'Titular', badge:'Novo', img:'images2/camisaNassar1.png'},
    {nome:'Camisa II 25/26', temporada:'2025/26', versao:'Reserva', img:'images2/camisaNassar2.png'},
  ]},


// ===== FRANCÊS =====
{id:'psg', nome:'Paris Saint-Germain', escudo:'<img src="images/simbPsg.png" style="width:100%;height:100%;object-fit:contain">', liga:'Francês', ligaCat:'Francês',
  cor:'#003DA5',
  camisas:[
    {nome:'Camisa I 25/26', temporada:'2025/26', versao:'Titular', badge:'', img:'images2/camisaPsg1.png'},
  ]},
];

// ===== RENDER =====
function wppLink(msg){
  return `https://wa.me/5586994239722?text=${encodeURIComponent(msg)}`;
}

function produtoCardHTML(c, timeNome){
  const msg = `Olá! Estou vindo pelo site da Nexo, pois tenho interesse na *${c.nome}* do ${timeNome} (${c.temporada} – ${c.versao}). Pode me passar mais informações?`;
  return `
  <div class="produto-card">
    <div class="card-img" onclick="abrirModal('${c.img}','${c.nome}','${timeNome}','${c.temporada}','${c.versao}')">
      <img src="${c.img}" alt="${c.nome}" loading="lazy">
      ${c.badge ? `<span class="card-badge">${c.badge}</span>` : ''}
    </div>
    <div class="card-body">
    <div class="card-club">${timeNome}</div>
    <div class="card-name">${c.nome}</div>
    <div class="card-info">${c.temporada} · ${c.versao}</div>
    <button class="btn-carrinho" onclick="adicionarCarrinho('${c.img}','${c.nome}','${timeNome}','${c.temporada}','${c.versao}')">
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .955-.343 1.087-.835l1.658-6.179A1.125 1.125 0 0017.6 6.75H6.107M7.5 14.25L5.106 5.272M7.5 14.25l-1.5 6m10.5-6l1.5 6"/>
  </svg>
  <span>Adicionar</span>
</button>
  </div>
    </div>
  </div>`;
}

function renderDestaques(){
  const dest = [];
  TIMES.forEach(t => t.camisas.filter(c=>c.badge).forEach(c => dest.push({...c, timeNome: t.nome})));
  // pega até 4 destaques, completa com outros
  TIMES.forEach(t => t.camisas.filter(c=>!c.badge).slice(0,1).forEach(c => {
    if(dest.length < 8) dest.push({...c, timeNome: t.nome});
  }));
  document.getElementById('destaquesGrid').innerHTML = dest.slice(0,8).map(c => produtoCardHTML(c, c.timeNome)).join('');
}

function renderTimes(lista){
  const cats = [...new Set(lista.map(t=>t.ligaCat))];
  let html = '';
  cats.forEach(cat => {
    const times = lista.filter(t=>t.ligaCat===cat);
    html += `<div class="times-cat-title">${cat}</div>
    <div class="times-grid">
    ${times.map(t=>`
      <div class="time-card" onclick="showTime('${t.id}')">
        <div class="escudo">${t.escudo}</div>
        <div class="time-name">${t.nome}</div>
        <div class="time-camisas">${t.camisas.length} modelo${t.camisas.length>1?'s':''}</div>
      </div>`).join('')}
    </div>`;
  });
  document.getElementById('timesContainer').innerHTML = html;
}

// categorias que são times (camisas de futebol)
const CATS_TIMES = ['Brasileirão','Premier League','La Liga','Serie A','Bundesliga','Seleções','Sauditão','Francês'];

// categorias que são fitness/acessórios
const CATS_FITNESS = ['Camisas Dry-Fit','Calções Dry-Fit','Óculos Esportivos','Meias Esportivas','Conjuntos Dry-Fit'];

let abaAtiva = 'times';

function mudarAba(aba) {
  abaAtiva = aba;
  document.getElementById('searchInput').value = '';
  document.querySelectorAll('.catalog-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + aba).classList.add('active');
  filterTimes('');
}

function filterTimes(q) {
  if (!q.trim()) {
    // sem busca — mostra só a aba ativa normalmente
    const cats = abaAtiva === 'times' ? CATS_TIMES : CATS_FITNESS;
    const lista = TIMES.filter(t => cats.includes(t.ligaCat));
    renderTimes(lista);
    return;
  }

  // com busca — procura em TODOS os produtos independente da aba
  const lista = TIMES.filter(t =>
    t.nome.toLowerCase().includes(q.toLowerCase()) ||
    t.ligaCat.toLowerCase().includes(q.toLowerCase()) ||
    t.camisas.some(c =>
      c.nome.toLowerCase().includes(q.toLowerCase()) ||
      c.versao.toLowerCase().includes(q.toLowerCase())
    )
  );

  // se encontrou resultados em outra aba, muda a aba automaticamente
if (lista.length > 0) {
  const temFitness = lista.some(t => CATS_FITNESS.includes(t.ligaCat));
  const temTimes   = lista.some(t => CATS_TIMES.includes(t.ligaCat));

  if (temFitness && !temTimes) {
    abaAtiva = 'fitness';
    document.querySelectorAll('.catalog-tab').forEach(t => t.classList.remove('active'));
    const tabFitness = document.getElementById('tab-fitness');
    tabFitness.classList.add('active');
    tabFitness.style.animation = 'none';
    requestAnimationFrame(() => { tabFitness.style.animation = ''; });

  } else if (temTimes && !temFitness) {
    abaAtiva = 'times';
    document.querySelectorAll('.catalog-tab').forEach(t => t.classList.remove('active'));
    const tabTimes = document.getElementById('tab-times');
    tabTimes.classList.add('active');
    tabTimes.style.animation = 'none';
    requestAnimationFrame(() => { tabTimes.style.animation = ''; });
  }
}

  renderTimes(lista);
}

let currentTime = null;
let filtroAtual = 'todos';

function showTime(id){
  currentTime = TIMES.find(t=>t.id===id);
  if(!currentTime) return;
  document.getElementById('timeBannerBg').innerHTML = currentTime.escudo;
  document.getElementById('timeEscudoBig').innerHTML = currentTime.escudo;
  document.getElementById('timeNome').textContent = currentTime.nome;
  document.getElementById('timeLiga').textContent = currentTime.liga;
  filtroAtual = 'todos';
  document.querySelectorAll('.filtro-btn').forEach(b=>b.classList.remove('active'));
  document.querySelector('.filtro-btn').classList.add('active');
  renderTimeProdutos('todos');
  showPage('time');
}

function renderTimeProdutos(filtro){
  let camisas = currentTime.camisas;
  if(filtro !== 'todos') camisas = camisas.filter(c => c.versao.toLowerCase().includes(filtro));
  document.getElementById('timeProdutos').innerHTML = camisas.map(c => produtoCardHTML(c, currentTime.nome)).join('') || '<p style="color:var(--text-muted)">Nenhuma camisa encontrada para este filtro.</p>';
}

function filtrarCamisas(filtro, btn){
  filtroAtual = filtro;
  document.querySelectorAll('.filtro-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderTimeProdutos(filtro);
}

function enviarWhatsApp() {
  const nome = document.getElementById('form-nome').value.trim() || 'Cliente';
  const wpp  = document.getElementById('form-wpp').value.trim();
  const msg  = document.getElementById('form-msg').value.trim();

  if (!msg) {
    alert('Por favor, escreva uma mensagem antes de enviar.');
    return;
  }

  const text = `Olá! Me chamo *${nome}*${wpp ? ', meu WhatsApp é ' + wpp : ''}.\n\n${msg}`;
  window.open(`https://wa.me/5586994239722?text=${encodeURIComponent(text)}`, '_blank');
}

// ===== NAVIGATION =====
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});

  // reseta aba do catálogo ao abrir
  if(name === 'times') {
    abaAtiva = 'times';
    document.querySelectorAll('.catalog-tab').forEach(t => t.classList.remove('active'));
    document.getElementById('tab-times').classList.add('active');
    filterTimes('');
  }
}

function toggleMenu(){
  document.getElementById('hamburger').classList.toggle('active');
  document.getElementById('mobileMenu').classList.toggle('open');
}

// ===== SCROLL =====
window.addEventListener('scroll',()=>{
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 60);
  document.getElementById('backTop').classList.toggle('show', window.scrollY > 300);
});

// ===== INIT =====
window.addEventListener('DOMContentLoaded',()=>{
  renderDestaques();
  renderTimes(TIMES);
  setTimeout(()=>{
    document.getElementById('loader').classList.add('hide');
  }, 1200);
});

function abrirModal(img, nome, time, temporada, versao) {
  const modal = document.getElementById('modal-img');
  document.getElementById('modal-foto').src = img;
  document.getElementById('modal-nome').textContent = nome;
  document.getElementById('modal-info').textContent = `${time} · ${temporada} · ${versao}`;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function fecharModal() {
  document.getElementById('modal-img').classList.remove('open');
  document.body.style.overflow = '';
}

// ===== CARRINHO =====
let carrinho = [];

function toggleCarrinho() {
  document.getElementById('carrinho-wrap').classList.toggle('open');
  document.body.style.overflow = document.getElementById('carrinho-wrap').classList.contains('open') ? 'hidden' : '';
}

function fecharCarrinho(event) {
  if (event.target === document.getElementById('carrinho-wrap')) {
    toggleCarrinho();
  }
}

function adicionarCarrinho(img, nome, timeNome, temporada, versao) {
  const id = nome + timeNome + versao;
  if (carrinho.find(p => p.id === id)) {
    alert('Este produto já está no carrinho!');
    return;
  }
  carrinho.push({ id, img, nome, timeNome, temporada, versao });
  atualizarCarrinho();
  // abre o carrinho automaticamente
  document.getElementById('carrinho-wrap').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function removerCarrinho(id) {
  carrinho = carrinho.filter(p => p.id !== id);
  atualizarCarrinho();
}

function limparCarrinho() {
  if (!confirm('Deseja limpar o carrinho?')) return;
  carrinho = [];
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista      = document.getElementById('carrinho-lista');
  const vazio      = document.getElementById('carrinho-vazio');
  const footer     = document.getElementById('carrinho-footer');
  const badge      = document.getElementById('carrinhoBadge');
  const headerBadge= document.getElementById('carrinhoHeaderBadge');
  const totalNum   = document.getElementById('carrinho-total-num');

  badge.textContent = carrinho.length;
  badge.style.display = carrinho.length > 0 ? 'flex' : 'none';
  headerBadge.textContent = carrinho.length;
  totalNum.textContent = `${carrinho.length} produto${carrinho.length !== 1 ? 's' : ''}`;

  if (carrinho.length === 0) {
    lista.innerHTML = `
      <div class="carrinho-vazio" id="carrinho-vazio">
        <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .955-.343 1.087-.835l1.658-6.179A1.125 1.125 0 0017.6 6.75H6.107M7.5 14.25L5.106 5.272M7.5 14.25l-1.5 6m10.5-6l1.5 6"/>
        </svg>
        <p>Seu carrinho está vazio</p>
        <span>Adicione produtos para continuar</span>
      </div>`;
    footer.style.display = 'none';
    return;
  }

  footer.style.display = 'flex';

  lista.innerHTML = carrinho.map((p, i) => `
    <div class="carrinho-item">
      <img class="carrinho-item-img" src="${p.img}" alt="${p.nome}">
      <div class="carrinho-item-info">
        <div class="carrinho-item-time">${p.timeNome}</div>
        <div class="carrinho-item-nome">${p.nome}</div>
        <div class="carrinho-item-sub">${p.temporada} · ${p.versao}</div>
      </div>
      <button class="carrinho-item-remover" onclick="removerCarrinho('${p.id}')" title="Remover">✕</button>
    </div>
  `).join('');
}
function enviarCarrinho() {
  if (carrinho.length === 0) return;
  const itens = carrinho.map((p, i) =>
    `*${i+1}. ${p.nome}*\nTime: ${p.timeNome} | ${p.temporada} | ${p.versao}`
  ).join('\n\n');
  const msg = `Olá! Tenho interesse nos seguintes produtos da Nexo Sports:\n\n${itens}\n\nGostaria de saber a disponibilidade e finalizar o pedido!`;
  window.open(`https://wa.me/5586994239722?text=${encodeURIComponent(msg)}`, '_blank');
}

// fechar com ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('carrinho-wrap').classList.remove('open');
    document.body.style.overflow = '';
  }
});