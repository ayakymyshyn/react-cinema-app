module.exports = function(app, db) {
    app.get('/films', (req, res) => {
        db.collection('films').find({}).toArray((err, item) => {
            err ?  res.send({'error':'An error has occurred'}) : res.send(item); 
        });
    });
    app.get('/film', (req, res) => {
        let URLparams = req.query;
        db.collection('films').find(URLparams).toArray((err, item) => {
            err ?  res.send({'error':'An error has occurred'}) : res.send(item);
        })
    });
    app.post('/films', (req, res) => {
      const film = { 
          filmTitle: req.body.filmTitle, 
          description: req.body.description,
          date: req.body.date,
          trailerUrl: req.body.trailerUrl,
          imgSrc: req.body.imgSrc,
          ticketPrice: req.body.ticketPrice,
        };
      db.collection('films').insert(film, (err, result) => {
        err ?  res.send({'error':'An error has occurred'}) : res.send(result.ops[0]);
      });
    });
  };