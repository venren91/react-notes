var ObjectID = require('mongodb').ObjectID
module.exports = function(app,db){
    app.post('/notes/:collectionName',(req,res)=>{
        const collectionName = req.params.collectionName;
        db.collection(collectionName).insertOne(req.body,(err,result) => {
                if(err){
                    res.send("An error has occured" + err)
                }else{
                    console.log('notes inserted successfully!!')
                    res.send(result.ops[0]);
                }
            });
	});
	
	app.post('/notes/saveAll/:collectionName',(req,res)=>{
		console.log("save all called!!! with request " + req.body)
        const collectionName = req.params.collectionName;
        db.collection(collectionName).insertMany(req.body,(err,result) => {
                if(err){
                    res.send("An error has occured" + err)
                }else{
                    console.log('notes inserted successfully!!')
                    res.send(result.ops[0]);
                }
            });
	});
	
    app.get('/notes/:collectionName/:id',(req,res)=>{
        const collectionName = req.params.collectionName;
        const id = req.params.id;
		const details = {'_id': new ObjectID(id) };
		db.collection(collectionName).findOne(details, (err, item) => {
			if (err) {
				res.send({ 'error': 'An error has occured' });
			} else {
				res.send(item);
			}
		});
    });
    app.get('/notes/:collectionName',(req,res)=>{
        const collectionName = req.params.collectionName;
		db.collection(collectionName).find({}).toArray(function(error, documents) {
            if (error) throw error;
        
            res.send(documents);
        });
    });

    app.delete('/notes/:collectionName/:id', (req, res) => {
        const id = req.params.id;
        const collectionName = req.params.collectionName;
		const details = {'_id': new ObjectID(id) };
		db.collection(collectionName).remove(details, (err, item) => {
			if (err) {
				res.send({ 'error': 'An error has occured' });
			} else {
				res.send('Note ' + id + ' deleted!');
			}
		});
	});

	app.put('/notes/:collectionName/:id', (req, res) => {
        const id = req.params.id;
        const collectionName = req.params.collectionName;
		const details = {'_id': new ObjectID(id) };
		const note = { text: req.body.text, title: req.body.title };
		db.collection(collectionName).updateOne,(details, note, (err, item) => {
			if (err) {
				res.send({ 'error': 'An error has occured' });
			} else {
				res.send(item);
			}
		});
    });

    app.delete('/notes/:collectionName', (req, res) => {
        const collectionName = req.params.collectionName;
		db.collection(collectionName).deleteMany({}, (err, item) => {
			if (err) {
				res.send({ 'error': 'An error has occured' });
			} else {
				res.send('Documents in collection ' + collectionName + ' deleted!');
			}
		});
    });   
}