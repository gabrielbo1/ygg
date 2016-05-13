Definição da Estrutura de Banco de Dados
---------------------

Neste documento será apresentado a estrutura inicial do banco de dados utilizado na aplicação. 
O banco de dados foi definido utilizando a ferramenta [PHP MyAdmin](https://www.phpmyadmin.net/ PHP MyAdmin), com [MariaDB](https://mariadb.org/).
Os campos da tabela deverão ter um prefixo, que é definido pelo nome da tabela, por exemplo, para uma tabela **cidade**, deverá ser utilizado o prefixo **ci**,
para nome composto, deverá ser utilizado as letras iniciais de cada palavra, por exemplo **grupoEstudo**, deverá ser utilizado o prefixo **ge**.
A nomenclatura dos campos deverá seguir o padrão CamelCase.

As tabelas utilizadas na aplicação serão:

**usuarios**

|**Campo**      | **Tipo**                         |**Null** | **PK**| 
|---------------|----------------------------------|---------|-------|
|usID           | _integer_                        | _Não_   | _Sim_ |
|usNome         | _varchar(255)_                   | _Não_   | _Não_ |
|usSenha        | _varchar(32)_                    | _Não_   | _Não_ |
|usIDRedeSocial |_decimal(21,0)_                   | _Não_   | _Sim_ |
|usRedeSocial   | _enum('Google','Facebook','YGG')_| _Não_   | _Não_ |
|usSituacao		| _enum('Ativo','Excluido')_	   | _Não_	 | _Não_ |
|usMomento      | _datetime_                       | _Não_   | _Não_ |


**acessos**

|**Campo**|**Tipo**   | **Null** | **PK**|
|---------|-----------|-------|-------|
|acIDUsuario|_integer_|_Não_|_Sim_|
|acLogado | _boolean_ | _Não_ | _Não_ |
|acMomento| _datetime_| _Não_ | _Não_ |

**arvore**

|**Campo**|**Tipo**| **Null** | **PK**|
|-----------|-------------|-------|------|
|arID       | _integer_   | _Não_ | _Sim_|
|arIDUsuario| _integer_   | _Não_ | _Não_|
|arTitulo   | _integer_   | _Não_ | _Não_|
|arDescricao| _text_      | _Não_ | _Não_|
|arJSON     | _longtext_  | _Não_ | _Não_|
|arMomento  | _longtext_  | _Não_ | _Não_|


**grupoEstudo**

|**Campo** |**Tipo**    | **Null** | **PK**|
|----------|------------|----------|-------|
|geID      | _integer_  | _Não_    | _Sim_ |
|geIDDono  | _integer_  | _Não_    | _Não_ |
|geIDArvore| _integer_  | _Não_    | _Não_ |
|geMomento | _datetime_ | _Não_    | _Não_ |

**particpantes**

|**Campo**      |**Tipo**   | **Null** | **PK** |
|---------------|-----------|----------|------- |
|paID           | _integer_ | _Não_    | _Sim_  |
|paIDUsuario    | _integer_ | _Não_    | _Não_  |
|paIDGrupoEstudo| _integer_ | _Não_    | _Não_  |
