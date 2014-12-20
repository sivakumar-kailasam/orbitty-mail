module.exports = function(app) {
  var express = require('express');
  var mailsRouter = express.Router();

  mailsRouter.get('/', function(req, res) {
    res.send({
      "mails": []
    });
  });

  mailsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  mailsRouter.get('/:id', function(req, res) {
    res.send({
      "mails": {
        "id": req.params.id
      }
    });
  });

  mailsRouter.put('/:id', function(req, res) {
    res.send({
      "mails": {
        "id": req.params.id
      }
    });
  });

  mailsRouter.patch('/:id', function(req, res) {
    res.status(201).end();
  });

  app.use('/api/mails', mailsRouter);
};
