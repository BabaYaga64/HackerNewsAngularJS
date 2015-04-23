hackerNews.controller('CommentsCtrl', function CommentsCtrl($scope, $stateParams, PostsFactory) {
    $scope.post = PostsFactory.findById(PostsFactory.posts, $stateParams.postId)
  $scope.addComment = function() {
      $scope.post.comments.push({ description: $scope.commentDescription, cUserName : $scope.cUserName});
      $scope.commentDescription = null;
      $scope.cUserName = null;
  }
});
