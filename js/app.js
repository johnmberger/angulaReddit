(function() {
  'use strict';

  var app = angular.module('redditClone', ['ngAnimate']);
  $('select').material_select();

  app.filter('makeSortPretty', function() {
    return (input) => {
      if (input === '-score') {
        return 'Top Posts';
      } else if (input === 'score') {
        return 'Worst Posts';
      } else if (input === 'post_time') {
        return 'Oldest Posts';
      } else if (input === '-post_time') {
        return 'Recent Posts';
      } else if (input === '-title') {
        return 'Posts Z - A';
      } else {
        return 'Posts A - Z';
      }
    }
  });

  app.filter('timeSince', function() {
    return (input) => { return moment(`${input}`, 'x').fromNow(); };
  });

  app.directive('time',
    ['$timeout', '$filter', function($timeout, $filter) {

      return function(scope, element, attrs) {
        var time = attrs.time;
        var timeoutId;
        var filter = $filter('timeSince');

        function updateTime() {
          element.text(filter(time));
        }

        function updateLater() {
          timeoutId = $timeout(function() {
            updateTime();
            updateLater();
          }, 10000);
        }

        element.bind('$destroy', function() {
          $timeout.cancel(timeoutId);
        });

        updateTime();
        updateLater();
      };
    }]
  );

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

    this.clearSearchForm = function() {
      this.search = '';
    }

    this.search = '';

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
        score: 7,
        title: 'Look at my kitten! Isn\'t it cute?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image_url: 'https://placekitten.com/400/400',
        post_time: Date.now() - 21600000, // 6 hours ago
        poster: 'toughguy123',
        comments: [
          {
            commenter: 'dudeman6',
            comment: 'What a cutie!'
          },
          {
            commenter: 'troll1',
            comment: 'I want to smash that thing with a rock.'
          }
        ]
      }, {
        id: 2,
        score: 5,
        title: 'Where can I find PBR in Denver, CO?',
        content: 'Mustache sriracha gastropub man bun fashion axe pork belly. Master cleanse tacos heirloom drinking vinegar gluten-free green juice, etsy mumblecore. Food truck banjo church-key hot chicken subway tile mixtape selvage quinoa plaid, gentrify marfa heirloom. Tbh gluten-free subway tile cray, lyft cornhole cold-pressed glossier polaroid synth banjo normcore crucifix.',
        image_url: 'https://baconmockup.com/358/323',
        post_time: Date.now() - 300000, // five minutes ago
        poster: 'PM_ME_YOUR_CAT_PIX',
        comments: [
          {
            commenter: 'mustached_flanel',
            comment: 'If you ride your fixie up to Cap Hill, look near the vegan jean shorts shop'
          }
        ]
      },
      {
        id: 3,
        score: -14,
        title: 'AngularJS sucks!',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image_url: 'https://placebear.com/251/250',
        post_time: 1476385119000,
        poster: 'negative_nancy',
        comments: [
          {
            commenter: 'john_berger',
            comment: 'no it doesn\'t! This app is awesome.'
          }
        ]
      },
      {
        id: 5,
        score: 2,
        title: 'What\'s the best way to slay a vampire?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image_url: 'https://baconmockup.com/248/250',
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
        post_time: Date.now() - 400000, // seven minutes ago,
        poster: 'kween_bey',
        comments: []
      },
      {
        id: 7,
        score: -1,
        title: 'Do you know where to find marble conference tables?',
        content: 'I\'m looking to have a conference... not until I get a table though.',
        image_url: 'https://i.ytimg.com/vi/v5QfXIqbyXg/hqdefault.jpg',
        post_time: Date.now() - 1600000, // 27 minutes ago
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
        score: 3,
        title: 'Do you guys like magic?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image_url: 'https://pbs.twimg.com/profile_images/2925485686/23b6d30cdb4e3b6dca5ead7b351f06d1_400x400.jpeg',
        post_time: Date.now() - 100000, // 2 minutes ago
        poster: 'barney_is_awesome',
        comments: [
          {
            commenter: 'mr_mosby',
            comment: 'Not again...'
          }
        ]
      }
    ]
  });

}());
