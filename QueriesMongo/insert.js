db.getCollection("Vendas").insert({
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
})