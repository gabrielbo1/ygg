Definições de Comunicação da Aplicação
-----------------

Neste documento são definidos os padrões de comunicação entre as partes da aplicação Front-end e Back-end.

**Requisições**

As requisições deverão ser feitas utilizam o protocolo _POST_, _GET_,_PUT_ e _DELETE_ do HTTP.

###### POST

As requsições para **inserção** de dados devem ser realizadas utilizando o método _POST_.

###### GET

As requisições para **seleção de dados** e registros deverão ser realizadas utilizando o método _GET_.

###### PUT 

As requisições para **atualização de dados**, deverão ser realizadas utilizando o método _PUT_.

###### DELETE 

As requisições para **exclusão** de dados e registros, deverão ser realizadas utilizando o método _DELETE_.

**Resposta**

A resposta de uma requisão deverá utilizar o `JavaScript Object Notation` (JSON), e deverá ser composta dos seguintes parâmetros:

|Parâmetro| Sucesso| Falha | Padrão|
|---------|--------|-------|-------|
|_status_ | OK     | Mensagem de Erro| _String Vazia ""_|
|_dados_  | JSON Array| _String Vazia ""_| _String Vazia ""_|

--- 

###### Exemplo de Resposta 

**Sucesso**

Resposta em caso do processamento da requisição seja executado com sucesso.

``
{"status":"OK","dados":""}
``

ou

``
{"status":"OK","dados":[{"usID":1}]}
``


**Falha**

Resposta caso o processamento da requisição tenha falhado 

``
{"status":"Processamento com Falha","dados":""}
``
