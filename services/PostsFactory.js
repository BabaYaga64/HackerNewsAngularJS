hackerNews.factory('PostsFactory', function PostsFactory() {
    var factory = {};
    factory.posts = [];

    factory.addPost = function() {
        factory.posts.push({ title: factory.postTitle, link: factory.postLink, ranking: 0, id: factory.posts.length + 1, comments: [] });
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

    return factory;
});
