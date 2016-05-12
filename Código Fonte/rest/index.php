<?php
/**
 * Criação de REST API para utilização no projeto YGG - Árvore de Conhecimento
 * referente a disciplina Gerência de Projeto 2016-1, ministrada pela professora
 * Adriana Silveira
 * Colaboradores
 * @author Lucas Vinicios
 * @author Pedro Victor
 * @author Rony Nogueira
 * @version 0.1
 */

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

/**
 * Inclusão de biblioteca Slim Framework
 */

require 'vendor/autoload.php';
/*
 * Inicialização do Framework
 * */
$app = new \Slim\App;

/*
 * Definição das URLs e Funções da API REST
 * @author Rony Nogueira, Pedro Victor e Lucas Vinicios
 * @version 1.0
 * */
$app->get('/hello/{name}','hello');
$app->get('/','inicio');
$app->post('/cadastro','cadastro');
$app->get('/login/{email}/{senha}','login');
$app->get('/usuario/{usID}/{sessionID}','usuario');
$app->get('/apagar/{usID}','apagar');

$app->run();
/*
 * Função responsável por mostrar o funcionamento da API
 * @author Rony Nogueira
 * @version 1.0
 * */
function hello (Request $request, Response $response) {
    $name = $request->getAttribute('name');
    $response->getBody()->write("Hello, $name");
    return $response;
}
/*
 * Função de apresentação caso o acesso a API seja feito direto do navegador e sem parâmetros
 * @author Rony Nogueira
 * @version 1.0
 * */
function inicio(Request $resquest, Response $response){
    $response->getBody()->write("YGG - API REST 1.0 ");
    return $response;
}
/*
 * Função responsável por realizar o retorno dos dados de um usuário
 * @param $usID integer
 * @param $sessionID integer
 * @author Rony Nogueira
 * @version 1.0
 * @return JSON String
 * */
function usuario(Request $requisicao, Response $retorno){
    $usuarioID      = $requisicao->getAttribute('usID');
    $sessionID      = $requisicao->getAttribute('sessionID');
    if(is_numeric($usuarioID) && $sessionID!=''){
        $sql 		= "SELECT * FROM acessos WHERE acSessionID=:sessionID";
        try{
            $bancoDados = conexaoBancoDados();
            $consulta 	= $bancoDados->prepare($sql);
            $consulta->bindParam("sessionID",$sessionID);
            $consulta->execute();
            $session 	= $consulta->fetchObject();
            if(count($session)>0){
                $sql        = "SELECT * FROM usuario WHERE usID=:usID AND usSituacao='Ativo'";
                $consulta   = $bancoDados->prepare($sql);
                $consulta->bindParam("usID",$usuarioID);
                $consulta->execute();
                $usuario    = $consulta->fetchObject();
                if(count($usuario)>0){
                    $resposta       = array("status"=>"OK","dados"=>$usuario);
                }else{
                    $resposta       = array("status"=>"Usuário não encontrado","dados"=>"");
                }
            }else{
                $resposta       = array("status"=>"Session Inválida","dados"=>"");
            }
            $bancoDados = null;

        }catch(PDOException $e){
            $resposta       = array("status"=>"Erro na consulta ao banco de dados");
        }
    }else{
        $resposta       = array("status"=>"O usuário e session devem ser informados");
    }
    $retorno->getBody()->write(json_encode($resposta));
}
/*
 * Função responsável por realizar a autenticação de um usuario no sistema.
 * @param $email String
 * @param $senha Sring
 * @author Pedro Victor
 * @return JSON String
 * */
function login(Request $requisicao, Response $retorno){
    $email = $requisicao->getAttribute('email');
    $senha = $requisicao->getAttribute('senha');
	
  
    if($email!='' && $senha!=''){
      $sql = "SELECT * FROM usuarios WHERE usEmail=:email and usSenha=:senha";

      try{
        $bancoDados         = conexaoBancoDados();
        $consulta           = $bancoDados->prepare($sql);
        $consulta->bindParam('email',$email);
        $consulta->bindParam('senha',$senha);
        $consulta->execute();
        $usuario 			 = $consulta->fetchObject();
        if (count($usuario) > 0) {
            session_start();
            $_SESSION['usEmail'] = $usuario->usEmail;
            $_SESSION['usID'] = $usuario->usID;
            $resposta = array("status"=>"OK","dados"=>"");
        }else{
              $resposta = array("status"=>"Email ou Senha Incorretos","dados"=>"");
        }
      }catch(PDOException $e){
          $resposta = array("status"=>"Erro de BD","dados"=>"");
      }
    }else{
      $resposta = array("status"=>"Email e senha devem ser informados","dados"=>"");
    }
  
    $retorno->getBody()->write(json_encode($resposta));
}
/*
 * Função responsável por realizar o logout de um usuario no sistema.
 * @param $usID integer
 * @author Pedro Victor
 * @return JSON String
 * */
function logout(Request $requisicao, Response $retorno){
    //Lógica Aqui
}
/*
 * Função responsável por estabelecer a conexão com o Banco de Dados
 * @author Rony Nogueira
 * @version 1.0
 * */
function conexaoBancoDados() {
    $dbhost		="localhost";
    $dbuser		="root";
    $dbpass		="";
    $dbname		="teste";
    $db 		= new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $db;
}