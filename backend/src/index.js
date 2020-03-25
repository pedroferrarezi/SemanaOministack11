const express = require('express'); 
const cors = require('cors');

const routes = require('./routes');
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);

/**
 *  ROTA / RECURSO
 */


 /**
  * METODOS HTTP
  *  GET: BUSCAR UMA INFORMAÇÃO DO BACK-END
  *  POST: CRIAR UMA INFORMAÇÃO NO BACK-END
  *  PUT: ALTERAR UMA INFORMAÇÃO NO BACK-END
  *  DELETE: DELETAR UMA INFORMAÇÃO NO BACK-END
  */

  /** 
   * TIPOS DE PARAMETROS:
   * Query params: PARÂMETROS  NOMEADOS ENVIADOS NA ROTA APÓS "?" (FILTROS,PAGINAÇÃO)
   * Route params: PARÃMETROS UTILIZADOS PARA IDENTIFICAR RECURSOS
   * Request Body: CORPO DA REQUISIÇÃO UTILIZADO PARA CRIAR OU ALTERAR RECURSOS
   */
  /**
   * DRIVERS: SELECT * FROM users
   * QUERY BUILDER: table('users').select('*').where(); 
   */

