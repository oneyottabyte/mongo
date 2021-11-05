
<h1 align="center">Praticando mongoDB</h1>
<h3 align="center">Um pequeno desafio com mongoDB</h3>

## Atividade MongoDB
Você deve criar um banco de dados novo (database) e uma coleção com um nome pertinente, de acordo com os dados e tema que você escolher. Os seguintes comandos devem ser feitos e entregues:
* Inserção de documentos
* Atualização de documentos
* Exclusão de documentos
* Consulta com projeção
* Consulta utilizando combinação entre os seletores
* Consulta paginada e ordenada (utilizar ignorar , limitar e classificar )

## Criando o banco de dados 
Para criar o BD, usa os comandos: <br>

``use bells`` 
* Esse comando seleciona um banco de dados, e se não existir ainda , ele cria um com o nome que colocamos ali. No meu caso o nome do meu banco de dados é "bells". 

``db.createCollection('Vendas')`` 
*  Esse comando cria uma collection no BD.
