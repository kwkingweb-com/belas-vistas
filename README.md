# Chalés Bela Vista — Site HTML Premium (versão com páginas individuais)

**Local:** Bueno Brandão, Minas Gerais  
**Contato para reservas:** (35) 99954-1898  
**Tecnologias:** HTML5 + CSS3 + JavaScript puro. Não utiliza PHP, banco de dados ou frameworks de interface.

## Como abrir
1. Descompacte `chales-bela-vista-premium.zip`.
2. Abra a pasta `chales-bela-vista-premium` com o VS Code.
3. Use **Live Server** em `index.html`. Também é possível abrir `index.html` diretamente no navegador.
4. No site inicial, clique em **Acomodações**. Cada opção leva a uma página individual, com botão **Consultar datas**.

## Arquivos

```
chales-bela-vista-premium/
├── index.html                      # Página inicial e catálogo de acomodações
├── acomodacoes/
│   ├── vista-montanhas.html        # Duplo com Vista das Montanhas
│   ├── duplo-terraco.html          # Duplo com Terraço
│   ├── duplo-deluxe.html           # Duplo Deluxe
│   ├── duplo-varanda.html          # Duplo com Varanda
│   └── familia.html                # Família, opção antiga: confirmar
├── css/
│   ├── style.css                   # Estilos da página inicial
│   └── acomodacao.css              # Estilos das páginas individuais
├── js/
│   ├── script.js                   # Página inicial, filtros, galeria e formulário
│   └── acomodacao.js               # Formulários e galeria dos chalés
├── assets/favicon.svg
└── dados-acomodacoes.json          # Cadastro descritivo para futura versão PHP
```

## Novidades desta versão
- **Cinco páginas individuais de acomodação**, com galeria, descrições, informações verificadas, comodidades e consulta direta pelo WhatsApp.
- **Quatro categorias atuais verificadas nas listagens**: Duplo com Vista das Montanhas, Duplo com Terraço, Duplo Deluxe e Duplo com Varanda.
- **Opção para famílias** apresentada em separado e identificada como referência de anúncio mais antigo. Sua existência e a capacidade atual devem ser confirmadas.
- Filtro de acomodações (todas, para duas pessoas, com sofá-cama e família/grupo).
- Formulário de reserva próprio em cada acomodação, com nome, telefone, check-in, check-out, adultos, crianças e observações.
- Consulta principal com campo para a **acomodação desejada**.
- Galerias com ampliação, navegação por setas, menu para celulares, animações e SEO.
- Data de saída obrigatoriamente posterior à entrada.

## Importante: capacidade, quartos e disponibilidade
Listagens de plataformas podem variar. O Booking indicou acomodação de **até dois adultos** nas quatro categorias atuais; Terraço e Deluxe também aparecem com sofá-cama, mas **não afirmamos que podem receber mais adultos sem confirmação**. Uma fonte histórica menciona chalés familiares para até seis pessoas; trate essa informação como não confirmada até conversar com a propriedade.

Não existem preços fixos, calendário de disponibilidade real, pagamento, painel ou reserva confirmada. O WhatsApp recebe uma **solicitação sujeita à confirmação**.

## Fotografias
As fotos usadas são **fotos identificadas da propriedade**, provenientes do cadastro de turismo de Bueno Brandão, Tripadvisor e anúncios de acomodação. As imagens seguem sendo carregadas dos respectivos servidores em HTTPS nesta versão HTML de demonstração — **não estão salvas localmente na pasta img e precisam de internet**. Não foram usadas imagens de IA ou de bancos de imagem. Antes de publicar, obtenha autorização para uso e cópias em alta resolução junto aos titulares; a hospedagem definitiva pode trabalhar com arquivos locais otimizados.

As páginas de acomodação usam uma foto vinculada a cada categoria da lista de hospedagem. A galeria adicional inclui fotografias reais da **propriedade em geral** e não afirma que todas são do quarto selecionado.

## Fontes consultadas
- Portal de Turismo de Bueno Brandão: https://buenobrandao.com.br/hospedagem/chales/chales-bela-vista
- Booking.com: https://www.booking.com/hotel/br/chales-bela-vista-bueno-brandao.pt-br.html
- Tripadvisor: https://www.tripadvisor.com.br/Hotel_Review-g2572212-d4512397-Reviews-Chales_Bela_Vista-Bueno_Brandao_State_of_Minas_Gerais.html
- Mais Pousadas (referência histórica de unidades familiares): https://www.maispousadas.com.br/pousadas-em-bueno-brandao-mg/pousada-chales-bela-vista.html

## Testes e limites
Os arquivos locais, HTML, links internos, identificadores e sintaxe dos scripts e do CSS foram verificados. Os quatro endereços de imagens de categorias responderam com imagens válidas no momento da pesquisa. A execução visual automatizada nesta sessão foi bloqueada pelo ambiente de testes do navegador, portanto **não declaramos que todas as interações foram verificadas em dispositivos reais**.

Recomenda-se abrir no Chrome pelo Live Server e testar o envio WhatsApp em um dispositivo conectado à internet antes de apresentar ao cliente.

## Evolução para PHP depois da aprovação
Este projeto está organizado para reutilizar os templates como páginas PHP e integrar painel de fotos, preços, reservas, disponibilidade real, cadastro de acomodações e CRM sem refazer todo o design.

## Ajuste de layout dos chalés

Na página inicial, os cinco cartões de acomodação estão em lista horizontal, com foto à esquerda e descrição, características e ações à direita, também em celulares. As páginas individuais e os fluxos de consulta foram preservados.
