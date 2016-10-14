(function() {
  'use strict';

  var app = angular.module('redditClone', []);
  $('select').material_select();

  app.filter('timeSince', function() {
    return (input) => { return moment(`${input}`, 'x').fromNow(); };
  });

  app.controller('formCtrl', function() {
    this.showNewPostForm = false;

    this.toggleFormShow = function() {
      this.showNewPostForm = !this.showNewPostForm;
    }

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

    this.addPost = function(newPostForm) {
      this.posts.push({
        id: this.posts[this.posts.length -1].id + 1,
        score: 1,
        title: this.postTitle,
        content: this.postDescription,
        image_url: this.imageURL,
        post_time: Date.now(),
        poster: this.postUsername,
        comments: []
      });

      this.postTitle = '';
      this.imageURL = '';
      this.postUsername = '';
      this.postDescription = '';
      newPostForm.$setPristine();
      Materialize.toast('Post successfully added!', 4000);
    }

    this.commentUsername = '';
    this.commentComment = '';
    this.showNewPostForm = false;

    this.postTitle = '';
    this.imageURL = '';
    this.postUsername = '';
    this.postDescription = '';

    this.sort = '-score';

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
        score: 5,
        title: 'What tastes the best over rice?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image_url: 'http://placecage.com/358/323',
        post_time: Date.now(),
        poster: 'PM_ME_YOUR_CAT_PIX',
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
      },
      {
        id: 5,
        score: 2,
        title: 'What\'s the best way to slay a vampire?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image_url: 'http://placecage.com/248/250',
        post_time: 1476411599000,
        poster: 'buffy_summers',
        comments: [
          {
            commenter: 'willow',
            comment: 'Stab it with mr. pointy!'
          },
          {
            commenter: 'giles',
            comment: 'BUNNIES. It must be bunnies.'
          },
          {
            commenter: 'cordelia',
            comment: 'Freak.'
          }
        ]
      },
      {
        id: 6,
        score: 6,
        title: 'Does anyone have a good lemonade recipe?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image_url: 'https://media.giphy.com/media/3o85xGocUH8RYoDKKs/giphy.gif',
        post_time: 1476412699000,
        poster: 'kween_bey',
        comments: []
      },
      {
        id: 7,
        score: -1,
        title: 'Do you know where to find marble conference tables?',
        content: 'I\'m looking to have a conference... not until I get a table though.',
        image_url: 'https://i.ytimg.com/vi/v5QfXIqbyXg/hqdefault.jpg',
        post_time: 1476512593000,
        poster: 'not_kanye_west',
        comments: [
          {
            commenter: 'kwest',
            comment: 'whatever happened to my antique fish tank?'
          }
        ]
      },
      {
        id: 8,
        score: 9,
        title: 'Haaaaave you met ted?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image_url: 'https://pbs.twimg.com/profile_images/2925485686/23b6d30cdb4e3b6dca5ead7b351f06d1_400x400.jpeg',
        post_time: 1476511491020,
        poster: 'barney_is_awesome',
        comments: [
          {
            commenter: 'mr_mosby',
            comment: 'This line never works...'
          }
        ]
      }
    ]
  });

}());
