module.exports = function(app) {
  var MASHAPE_API_KEY = 'JdP0f4zzRZmsh0fcTfodoHti5jI1p1Ok8k1jsnGKQMc3btLwcz';
  var express = require('express');
  var mailThreadsRouter = express.Router();

  var faker = require('faker');
  var unirest = require('unirest');
  var mails = [];

  var generateMails = function(subject, startIndex, endIndex) {
    for (var i = startIndex; i <= endIndex;i ++) {
      unirest.post('https://andruxnet-random-famous-quotes.p.mashape.com/cat=movies')
        .header('X-Mashape-Key', MASHAPE_API_KEY)
        .header('Content-Type', 'application/x-www-form-urlencoded')
        .end(function(result) {
          var resultObj = JSON.parse(result.body);
          mails.push({
            subject: subject,
            message: resultObj.quote,
            sender: resultObj.author,
            senderPic: faker.internet.avatar(),
            receiver: faker.name.firstName(),
            receiverPic: faker.internet.avatar(),
            date: new Date(),
            labels: ['inbox'],
            isMailRead: true,
            mailThread: 1
          })
        });
    }
  };



  var firstThreadSubject = 'How cool is the random movie quotes API';
  var secondThreadSubject = 'Some outputs of the API';

  generateMails(firstThreadSubject, 1, 3);
  generateMails(secondThreadSubject, 4, 10);

  mailThreadsRouter.get('/', function(req, res) {

    var count = 1;
    for(var j=0; j< mails.length; j++){
      mails[j].id=count++;
    }

    mails[9]['isMailRead'] = false;

    res.send({
      linked:{
        'mails': mails
      },
      'mail-threads': [{
        id: 1,
        subject: firstThreadSubject,
        links: {
  mails: [1,2,3]
        },
        hasUnreadMails: false
      }, {
        id: 2,
        subject: secondThreadSubject,
        links:{mails: [4, 5, 6, 7, 8, 9, 10]},
        hasUnreadMails: true
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