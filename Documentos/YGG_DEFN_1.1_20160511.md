Definições de Comunicação da Aplicação
-----------------

Neste documento são definidos os padrões de comunicação entre as partes da aplicação Front-end e Back-end.

**Requisições**

As requisições deverão ser feitas utilizam o protocolo _POST_ ou _GET_ do HTTP.

`POST`

As requsições para **inserção** e **atualização** de dados devem ser realizadas utilizando o método _POST_.

`GET`

As requisições para **seleção de dados** e para **apagar** registros 


**Resposta**

A resposta de uma requisão deverá utilizar o `JavaScript Object Notation` (JSON), e deverá ser composta dos seguintes parâmetros:

|Parâmetro| Sucesso| Falha | Padrão|
|---------|--------|-------|-------|
|_status_ | OK     | Mensagem de Erro| _String Vazia ""_|
|_dados_  | JSON Array| _String Vazia ""_| _String Vazia ""_|
