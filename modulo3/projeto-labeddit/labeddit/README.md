📄 LabEddit : Social bookmarks baseado no reedit

🎯 Objetivo do projeto

Último projeto individual da trilha front-end do bootcamp de desenvolvimento web fullstack da Labenu. 

Seu intuito é rever todos os conteúdos do curso de maneira prática e fazer uma aplicação completa. É importante destacar que esse é uma aplicação do tipo Mobile First.

🔹 Os requisitos do projeto são:

Login

Ao efetuar o login, o usuário deve ser redirecionado para a página de feed

Também devera ter um botão que leva a página de cadastro

O token deve ser salvo no LocalStorage

Cadastro

Após cadastrar, o usuário deverá ser redirecionado para a página de feed

O token deve ser salvo no LocalStorage
Feed

Deve mostrar todos os posts

Deve permitir a criação de um novo post

Só pode ser acessada por usuários logados

Quando o usuário clicar em um post, ele deverá ser redirecionado para a página do respectivo post.

Quando um usuário clicar em votar (positiva ou negativamente), uma requisição deverá ser feita indicando a "direção" do voto.

Post

Mostra as informações do post que foi clicado

Deve permitir a criação de comentários

Só pode ser acessada por usuários logados

Deve mostrar todos os comentários do post

Cada comentário também deverá ter a lógica dos votos

✔️ Funcionalidades
Navegação entre as páginas utilizando o react-router-dom

Autenticação e Proteção das páginas privadas

Usuários não logados são redirecionados para a página de login

Pessoas autenticadas (logadas) conseguem acessar as páginas de feed e post

Loadings nas telas que fazem as requisições

Formulários com validações

A lógica dos votos nos post e comentários

Realizar a votação ou a criação de um novo post ou comentário a lista com todos são atualizadas

Paginação no feed e nos comentários

Botão de logout

Responsividade

📚 Bibliotecas utilizadas
styled-components
axios
react-router-dom

🔗 Link Surge

amusing-finger.surge.sh

Login

<img width="188" alt="image" src="https://user-images.githubusercontent.com/93896739/181771452-05b49662-7cb3-45ed-84d8-77f015fbc6d9.png">

Cadastrar

<img width="186" alt="image" src="https://user-images.githubusercontent.com/93896739/181771655-7a4e9d62-52e0-4e7f-9366-0f69e32985ae.png">

Feed

<img width="187" alt="image" src="https://user-images.githubusercontent.com/93896739/181771764-5a1ae76e-0d15-44d2-a8be-00ee21657f26.png">

Pagina do Post

<img width="188" alt="image" src="https://user-images.githubusercontent.com/93896739/181772048-78453fbf-01a4-44dc-ac42-de85f05b6ddb.png">


