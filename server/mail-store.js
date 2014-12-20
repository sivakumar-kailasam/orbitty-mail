module.exports = {
	mails:  (function() {
		var mails = [];

		var MASHAPE_API_KEY = 'JdP0f4zzRZmsh0fcTfodoHti5jI1p1Ok8k1jsnGKQMc3btLwcz';
		var faker = require('faker');
		var unirest = require('unirest');

		var generateMails = function(subject, startIndex, endIndex) {
			for (var i = startIndex; i <= endIndex; i++) {
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
							date: new Date(new Date() - (Math.floor(Math.random() * (1000000 - 10000 + 1)) + 10000)),
							labels: ['inbox'],
							isMailRead: true,
							mailThread: 1
						})
					});
			}
		};

		var firstThreadSubject = 'How cool is the random movie quotes API';
		var secondThreadSubject = 'Some quotes I generated';

		generateMails(firstThreadSubject, 1, 3);
		generateMails(secondThreadSubject, 4, 10);

		return mails;
	})()
}