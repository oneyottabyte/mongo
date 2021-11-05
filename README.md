
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


## Inserindo documentos no Banco de dados
Para inserir documentos utilizamos a query: `$ db.getCollection("Vendas").insert()`.<br>

No robo 3T isso fica mais simples. É preciso apenas inserir um documento como segue os exemplos abaixos.
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
Utilizando esse modelo acima atuali\zei os documentos com o campo valor. 

![image](https://user-images.githubusercontent.com/59287246/140562402-32560039-8d86-4b46-ae59-4abde257933c.png)
