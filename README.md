<h1 align="center">
    <img  width=500 src="https://user-images.githubusercontent.com/59287246/140565692-195a2c53-fa72-4cb9-815a-c1737830753e.png"/>
</h1>

<h1 align="center">Praticando mongoDB</h1>
<h3 align="center">Um pequeno desafio com mongoDB</h3>

## Atividade MongoDB
Você deve criar um banco de dados novo (database) e uma coleção com um nome pertinente, de acordo com os dados e tema que você escolher. <br>
Os seguintes comandos devem ser feitos e entregues:
<br>
* Inserção de documentos
* Atualização de documentos
* Exclusão de documentos
* Consulta com projeção
* Consulta utilizando combinação entre os seletores
* Consulta paginada e ordenada (utilizar ignorar , limitar e classificar )

## Criando o banco de dados 
Para criar o banco de dados, usamos o comando: <br>

``use bells`` 
* Esse comando seleciona um banco de dados, e se não existir ainda , ele cria um com o nome que colocamos ali. No meu caso o nome do meu banco de dados é "bells". 

``db.createCollection('Vendas')`` 
*  Esse comando cria uma collection no BD.


## Inserindo documentos no Banco de dados
Para inserir documentos utilizamos a query: `db.getCollection("Vendas").insert()`.
<br>

