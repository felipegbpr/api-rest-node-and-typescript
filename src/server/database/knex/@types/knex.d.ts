import { ICidade, IPessoa, IUsuario } from '../../models';

/* Declares table typings within knex */
declare module 'knex/types/tables' {
  interface Tables {
    cidade: ICidade;
    pessoa: IPessoa;
    usuario: IUsuario;
  }
}
