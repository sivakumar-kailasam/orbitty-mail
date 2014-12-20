module.exports = function(app) {

  var express = require('express');
  var mailThreadsRouter = express.Router();
  var mails = require('../mail-store').mails;



  var firstThreadSubject = 'How cool is the random movie quotes API';
  var secondThreadSubject = 'Some quotes I generated';

  mailThreadsRouter.get('/', function(req, res) {
    var count = 1;
    for (var j = 0; j < mails.length; j++) {
      mails[j].id = count++;
    }
    mails[9]['isMailRead'] = false;
    res.send({
      linked: {
        'mails': mails
      },
      'mail-threads': [{
        id: 1,
        subject: firstThreadSubject,
        links: {
          mails: [1, 2, 3]
        }
      }, {
        id: 2,
        subject: secondThreadSubject,
        links: {
          mails: [4, 5, 6, 7, 8, 9, 10]
        }
      }]
    });
  });

  mailThreadsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  mailThreadsRouter.get('/:id', function(req, res) {
    res.send({
      'mail-threads': {
        'id': req.params.id
      }
    });
  });

  mailThreadsRouter.put('/:id', function(req, res) {
    res.send({
      'mail-threads': {
        'id': req.params.id
      }
    });
  });

  mailThreadsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/mail-threads', mailThreadsRouter);
};