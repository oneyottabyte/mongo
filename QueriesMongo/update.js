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