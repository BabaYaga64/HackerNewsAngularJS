hackerNews.factory('PostsFactory', function PostsFactory() {
    var factory = {};
    factory.posts = [];

    factory.addPost = function() {
        factory.posts.push({ title: factory.postTitle, link: factory.postLink, ranking: 0, id: factory.posts.length + 1, comments: [], date: new Date(), timeLife: 3 });
        factory.postTitle = null;
        factory.postLink = null;
    };

    factory.findById = function(collection, id) {
        for (var i= 0; i < factory.posts.length; i++) {
            if (factory.posts[i].id == id) {
                return factory.posts[i];
            }
        }
        return null;
    };

    factory.raiseRank = function(item) {
        item.ranking += 1;
    };


    // var Timer = setInterval(function () {factory.postStatus()}, 2000);
    //
    // factory.postStatus = function() {
    //     console.log('running postStatus()...')
    //     console.log(this.posts);
    //     for (var i = 0; i < this.posts.length; i++) {
    //         if (this.posts[i].timeLife !== 0) {
    //             console.log('this post is not dead yet!');
    //             this.posts[i].timeLife -= 1;
    //         } else {
    //             console.log('well, all good things must come to an end');
    //             this.posts.splice(i, 1);
    //             console.log(this.posts);
    //         }
    //     }
    // };


    return factory;
});
