var ObjectID = require('mongodb').ObjectID;

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
    app.delete('/film', (req, res) => {
      const id = req.query;
      const details = {'_id': new ObjectID(id.id)};
      db.collection('films').remove(details, (err, item) => {
        err ? res.send('Error! An error has occured!') : res.send(`Film was deleted!`);
      })
    });
    app.put('/film', (req, res) => {
      const id = req.query;
      const details = {'_id': new ObjectID(id.id)};
      const film = { 
        filmTitle: req.body.filmTitle, 
        description: req.body.description,
        date: req.body.date,
        trailerUrl: req.body.trailerUrl,
        imgSrc: req.body.imgSrc,
        ticketPrice: req.body.ticketPrice,
      };
      db.collection('films').update(details, film, (err, result) => {
        err ? res.send('Error! An error has occured!') : res.send(film);
      });
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