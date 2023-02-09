import { createServer, Factory, Model, Response } from "miragejs";
import { faker } from "@faker-js/faker";


type User ={
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({

    //qual tipo de dado
    models: {
      // tabela User:      Partial, pode nao conter todos os campos
      user: Model.extend<Partial<User>>({})
    },

    //formas de conseguir gerar dados em massa
    factories: {
      //nome do model que eu quero criar minha factory
      user: Factory.extend({
        //i é o indice
        name() {
          //retorno os dados que eu quero. Se eu retornar um nome estatico, todos os usuarios vao ter o mesmo nome
          return faker.name.fullName();
        },
        email() {
          //gerar um email aleatorio
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          // criar uma data recente, nos ultimos 10 dias, a partir da data atual
          return faker.date.recent(10, new Date())
        },
      })
    },

    //dados fictícios
    seeds(server) {
      // passar qual nome do factori(dado) quero criar e qual quantidade
      server.createList("user", 200)
    },

    //quais rotas vou ter:
    routes() {
      //qual caminho minha aplicacao precisa chamar pra acessar estas rotas:
      this.namespace = "api"; //localhost:3000/api/users
      this.timing = 750; //demora 750milisegundos pra chamada acontecer


      this.get("/users", function(schema, request) {
        //page=qual pagina quero comecar a exibir, per_page, qtos por pagina
        const { page=1, per_page=10 } = request.queryParams;

        const total = schema.all("user").length; //aqui obtenho o total de registros

        
        const pageStart = (Number(page) -1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);
        //ex.: page=3.  pageStart = 3-1=2.   pageEnd = 2*10=20

        const users = this.serialize(schema.all("user"))
        .users.slice(pageStart, pageEnd)

        return new Response(200, { "x-total-count": String(total) }, { users });
      });

      this.post("/users");

      //aqui eu retorno o namespace pra vazio, porque nao existe uma pasta api no next
      this.namespace = "";
      this.passthrough();
    }
  })

  return server;
}