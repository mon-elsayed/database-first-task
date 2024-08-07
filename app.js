
const mongodb=require('mongodb')
const mongoclient = mongodb.MongoClient

const connectionurl='mongodb://127.0.0.1:27017'
const dbname="proj-2"
mongoclient.connect(connectionurl,(error,res1)=>{
if(error){
    return console.log("error has occured")
}
console.log("All perfect")
const db=res1.db(dbname)

//insertone two documents
//the first document
db.collection('users').insertOne({
        name : 'eman',
        age : 22
    },(error,data) =>{
        if(error){
            console.log("Unable to insert data")
        }
        console.log(data.insertedId)
    })

//the second document
    db.collection('users').insertOne({
        name : 'mariam',
        age : 23
    },(error,data) =>{
        if(error){
            console.log("Unable to insert data")
        }
        console.log(data.insertedId)
    })



//insert many documents five of them have 27 y

db.collection ('users').insertMany([
    {
        name : 'nahla',
        age : 27
    },
    {
        name : 'reem',
        age : 27
    },
    {
        name : 'maram',
        age : 23
    },
    {
        name : 'ahmed',
        age : 24
    },
    {
        name : 'rana',
        age : 50
    },
    {
        name : 'aya',
        age : 27
    },
    {
        name : 'rania',
        age : 27
    },
    {
        name : 'hager',
        age : 23
    },
    {
        name : 'rehab',
        age : 24
    },
    {
        name : 'yomna',
        age : 27
    }
] , (error,data)=>{
    if(error){
        console.log("Unable to insert data")
    }
    console.log(data.insertedCount)
})
///////////////////////////////////////////

// db.collection('users').findOne({_id:mongodb.ObjectId("66b1772709da215922616a94")}
//     , (error,user)=>{
//         if(error){
//             console.log("Unable to insert data")
//         }
//         console.log(user)
//     })


///////////////find without limit
 db.collection('users').find({age:27}).toArray((error,users)=>{
                if(error){
                    return console.log('Error has occurred')
                }
                console.log(users)
            })
            /////////////if we want the number

            db.collection('users').find({age:27}).count((error , users)=>{
                    if (error) {
                        return console.log('error has occured')
                    }
                    console.log(users)
                  })

////////////////////find with limit
            db.collection('users').find({age:27}).limit(3).toArray((error,users)=>{
                if(error){
                    return console.log('Error has occurred')
                }
                console.log(users)
            })

/////////////////////////////
//////////update the name of the first four documents


  db.collection("users").updateOne({_id:mongodb.ObjectId("66b2b3be36739e5864462f59")},{
        $set:{name: "Osama" },
        
       
     }).
     then((data1)=>{console.log(data1.modifiedCount)})
     .catch((error)=> {console.log(error)})

////////////////////////

     db.collection("users").updateOne({_id:mongodb.ObjectId("66b2b3be36739e5864462f5a")},{
        $set:{name: "khaled" },
        
        
     }).
     then((data1)=>{console.log(data1.modifiedCount)})
     .catch((error)=> {console.log(error)})
//////////////////////////////

     db.collection("users").updateOne({_id:mongodb.ObjectId("66b2b3be36739e5864462f5b")},{
        $set:{name: "mahmoud" },
        
        
     }).
     then((data1)=>{console.log(data1.modifiedCount)})
     .catch((error)=> {console.log(error)})

//      ////////////////////////////////

     db.collection("users").updateOne({_id:mongodb.ObjectId("66b2b3be36739e5864462f5c")},{
        $set:{name: "nada" },
        
        
     }).
     then((data1)=>{console.log(data1.modifiedCount)})
     .catch((error)=> {console.log(error)})

     ///////////////////////////////////////////////
///////////////////increment age for the first 4 documents with age 27

 db.collection("users").updateOne({_id:mongodb.ObjectId("66b2bcb945e40d9be9560c11")},{
       
        
        $inc: {age: 5}
     }).
     then((data1)=>{console.log(data1.modifiedCount)})
     .catch((error)=> {console.log(error)})

///////////////////////////////////

 db.collection("users").updateOne({_id:mongodb.ObjectId("66b2bcb945e40d9be9560c12")},{
       
        
        $inc: {age: 5}
     }).
     then((data1)=>{console.log(data1.modifiedCount)})
     .catch((error)=> {console.log(error)})


    ///////////////////////////


     db.collection("users").updateOne({_id:mongodb.ObjectId("66b2bcb945e40d9be9560c16")},{
       
        
        $inc: {age: 5}
     }).
     then((data1)=>{console.log(data1.modifiedCount)})
     .catch((error)=> {console.log(error)})


    ///////////////////////////////

     db.collection("users").updateOne({_id:mongodb.ObjectId("66b2bcb945e40d9be9560c17")},{
       
        
        $inc: {age: 5}
     }).
     then((data1)=>{console.log(data1.modifiedCount)})
     .catch((error)=> {console.log(error)})

    //////////////////////////////////




///////////////////update the age for all documents


db.collection('users').updateMany({},{
        $inc: {age: 10}
    }).
    then((data1)=>{console.log(data1.modifiedCount)})
    .catch((error)=> {console.log(error)})





    ////////////////////delete documents with age 41

    db.collection('users').deleteMany({age:41})
   .then((data1)=>{console.log(data1.deletedCount)})
  .catch((error)=> {console.log(error)})



});





