'use strict';
const config = require('../config.js');
const twit = require('twit');
const T = new twit(config.twitter);

const retweet = () => {
  let params = {
    q: '@nodejs OR #nodejs OR #angularjs OR #mongodb OR @angular OR #angular OR @mongodb OR #meanstack OR @npmjs OR #ionicframework OR @Ionicframework OR @NodeUp OR @nodeweeklyfeed',
    result_type: 'recent',
    lang: 'en'
  };

  T.get('search/tweets', params, (err, data) => {
    // grab tweetID to retweet
    let retweetId = data.statuses[0].id_str;

    if(err) {
      console.log('ERROR: Cannot search tweet');
    }

    T.post('statuses/retweet/:id', {id: retweetId}, (err, response) => {
      if(err) {
        console.log('ERROR: in Retweeting');
      }
      console.log('SUCCESS: Retweet Successfull');
    });
  });
}

module.exports = retweet;