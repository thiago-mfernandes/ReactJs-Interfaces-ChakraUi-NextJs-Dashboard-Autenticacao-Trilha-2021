import { createServer, Model } from "miragejs";


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

    //quais rotas vou ter:
    routes() {
      //qual caminho minha aplicacao precisa chamar pra acessar estas rotas:
      this.namespace = "api"; //localhost:3000/api/users
      this.timing = 750; //demora 750milisegundos pra chamada acontecer


      this.get("/users");
      this.post("/users");

      //aqui eu retorno o namespace pra vazio, porque nao existe uma pasta api no next
      this.namespace = "";
      this.passthrough();
    }
  })

  return server;
}