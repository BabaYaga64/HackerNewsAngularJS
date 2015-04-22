var hackerNews = angular.module('hackerNews', ['ui.router']);

hackerNews.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '',
        templateUrl: 'partials/home.html'
    });

    $stateProvider.state('posts', {
        url: '/posts',
        templateUrl: 'partials/posts.html',
        controller: 'PostsCtrl'
    });

    $stateProvider.state('comments', {
        url: '/:postId',
        templateUrl: 'partials/comments.html',
        controller: 'CommentsCtrl'
    });
});
