let carros = [];
let categoriaAtiva = 'todos';

document.addEventListener('DOMContentLoaded', () => {
  carregarCarros();
  iniciarNavMobile();
  iniciarFiltros();
});

async function carregarCarros() {
  try {
    const resposta = await fetch('data/carros.json');
    carros = await resposta.json();
    renderizarCarros(carros);
  } catch (erro) {
    console.error('Erro ao carregar carros.json:', erro);
  }
}

function renderizarCarros(lista) {
  const grade = document.getElementById('grade-carros');
  const semResultados = document.getElementById('sem-resultados');
  const favoritos = lerFavoritos();

  grade.innerHTML = '';

  if (lista.length === 0) {
    semResultados.hidden = false;
    return;
  }

  semResultados.hidden = true;

  lista.forEach(carro => {
    const isFavorito = favoritos.includes(carro.id);
    const cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.setAttribute('role', 'listitem');
    cartao.dataset.categoria = carro.categoria;
    cartao.dataset.id = carro.id;

    cartao.innerHTML = `
      <img
        class="cartao__imagem"
        src="${carro.imagem}"
        alt="${carro.nome} ${carro.ano}"
        onerror="this.src='https://placehold.co/400x220/0F3460/fff?text=${encodeURIComponent(carro.nome)}'"
      />
      <div class="cartao__corpo">
        <span class="cartao__categoria">${carro.categoria}</span>
        <h3 class="cartao__nome">${carro.nome}</h3>
        <p class="cartao__marca">${carro.marca} · ${carro.ano}</p>
        <p class="cartao__preco">${formatarPreco(carro.preco)}</p>
      </div>
      <div class="cartao__rodape">
        <span class="cartao__ano">${carro.descricao}</span>
        <button
          class="btn-favoritar ${isFavorito ? 'favoritado' : ''}"
          aria-label="${isFavorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}"
          data-id="${carro.id}"
        >${isFavorito ? '❤️' : '🤍'}</button>
      </div>
    `;

    cartao.querySelector('.btn-favoritar').addEventListener('click', toggleFavorito);
    grade.appendChild(cartao);
  });
}

function iniciarFiltros() {
  const botoes = document.querySelectorAll('.filtro');

  botoes.forEach(btn => {
    btn.addEventListener('click', () => {
      botoes.forEach(b => {
        b.classList.remove('ativo');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('ativo');
      btn.setAttribute('aria-pressed', 'true');

      categoriaAtiva = btn.dataset.categoria;
      filtrar(categoriaAtiva);
    });
  });
}

function filtrar(categoria) {
  if (categoria === 'todos') {
    renderizarCarros(carros);
  } else if (categoria === 'favoritos') {
    const favs = lerFavoritos();
    renderizarCarros(carros.filter(c => favs.includes(c.id)));
  } else {
    renderizarCarros(carros.filter(c => c.categoria === categoria));
  }
}

function toggleFavorito(evento) {
  const btn = evento.currentTarget;
  const id = Number(btn.dataset.id);
  let favs = lerFavoritos();

  if (favs.includes(id)) {
    favs = favs.filter(f => f !== id);
    btn.textContent = '🤍';
    btn.classList.remove('favoritado');
    btn.setAttribute('aria-label', 'Adicionar aos favoritos');
  } else {
    favs.push(id);
    btn.textContent = '❤️';
    btn.classList.add('favoritado');
    btn.setAttribute('aria-label', 'Remover dos favoritos');
  }

  salvarFavoritos(favs);

  if (categoriaAtiva === 'favoritos') {
    filtrar('favoritos');
  }
}

function lerFavoritos() {
  return JSON.parse(localStorage.getItem('favoritos') || '[]');
}

function salvarFavoritos(lista) {
  localStorage.setItem('favoritos', JSON.stringify(lista));
}

function iniciarNavMobile() {
  const toggle = document.querySelector('.nav__toggle');
  const links  = document.querySelector('.nav__links');

  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const aberto = links.classList.toggle('aberto');
    toggle.setAttribute('aria-expanded', aberto);
  });

  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('aberto');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
}
