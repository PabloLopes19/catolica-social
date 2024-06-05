# Católica Social media

### Frontend

Nosso projeto para esse PAC se resume em dois repositórios. O primeiro é o do _Frontend_, onde escolhemos desenvolvê-lo com NextJs, um framework _React_ que nos permite criar aplicações web extremamente performáticas e de forma ágil.

Para rodar o aplicativo, basta clonar o [repositório no Github](https://github.com/PabloLopes19/catolica-social) e rodar os seguintes comandos no terminal.

Antes de tudo, é necessário ter algumas ferramentas instaladas.

- [Git Bash](https://www.git-scm.com/downloads) (Para clonar o projeto)
- [NodeJs](https://nodejs.org/en/download/package-manager) (Para baixar as dependências e rodar o projeto)
- [Yarn (Opcional)](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) (Instalador de pacotes assim como o node, mas foi de nossa preferência durante o desenvolvimento do projeto.)

Com essas ferramentas instaladas podemos clonar o projeto e rodar os comandos que serão necessários para rodar o mesmo.

Com o terminal aberto no diretório do projeto, rode um desses comandos para baixar as dependências do projeto.

```
npm i

// ou

yarn
```

Após isso, uma pasta `node_modules` deve ter sido criada na pasta do projeto. E com isso você estará pronto para rodar o projeto.

Para isso, rode o comando

```
npm run dev

// ou

yarn dev
```

Com isso o projeto deve ser começar a rodar na porta `3000` e pode ser acessado pelo browser na url `http://localhost:3000/`, nessa url você deve poder visualizar no projeto. Segue abaixo a lista de tecnologias usadas no nosso projeto:

#### Tecnologias usadas (Front)

- [TypeScript](https://www.typescriptlang.org/) (Nos permite usar uma linguagem semelhante ao JavaScript mas com forte tipagem e trazendo mais produtividade e confiabilidade)
- [Tailwind CSS](https://tailwindcss.com/) (Biblioteca de estilização)
- [RadixUI](https://www.radix-ui.com/) (Disponibiza componentes não estilizados que são utilizados na aplicação)
- [Axios](https://axios-http.com/ptbr/docs/intro) (Serviço que nos possibilita fazer chamadas HTTP de maneira mais fácil)
- [Phosphor Icons](https://axios-http.com/ptbr/docs/intro) (Pacote de ícones)

### Backend

O nosso _backend_ foi criado com [NodeJS](https://nodejs.org/en/download/package-manager), para mantermos o padrão em todo o projeto utilizando a mesma linguagem em ambas camadas da aplicação. Escolhemos como banco o [Firebase Firestore](https://firebase.google.com/?hl=pt-br), por conta da sua fácil configuração e manutenção, e principalmente por ser gratuito e performático.

Para rodar nosso serviço _backend_, você precisa clonar ele no [repositório do Github](https://github.com/PabloLopes19/catolica-social-api), e rodar os seguintes comandos para que ele rode na sua máquina.

Presumindo que você [instalou as ferramentas para o _Frontend_](#frontend), com o repositório baixado, rode os seguintes comandos na diretório do projeto:

```
npm i

//ou

yarn
```

E com a pasta `node_modules` adicionada ao projeto rode o comando `npm run dev` ou `yarn dev` para rodar a API.

Para testar API você pode utilizar uma ferramenta como o [Postman](https://www.postman.com/downloads/) ou o [Insomnia](https://insomnia.rest/download) para testar os endpoints. O projeto deve estar rodando na porta `8080`, então adicione as seguintes rotas e selecione o método correto de chamada HTTP para fazer as chamadas

- Criar publicação [POST] - `/:slug/post/create ` Obs.: O ":slug" você deve substituir pelo slug do usuário. `Ex.: PabloLopes19`
- Criar usuário [POST] - `/user/create`
- Carregar usuário [GET] - `/user/:slug`

### Firebase

Para você conseguir conectar o serviço ao Firebase você precisará de um arquivo de configuração que não é mandado ao repositório do projeto. Para isso é necessário entrar em contato com o aluno [Pablo Lopes](pabloelopes19@gmail.com) para que ele possa disponibilizar esse arquivo a comunicação entre banco e serviço seja feita.

#### Tecnologias usadas (Back)

- [TypeScript](https://www.typescriptlang.org/)
- [Firebase](https://firebase.google.com/?hl=pt-br)
- [Express](https://expressjs.com/pt-br/) (Framework que oferece um conjunto de recursos que facilitam o desenvolvimento de aplicações.)
- [Nodemon](https://www.npmjs.com/package/nodemon) (Lib que possibilita que mudanças no código sejam aplicadas sem a necessidade de reiniciar a aplicação.)

Att.:
Lucas Gadonski e Pablo Lopes
