# Semana Detox

Site informativo e landing page para a mentoria "Semana Detox" da Kim Zucatelli.

Este repositório contém uma página estática simples (HTML, CSS e JavaScript) com seções como: Hero, Sobre, Benefícios, Depoimentos (carrossel), Garantia e CTA.

## Estrutura do projeto

- `index.html` — página principal.
- `styles.css` — estilos do site.
- `scripts.js` — lógica do carrossel de depoimentos e pequenos comportamentos.
- `Assets/` — imagens e recursos (logotipos, fotos, background, garantia, etc.).

Diretório principal: `Semana-Detox/` contém a versão que deve ser aberta no navegador.

## Como visualizar localmente

1. Abra a pasta `Semana-Detox` no seu editor (VS Code, por exemplo).
2. Abra `index.html` no navegador (duplo clique) ou use uma extensão como Live Server (recomendado):

```bash
# se tiver Live Server no VS Code, clique em "Go Live" ou use o atalho
```

Observação: o site é estático — não há backend. Todas as imagens estão em `Assets/images`.

## Desenvolvimento

- Estilos: `styles.css`. Use o arquivo para ajustar responsividade, fontes e cores.
- Scripts: `scripts.js` contém a função `showSlides` que inicializa o carrossel de depoimentos. Se for mover o `<script>` para o header, garanta que o código espere o `DOMContentLoaded`.

## Fontes

As fontes são carregadas via Google Fonts no `styles.css` (Lato para textos e Merriweather para títulos).

## Tarefas comuns

- Atualizar imagens: coloque novos arquivos em `Assets/images` e atualize as tags `<img>` em `index.html`.
- Centralizar elementos: ajuste as regras de `.container`, `.btn` e `.container-kim` no CSS.
- Carrossel: `scripts.js` inicializa o carrossel; para auto-play adicione um `setInterval` chamando `plusSlides(1)`.

## Licença
Direitos reservados à Zucatelli & Santos LTDA
