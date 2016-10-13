(function() {
  'use strict';

  var app = angular.module('redditClone', []);

  app.filter('timeSince', function() {
    return (input) => { return moment(`${input}`, 'x').fromNow(); };
  });

  app.controller('postCtrl', function($scope) {
    this.upVote = function(post) {
      this.posts[this.posts.indexOf(post)].score++;
    }

    this.downVote = function(post) {
      this.posts[this.posts.indexOf(post)].score--;
    }

    this.addComment = function(post, commentForm) {

      this.posts[this.posts.indexOf(post)].comments.push({
        commenter: this.commentUsername,
        comment: this.commentComment
      });
      this.commentUsername = '';
      this.commentComment = '';
      commentForm.$setPristine();
    }

    // this.resetCommentForm = function() {
    //   this.commentForm.$setPristine();
    // }

    this.addPost = function() {

    }

    this.commentUsername = '';
    this.commentComment = '';

    this.posts = [
      {
        id: 1,
        score: 5,
        title: 'Test post please ignore',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image_url: 'http://placecage.com/249/250',
        post_time: 1476204647000,
        poster: 'dudeman6',
        comments: [
          {
            commenter: 'dudeman6',
            comment: 'This is a sick post!'
          },
          {
            commenter: 'troll1',
            comment: 'This is a terrible post!'
          }
        ]
      }, {
        id: 2,
        score: 12,
        title: 'What tastes the best over rice?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image_url: 'http://placecage.com/250/249',
        post_time: Date.now(),
        poster: 'pm_me_ur_cat_pics',
        comments: [
          {
            commenter: 'bill_clinton',
            comment: 'Obviously the ole rice and beans!'
          }
        ]
      },
      {
        id: 3,
        score: -14,
        title: 'How do you write an AngularJS page?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image_url: 'http://placecage.com/251/250',
        post_time: 1476385119000,
        poster: 'bill_clinton',
        comments: []
      }
    ]
  });

}());
