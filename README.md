Este projeto é uma aplicação web para controle de usuários, desenvolvida com React.js, Prisma e MongoDB. A aplicação permite realizar o CRUD completo (Cadastro, Visualização, Edição e Exclusão) de usuários, proporcionando uma interface amigável e funcionalidades de gerenciamento de usuários.

Tecnologias Utilizadas
React.js: Biblioteca JavaScript para construção da interface do usuário, oferecendo uma experiência dinâmica e interativa.
Prisma: ORM (Object-Relational Mapping) que facilita a interação com o banco de dados, simplificando consultas e operações CRUD.
MongoDB: Banco de dados NoSQL, que armazena as informações dos usuários de maneira flexível e escalável.
Funcionalidades
A aplicação oferece um conjunto completo de funcionalidades para o gerenciamento de usuários, incluindo:

Cadastro de Usuários: Crie novos usuários preenchendo um formulário com as informações necessárias.
Visualização de Usuários: Exibe a lista de usuários cadastrados, mostrando detalhes como nome, e-mail e outras informações configuradas no banco de dados.
Edição de Usuários: Permite editar as informações de usuários já cadastrados.
Exclusão de Usuários: Remove usuários do banco de dados de maneira segura, garantindo um controle completo sobre os dados.
Estrutura do Projeto
front-end/: Contém o código do front-end desenvolvido em React.js, responsável por renderizar a interface do usuário e interagir com a API do back-end.
back-end/: Inclui a lógica de back-end construída com Node.js, Prisma e MongoDB, fornecendo as APIs RESTful para as operações CRUD de usuários.
Pré-requisitos
Para rodar este projeto, você precisa ter o seguinte instalado:

Node.js e npm
MongoDB
Git


Instalação e Execução
Clone o repositório:
git clone https://github.com/Fsp30/Cadastro-de-usuarios-com-react-e-prisma.git
cd Cadastro-de-usuarios-com-react-e-prisma


Instale as dependências:

Front-end:
cd front-end
npm install

Back-end:
cd ../back-end
npm install


Configuração do Banco de Dados:

Certifique-se de que o MongoDB está em execução em sua máquina local.
Configure a conexão no Prisma para o MongoDB em back-end/.env, fornecendo a URL de conexão com o banco.

Execute o projeto:

Inicie o back-end:
cd back-end
npm start


Inicie o front-end:
cd ../front-end
npm start


Acesse a aplicação:

A aplicação estará acessível em http://localhost:3000.


Estrutura de Dados do Usuário
O usuário contém os seguintes campos:

Nome: Nome completo do usuário
E-mail: Endereço de e-mail único
Telefone: Número de contato
Endereço: Localização do usuário



Contribuição
Sinta-se à vontade para contribuir com este projeto. Abra uma issue para sugestões ou pull requests para melhorias.