![image](https://user-images.githubusercontent.com/59287246/140563878-13bfe198-cc30-47be-8835-460607f5f388.png)

No menu do 3T isso fica mais simples. É preciso apenas inserir um documento como segue os exemplos abaixos.

```
{
    "_id" : ObjectId("617d9e81d1bb62c8d7637269"),
    "pedido" : {
        "pizza" : "Calabresa",
        "adicional" : "Borda de Chocolate",
        "tamanho" : "Gigante de 12 fatias",
        "atendente" : "Daniel"
    },
    "cliente" : {
        "nome" : "Dorian Vieira",
        "endereco" : "Avenida Elefante Albino 25",
        "telefone" : "(48) 99186-9704"
    },
    "obs" : "pagamento em dinheiro",
    "dataHora" : ISODate("2021-11-02T22:00:00.000Z")
}
```

```
{
    "_id" : ObjectId("617d9e81d1bb62b8d8633278"),
    "pedido" : {
        "pizza" : "Marguerita",
        "adicional" : "Borda de Catupiry",
        "tamanho" : "Gigante de 12 fatias",
        "atendente" : "Daniel"
    },
    "cliente" : {
        "nome" : "Gabriel Jesus",
        "endereco" : "Avenida Macaco Preto 25",
        "telefone" : "(48) 98825-3014"
    },
    "obs" : "pagamento em dinheiro",
    "dataHora" : ISODate("2021-11-02T22:15:00.000Z")
}
```
```
{
    "_id" : ObjectId("617d9eeb6154d40c4c0c59c7"),
    "pedido" : {
        "pizza" : "Frango com Catupiry",
        "adicional" : "Borda de Cheddar",
        "tamanho" : "Gigante de 12 fatias",
        "atendente" : "Daniel"
    },
    "cliente" : {
        "nome" : "Firmino",
        "endereco" : "Avenida Tigre amarelo 25",
        "telefone" : "(48) 99186-8964"
    },
    "obs" : "pagamento em dinheiro",
    "dataHora" : ISODate("2021-11-02T22:30:00.000Z")
}
```
```
{
    "_id" : ObjectId("617d9ef86154d40c4c0c59d0"),
    "pedido" : {
        "pizza" : "Frango com Milho",
        "adicional" : "Borda de Cheddar",
        "tamanho" : "Pequena 6 Fatias",
        "atendente" : "Daniel"
    },
    "cliente" : {
        "nome" : "Richarlison",
        "endereco" : "Avenida Lobo Cinza 85",
        "telefone" : "(48) 99858-6365"
    },
    "obs" : "pagamento em dinheiro",
    "dataHora" : ISODate("2021-11-02T21:30:00.000Z")
}
```
```
{
    "_id" : ObjectId("617d9e81d1bb62c8d7698765"),
    "pedido" : {
        "pizza" : "Frango com Catupiry",
        "adicional" : "Borda de Chocolate",
        "tamanho" : "Gigante de 12 fatias",
        "atendente" : "Daniel"
    },
    "cliente" : {
        "nome" : "Dorian Vieira",
        "endereco" : "Avenida Elefante Albino 25",
        "telefone" : "(48) 99186-9704"
    },
    "obs" : "pagamento em dinheiro",
    "dataHora" : ISODate("2021-11-01T22:00:00.000Z")
}
```

```
{
    "_id" : ObjectId("617d9e81d1bb62c8d7632556"),
    "pedido" : {
        "pizza" : "Calabresa",
        "adicional" : "Borda de Chocolate",
        "tamanho" : "Gigante de 12 fatias",
        "atendente" : "Daniel"
    },
    "cliente" : {
        "nome" : "Junior",
        "endereco" : "Rua Donkey 25",
        "telefone" : "(48) 99186-8495"
    },
    "obs" : "pagamento em dinheiro",
    "dataHora" : ISODate("2021-11-02T22:00:00.000Z")
}
```
<br>
Apos isso no robo 3T nosso BD fica assim:
<br> 
![image](https://user-images.githubusercontent.com/59287246/140561500-d665846d-9b10-4843-abce-3e6187c0cbc3.png)
<br> 

## Atualizando alguns documentos
Para fazer o Update dos documentos utilizamos a query abaixo:
```
db.getCollection('Vendas').update(
    // query 
    {
        "key" : "value"
    },
    
    // update 
    {
    },
    
    // options 
    {
        "multi" : false,  // update only one document 
        "upsert" : false  // insert a new document, if no existing document match the query 
    }
);
```
```
db.getCollection('Vendas').update(
    // query 
    {
        "_id" : ObjectId("617d9e81d1bb62c8d7698765")
    },
    
    // update 
    { $set:
        {
        "valor": 112.6
        }
        
    },
    
    // options 
    {
        "multi" : false,  // update only one document 
        "upsert" : false  // insert a new document, if no existing document match the query 
    }
);
```
<br> 
![image](https://user-images.githubusercontent.com/59287246/140564626-0a6f9772-bff5-48e6-851a-2b919e29d871.png)
<br> 
Utilizando esse modelo acima atualizei os documentos com o campo valor. 
<br> 
![image](https://user-images.githubusercontent.com/59287246/140562402-32560039-8d86-4b46-ae59-4abde257933c.png)
<br> 
## Excluido documentos
Para excluir um documento pelo Robo 3T basta clicar em cima dele com o botão direito e escolher a opção Delete Document.<br>
Podemos também usar o comando `db.getCollection('Vendas').remove({selecao})`, onde "selecao" é a condição que você quer passar para a deleção.  
<br>
Exemplo:<br>
`db.getCollection('Vendas').remove({ "_id" : ObjectId("617d9e81d1bb62c8d7698765") });`
<br>
Essa query acima remove pelo id todo o objeto como mostra a imagem abaixo.
![image](https://user-images.githubusercontent.com/59287246/140564804-18c95346-1ed4-4025-b3cb-952f24122334.png)
<br>
Se for preciso deletar apenas um único registro nessa condição podemos fazer essa remoção dessa forma:
`db.Vendas.remove({"valor": 100},{justOne: true})`
<br>
![image](https://user-images.githubusercontent.com/59287246/140567737-346e803d-2863-4191-b74c-9b72088e3175.png)
<br>
## Consulta com projeção
Caso eu queira buscar todos os documentos, porém a única informação que quero que
retorne seja as pizzas vendidas podemos utilizar a seguinte query:
`db.getCollection('Vendas').find({},{"pedido.pizza":1, "_id":0})`
<br>
Nesse caso utilizamos o número 1 para informar que queremos que esse atributo velha no
resultado, porém utilizamos o número 0informando que não queremos que apareça no
resultado da busca. Então na nossa listagem somente virá retornando o atributo pizza
das consultas.
<br>
![image](https://user-images.githubusercontent.com/59287246/140568398-28881dd4-0826-4349-aa73-8b6ee425aee8.png)
<br>
## Consulta utilizando combinação entre os seletores
Se eu quiser saber quantas vezes certo cliente da pizzaria Bells pediu um sabor de pizza posso utilizar a seguinte query: <br>
`db.getCollection('Vendas').find({$and:[{"cliente.nome":/.*Dorian.*/ },{"pedido.pizza":/.*Calabresa.*/}]})`
O comando acima retorna quantas vezes o cliente Dorian comeu Pizza de calabresa, que no caso foi só uma.
<br>
![image](https://user-images.githubusercontent.com/59287246/140571265-05f14c97-1ad9-46db-896a-29f995e86687.png)
<br>

## Consulta paginada e ordenada (utilizando ignorar , limitar e classificar )
Para limitar a quantidade de documentos que vão aparecer nessa consulta, usamos:`.limit()` <br> 
Para retornar as vendas mas ignorar alguns registros da lista, usamos: `.skip()` <br> 
Para classificar usamos: `.sort()` <br> 
<br>
Veja o exemplo abaixo
`db.getCollection('Vendas').find({}).limit(3).skip(1).sort({"valor": 1})`
<br>
![image](https://user-images.githubusercontent.com/59287246/140572680-cc765d8c-5538-487e-817a-a2e6f806cd0b.png)
<br><br>
# Resumo de comandos básicos Mongo
1. Base de Dados
     * Exibir existentes - `show dbs`
     * Selecionar para uso (e criar, caso não exista) - `use nome-do-database`
     * Excluir base selecionada - `db.dropDatabase()`
  <br>
2. Coleção
    * Criar coleção de documentos - `db.createCollection('nome-da-collection')`(Mongo é case sensitive)
    * Exibir todas as coleções - `show collections`
    * Apagar coleção de documentos - `db.nomedacollection.drop()`
  <br>
3. Documentos
    * Inserir - `.nomedacollection.insert(documento)`
    * Consultar - `db.nomedacollection.find({selecao})`
        - Igualdade - `{<key>:<value>}`
        - Menor que - `{<key>:{$lt:<value>}}`
        - Menor ou igual - `{<key>:{$lte:<value>}}`
        - Maior que - `{<key>:{$gt:<value>}}`
        - Maior ou igual - `{<key>:{$gte:<value>}}`
        - Diferente - `{<key>:{$ne:<value>}}`
        - AND - `{<key>:<value>, <key>:<value>}`
        - OR - `$or:[{<key>:<value>},{<key>:<value>}]`
    * Atualizar - `db.nomedacollection.update({selecao}, {$set:{campos-atualizados}})`
    * Excluir - `db.nomedacollection.remove({selecao})`(Considerar exclusão de seleção, apenas um e todos)
    * Projetar - `db.nomedacollection.find({selecao},{<key>:1})`
    * Limitar - `db.nomedacollection.find().limit(numero)`
    * "Pular" - `db.nomedacollection.find().skip(numero)`
    * Ordernar - `db.nomedacollection.find().sort({<key>:1})`(Considerar crescente e decrescente, e combinações)
