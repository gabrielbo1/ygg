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
 * @version 1.1
 * @return JSON String
 * */
function login(Request $requisicao, Response $retorno){
    $body = $requisicao->getParsedBody();
    $email = $requisicao->getAttribute('email');
    $senha = $requisicao->getAttribute('senha');
	
  
    if($email!='' && $senha!=''&& filter_var($email,FILTER_VALIDATE_EMAIL)){
      $sql = "SELECT * FROM usuarios WHERE usEmail=:email and usSenha=:senha";

      try{
        $bancoDados         = conexaoBancoDados();
        $consulta           = $bancoDados->prepare($sql);
        $consulta->bindParam('email',$email);
        $consulta->bindParam('senha',md5(&email.$senha));
        $consulta->execute();
        if ($consulta->rowCount() > 0) {
            $usuario        = $consulta->fetchObject();
            $logado              = 1;
            $sql                 = "REPLACE INTO acessos (acIDUsuario,acLogado,acMomento) VALUES (:acIDUsuario,:acLogado,now())";
            $consulta            = $bancoDados->prepare($sql);
            $consulta->bindParam("acIDUsuario",$usuario->usID);
            $consulta->bindParam("acLogado",$logado);
            $consulta->execute();
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
 * @version 1.1
 * @return JSON String
 * */
function logout(Request $requisicao, Response $retorno){
    $usID           = $requisicao->getAttribute("usID");
    if(is_numeric($usID)){
        try {
            $logado     = 0;
            $sql        = "REPLACE INTO acessos (acIDUsuario,acLogado,acMomento) VALUES (:acIDUsuario,:acLogado,now())";
            $bancoDados = conexaoBancoDados();
            $consulta   = $bancoDados->prepare($sql);
            $consulta->bindParam("acIDUsuario",$usID);
            $consulta->bindParam("acLogado",$logado);
            $consulta->execute();
            $resposta = array("status"=>"OK","dados"=>"");
        }catch(PDOException $e){
            $resposta = array("status"=>"Erro no banco de dados","dados"=>"");
        }
    }else{
        $resposta = array("status"=>"Identificador inválido","dados"=>"");
    }
    $retorno->getBody()->write(json_encode($resposta));
}
/*
 * Função responsável por buscar os dados de um usuário
 * @param $usID integer
 * @param $sessionID integer
 * @author Lucas Vinicios
 * @version 1.0
 * @return JSON String
 * */
 function usuario(Request $requisicao, Response $retorno){
    $usuarioID = $requisicao->getAttribute('usID');
	
  
    if(is_numeric($usuarioID)){

      try{
        $bancoDados         = conexaoBancoDados();
        
        $sql = "SELECT * FROM acessos WHERE acIDUsuario=:acIDusu";
        $consulta           = $bancoDados->prepare($sql);
        $consulta->bindParam('acIDusu',$usuarioID);
        $consulta->execute();

        if($consulta->rowCount()>0){
            $usuario 			 = $consulta->fetchObject();
            if($usuario->acLogado==1){
                $sql = "SELECT * FROM usuarios WHERE usID=:usID";

                $consulta           = $bancoDados->prepare($sql);
                $consulta->bindParam('usID',$usuario->usID);
                $consulta->execute();

                if ($consulta->rowCount()>0) {
                    $usuario 			 = $consulta->fetchObject();
                    $resposta = array("status"=>"OK","dados"=>$usuario);
                }else{
                    $resposta = array("status"=>"Usuário inexistente!","dados"=>"");
                }
            }else{
                $resposta = array("status"=>"Usuário não logado!","dados"=>"");
            }
        }else{
             $resposta = array("status"=>"Usuário não logado!","dados"=>"");
        }
        
      }catch(PDOException $e){
          $resposta = array("status"=>"Erro de Banco de Dados","dados"=>"");
      }
    }else{
      $resposta = array("status"=>"Um usuário existente deve ser informado!","dados"=>"");
    }
  
    $retorno->getBody()->write(json_encode($resposta));
}
/*
 * Função responsável por deletar os dados de um usuário
 * @param $usID integer
 * @author Lucas Vinicios
 * @version 1.0
 * @return JSON String
 * */
 function apagar(Request $requisicao, Response $retorno){
    $usuarioID = $requisicao->getAttribute('usID');
	
  
    if(is_numeric($usuarioID)){
      $sql = "DELETE FROM usuarios WHERE usuarioID=:usID";

      try{
        $bancoDados         = conexaoBancoDados();
        $consulta           = $bancoDados->prepare($sql);
        $consulta->bindParam('usID',$usuarioID);
        $consulta->execute();
       
        $resposta = array("status"=>"OK","dados"=>"");
      }catch(PDOException $e){
          $resposta = array("status"=>"Erro de BD","dados"=>"");
      }
    }else{
      $resposta = array("status"=>"Um usuário existente deve ser informado!","dados"=>"");
    }
  
    $retorno->getBody()->write(json_encode($resposta));
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