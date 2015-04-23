hackerNews.controller('PostsCtrl', function PostsCtrl($scope, PostsFactory) {
  $scope.posts = PostsFactory.posts;
  $scope.PostsFactory = PostsFactory;

  // var Timer = setInterval(function () {$scope.postStatus()}, 2000);

  // $scope.deletePost = function(post) {
  //     var index = this.posts.indexOf(post);
  //     this.posts.splice(index, 1);
  // };

  $scope.postIsStillRelevant = function(post) {
      console.log("hello");
      var timeElapsed = new Date() - post.date;
      return timeElapsed < 10000;
  };

  // $scope.postStatus = function() {
  //     for (var i = 0; i < this.posts.length; i++) {
  //         if (this.posts[i].timeLife !== 0) {
  //             this.posts[i].timeLife -= 1;
  //         } else {
  //             var post = this.posts[i]
  //             this.deletePost(post);
  //         }
  //     }
  // };

});
