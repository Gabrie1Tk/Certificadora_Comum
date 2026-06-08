# Oficina do Código — Catálogo Automotivo Interativo

> Recurso Educacional Aberto (REA) de Programação Web Front-End desenvolvido na
> Universidade Tecnológica Federal do Paraná (UTFPR) — Campus Cornélio Procópio.

[![GitHub Pages](https://img.shields.io/badge/demo-online-brightgreen?style=flat-square)](https://gabrie1tk.github.io/Certificadora_Comum/)
[![Licença](https://img.shields.io/badge/licença-MIT-blue?style=flat-square)](LICENSE)
[![Stack](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JS-orange?style=flat-square)](#tecnologias)

---

## Sobre o projeto

O **Oficina do Código** ensina os fundamentos do desenvolvimento web front-end de forma prática e lúdica construindo, passo a passo, um catálogo interativo de carros.

O projeto entrega duas coisas em paralelo:

- **Um site funcional** o próprio catálogo de carros, construído aula a aula como exemplo concreto.
- **Uma trilha de videoaulas e exercícios** que acompanha o aluno desde a estruturação do HTML até a persistência de dados com `localStorage`.

---

## Tecnologias utilizadas

| Tecnologia | Finalidade |
|---|---|
| HTML5 semântico | Estrutura e acessibilidade das páginas |
| CSS3 + Flexbox/Grid | Estilização e layout responsivo |
| Media Queries | Adaptação para dispositivos móveis |
| JavaScript ES6+ | Filtros, eventos e manipulação do DOM |
| localStorage API | Persistência de favoritos no navegador |
| GitHub Pages | Hospedagem estática gratuita |

---

## Estrutura de pastas

```
Certificadora_Comum/
├── index.html
├── README.md
├── CONTRIBUTING.md
│
├── css/
│   └── style.css
│
├── js/
│   └── main.js
│
├── data/
│   └── carros.json
│
├── assets/
│   ├── imgs/
│   ├── Aula 1 - SlideHtml.pdf
│   ├── Aula 2 - SlideCss.pdf
│   ├── Aula 3 - SlidesJS.pdf
│   └── Aula 4 - SlidesLocalStorage.pdf
│
└── exercicios/
    ├── aula-01-html/
    │   └── enunciado.html
    ├── aula-02-css/
    │   └── enunciado.html
    ├── aula-03-js/
    │   └── enunciado.html
    └── aula-04-localstorage/
        └── enunciado.html
```

---

## Schema dos dados (`data/carros.json`)

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | Number | Identificador único do veículo |
| `nome` | String | Nome/modelo do veículo |
| `marca` | String | Fabricante do veículo |
| `categoria` | String | `sedan` · `suv` · `hatch` · `esportivo` |
| `ano` | Number | Ano do modelo |
| `preco` | Number | Valor em reais sem formatação |
| `imagem` | String | Caminho relativo da imagem |
| `descricao` | String | Especificações técnicas resumidas |

```json
{
  "id": 1,
  "nome": "Civic",
  "marca": "Honda",
  "categoria": "sedan",
  "ano": 2023,
  "preco": 149900,
  "imagem": "assets/imgs/civic.jpg",
  "descricao": "Motor 1.5 turbo, câmbio CVT, 173 cv"
}
```


## Trilha de aprendizado

| Módulo | Tema | Videoaula | Exercícios |
|---|---|---|---|
| Aula 1 | HTML e Semântica | [Assistir](https://youtu.be/AfQioOnekYE) | [Ver exercícios](exercicios/aula-01-html/enunciado.html) |
| Aula 2 | CSS e Layout | [Assistir](https://youtu.be/h7RREJRGDv0) | [Ver exercícios](exercicios/aula-02-css/enunciado.html) |
| Aula 3 | JavaScript e DOM | [Assistir](https://youtu.be/2o-5z9Ykgm4) | [Ver exercícios](exercicios/aula-03-js/enunciado.html) |
| Aula 4 | localStorage | [Assistir](https://youtu.be/ffDIVp9jocE) | [Ver exercícios](exercicios/aula-04-localstorage/enunciado.html) |

---

## Funcionalidades do catálogo

- Listagem de 8 veículos com cartões visuais
- Filtro por categoria em tempo real (sedã, SUV, hatch, esportivo)
- Sistema de favoritos com persistência via `localStorage`
- Modal de vídeo ativado por thumbnail clicável
- Download dos slides de cada aula em PDF
- Layout responsivo para desktop, tablet e mobile
- Navegação suave entre seções

---

## Equipe

| Membro | Função | GitHub | LinkedIn |
|---|---|---|---|
| Gabriel Takao Ito da Rocha | HTML, Semântica e Documentação | [@Gabrie1Tk](https://github.com/Gabrie1Tk) | [LinkedIn](https://www.linkedin.com/in/gabrieltakaoito) |
| Luiz Gustavo Garbelini | Material Didático e Testes | [@LuizGustavo2105](https://github.com/LuizGustavo2105) | [LinkedIn](https://www.linkedin.com/in/luiz-gustavo-garbelini-ramos-8a9784318/) |
| Paulo Felipe Zanatta | JavaScript, DOM e Arquitetura | [@paulozanatta](https://github.com/paulozanatta) | [LinkedIn](https://www.linkedin.com/in/paulo-felipe-zanatta-dos-santos-90ab89283/) |

---

## Metodologia

Projeto desenvolvido com **Scrum + Kanban** em sprints.
Gestão no [Trello](https://trello.com/b/TFdywSYa/oficina-do-codigo-certificadora-de-competencia-comum).

**Padrões de commit:**

```
feat:     nova funcionalidade
fix:      correção de bug
docs:     documentação
style:    estilo visual (sem lógica)
refactor: refatoração de código
```

---

<p align="center">Feito com dedicação na UTFPR — Campus Cornélio Procópio · 2025</p>