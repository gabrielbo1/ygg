Definições de Comunicação da Aplicação
-----------------

Neste documento são definidos os padrões de comunicação entre as partes da aplicação Front-end e Back-end.

**Requisições**

As requisições deverão ser feitas utilizam o protocolo _POST_ ou _GET_ do HTTP.

*_POST_*

As requsições para **inserção** e **atualização** de dados devem ser realizadas utilizando o método _POST_.

*_GET_*

As requisições para **seleção de dados** e para **apagar** registros 


**Resposta**

A resposta de uma requisão deverá utilizar o _JavaScript Object Notation_, ou JSON, e deverá ser composta dos seguintes parâmetros:

|Parâmetro| Valores|
|---------|--------|
|_status_ | Para o processamento com sucesso, o valor será "ok", caso contrário, o valor será a mensagem de erro|
