import { app } from "../api/imports/importesClient";
import { Participante } from "../api/participante/DAOparticipante";
import { Usuario } from "../api/usuario/DAOusuario";
import { Prioridade } from "../api/prioridade_reuniao/DAOprioridade";
import { Sala } from "../api/sala/DAOsala";
import { Contato } from "../api/contacto/DAOcontato";
import { Edificio } from "../api/edificio/DAOedificio";
import { Funcao } from "../api/funcao/DAOfuncao";
import { Reuniao } from "../api/reuniao/DAOreuniao";
import { Depastamento } from "../api/departamento/DAOdepartamento";




const C_Participante = new Participante();
const C_Usuario =new Usuario()
const C_Reuniao = new Reuniao();
const C_Edificio = new Edificio();
const C_Funcao = new Funcao();
const C_Sala = new Sala();
const C_Contato = new Contato();
const C_Prioridade_reuniao = new Prioridade();
const C_Departamento = new Depastamento();


app.post("/departamento/criar", C_Departamento.create);
app.post("/departamento/listar", C_Departamento.listar);
app.post("/departamento/remover", C_Departamento.remove);
app.post("/departamento/alterar", C_Departamento.alterar);

app.post("/participante/criar", C_Participante.create);
app.post("/participante/listar", C_Participante.listar);
app.post("/participante/remover", C_Participante.remove);
app.post("/participante/alterar", C_Participante.alterar);



app.post("/usuario/criar", C_Usuario.create);
app.post("/usuario/alterar", C_Usuario.alterarDados);
app.put("/usuario/password", C_Usuario.alterarPasse);
app.post("/usuario/listar", C_Usuario.listar);
app.post("/usuario/remover", C_Usuario.remove);


app.post("/reuniao/criar", C_Reuniao.create);
app.post("/reuniao/listar", C_Reuniao.listar);
app.post("/reuniao/remover", C_Reuniao.remove);
app.post("/reuniao/alterar", C_Reuniao.alterar);


app.post("/edificio/criar", C_Edificio.create);
app.post("/edificio/listar", C_Edificio.listar);
app.post("/edificio/alterar", C_Edificio.alterar);
app.post("/edificio/remover", C_Edificio.remove);


app.post("/funcao/criar", C_Funcao.create);
app.post("/funcao/listar", C_Funcao.listar);
app.post("/funcao/remover", C_Funcao.remove);
app.post("/funcao/alterar", C_Funcao.alterar);


app.post("/sala/criar", C_Sala.create);
app.post("/sala/listar", C_Sala.listar);
app.post("/sala/remover", C_Sala.remove);
app.post("/sala/alterar", C_Sala.alterar);


app.post("/contato/criar", C_Contato.create);
app.post("/contato/listar", C_Contato.listar);
app.post("/contato/alterar", C_Contato.alterar);
app.post("/contato/remover", C_Contato.remove);


app.post("/prioridade/criar", C_Prioridade_reuniao.create);
app.post("/prioridade/listar", C_Prioridade_reuniao.listar);
app.post("/prioridade/remover", C_Prioridade_reuniao.remove);
app.post("/prioridade/alterar", C_Prioridade_reuniao.alterar);



export { app };