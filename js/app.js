(function() {
  'use strict';

  var app = angular.module('redditClone', []);

  app.controller('postCtrl', function() {

    this.upVote = function(post) {
      this.posts[this.posts.indexOf(post)].score++;
    }

    this.downVote = function(post) {
      this.posts[this.posts.indexOf(post)].score--;
    }

    this.posts = [
      {
        id: 1,
        score: 5,
        title: 'Test post please ignore',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image_url: 'http://lorempixel.com/249/250',
        post_time: 'Thu Oct 13 2016 11:33:35 GMT-0600 (MDT)',
        poster: 'dudeman6'
      }, {
        id: 2,
        score: 12,
        title: 'What tastes the best over rice?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image_url: 'http://lorempixel.com/250/249',
        post_time: 'Tues Oct 11 2016 7:25:35 GMT-0600 (MDT)',
        poster: 'pm_me_ur_cats'
      },
      {
        id: 3,
        score: -14,
        title: 'How do you write an AngularJS page?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image_url: 'http://lorempixel.com/251/250',
        post_time: 'Thu Oct 13 2016 17:10:35 GMT-0600 (MDT)',
        poster: 'bill_clinton'
      }
    ]
  });

}());
