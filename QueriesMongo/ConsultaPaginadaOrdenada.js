db.getCollection('Vendas').find({}).limit(3).skip(1).sort({"valor": 1})