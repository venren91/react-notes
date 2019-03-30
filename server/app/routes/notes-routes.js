module.exports = function(app,db){
    app.post('/notes',(req,res)=>{
        console.log(req.body);
        db.collection('notescollection').insertOne(req.body,(err,result) => {
                if(err){
                    res.send("An error has occured" + err)
                }else{
                    console.log('notes inserted successfully!!')
                    res.send(result.ops[0]);
                }
            });
    });
    app.get('/notes',(req,res)=>{
        res.send('Hello from get!!!');
    });
    app.delete('/notes',(req,res)=>{
        res.send('Hello from delete!!!');
    });
    app.put('/notes',(req,res)=>{
        res.send('Hello from putrun!!!');
    });
}