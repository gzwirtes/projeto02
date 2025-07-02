import { Knex } from "knex"

declare module "knex/types/tables" {
  interface Tables {
	contador: {
	  id: number;
	  nome: string;
	  quantidade: number;
	  senha: string;
	  created_at: string;
	  updated_at: string;
	  senha: string;
	};
  }
}
