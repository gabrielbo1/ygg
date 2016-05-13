Definição as URLs e Respostas da API REST 
---
Versão 1.0 

Neste documento serão definidas as URLs para utilização na aplicação, seus parâmetros e suas respostas.
As requisições e respostas seguem o padrão definido no documento de [Definições](https://github.com/gabrielbo1/ygg/blob/master/Documentos/YGG_DEFN_1.1_20160511.md Definições).

#### URLs disponíveis

##### Definição da URL Base

A `URL Base` é o caminho padrão para a realização das requisições. 
A URL é composta pela concatenação da `URL Base` com o nome da função.


**Exemplo**

`http://urlbaseprojeto.com.br/rest/funcionalidade`

**URL Base:** `http://ygg.pe.hu/rest`

##### Definição das URLs

`cadastro`

Método: _POST_

Função responsável por realizar o cadastro de um usuário no sistema sem ser através das redes sociais.

|Parâmetros|Tipo|
|----------|-------|
|nome      | _String_ |
|email     | _String_|
|senha     | _String_|


`cadastroRedeSocial`

Método: _POST_

Função responsável por realizar o cadastro de um usuário no sistema através das Redes Sociais Facebook ou Google+

*A Definir*

`login`

Método: _POST_

Função responsável por realizar a autenticação dos dados de um usuário cadastrado via YGG.

|Parâmetros| Tipo|
|----------|--------|
|email     |_String_|
|senha     |_String_|


`loginRedeSocial`

Método: _POST_

Função responsável por realizar a autenticação de um usuário cadastrado via Redes Sociais.

*A Definir*

`logout/<usID>`

Método: _GET_

Função responsável por realizar o logout de um usuário no sistema.

|Parâmetros| Tipo|
|----------|-----|
|usID | _integer_|


`usuario/<usID>`

Método: _GET_

|Parâmetros| Tipo|
|----------|--------|
|usID      | _Integer_|

`apagar/<usID>`

Método: _DELETE_

Função responsável por alterar a situação de um usuário para **excluído**.

|Parâmetros|Tipo|
|----------|-----|
|usID      |_Integer_|


`atualizarPerfil/<usID>`

Método: _PUT_

Função responsável por atualizar o perfil de um usuário.

|Parâmetros| Tipo |
|-----------|------|
|usID | _Integer_|
|usNome|_String_|
|usEmail|_Strign_|
