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
Para criar o BD, usa os comandos: <br>

``use bells`` 
* Esse comando seleciona um banco de dados, e se não existir ainda , ele cria um com o nome que colocamos ali. No meu caso o nome do meu banco de dados é "bells". 

``db.createCollection('Vendas')`` 
*  Esse comando cria uma collection no BD.


## Inserindo documentos no Banco de dados
Para inserir documentos utilizamos a query: `db.getCollection("Vendas").insert()`.<br>
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

![image](https://user-images.githubusercontent.com/59287246/140561500-d665846d-9b10-4843-abce-3e6187c0cbc3.png)


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
![image](https://user-images.githubusercontent.com/59287246/140564626-0a6f9772-bff5-48e6-851a-2b919e29d871.png)

Utilizando esse modelo acima atualizei os documentos com o campo valor. 

![image](https://user-images.githubusercontent.com/59287246/140562402-32560039-8d86-4b46-ae59-4abde257933c.png)

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
![image](https://user-images.githubusercontent.com/59287246/140567737-346e803d-2863-4191-b74c-9b72088e3175.png)

## Consulta com projeção

## Consulta utilizando combinação entre os seletores

## Consulta paginada e ordenada (utilizar ignorar , limitar e classificar )
