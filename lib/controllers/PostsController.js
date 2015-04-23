hackerNews.controller('PostsCtrl', function PostsCtrl($scope, PostsFactory) {
  $scope.posts = PostsFactory.posts;
  $scope.PostsFactory = PostsFactory;
});
