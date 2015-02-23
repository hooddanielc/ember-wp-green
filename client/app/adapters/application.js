import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: "/wordpress/wp-json", // /wordpress?json_url=/posts
  // findAll: function (store, type, sinceToken) {
  //   return new Ember.RSVP.Promise(function (resolve, reject) {      
  //     setTimeout(function () {
  //       Ember.run(null, resolve, [
  //         {
  //             "ID": 1,
  //             "title": "Hello world!q",
  //             "status": "publish",
  //             "type": "post",
  //             "author": {
  //                 "ID": 1,
  //                 "name": "admin",
  //                 "slug": "admin",
  //                 "URL": "",
  //                 "avatar": "http:\/\/0.gravatar.com\/avatar\/c57c8945079831fa3c19caef02e44614&d=404&r=G",
  //                 "meta": {
  //                     "links": {
  //                         "self": "http:\/\/example.com\/wp-json\/users\/1",
  //                         "archives": "http:\/\/example.com\/wp-json\/users\/1\/posts"
  //                     }
  //                 },
  //                 "first_name": "",
  //                 "last_name": ""
  //             },
  //             "content": "<p>Welcome to WordPress. This is your first post. Edit or delete it, then start blogging!<\/p>\n",
  //             "parent": 0,
  //             "link": "http:\/\/example.com\/2013\/06\/02\/hello-world\/",
  //             "date": "2013-06-02T05:28:00+10:00",
  //             "modified": "2013-06-30T13:56:57+10:00",
  //             "format": "standard",
  //             "slug": "hello-world",
  //             "guid": "http:\/\/example.com\/?p=1",
  //             "excerpt": "",
  //             "menu_order": 0,
  //             "comment_status": "open",
  //             "ping_status": "open",
  //             "sticky": false,
  //             "date_tz": "Australia\/Brisbane",
  //             "date_gmt": "2013-06-02T05:28:00+00:00",
  //             "modified_tz": "Australia\/Brisbane",
  //             "modified_gmt": "2013-06-30T03:56:57+00:00",
  //             "password": "",
  //             "post_meta": [
  //             ],
  //             "meta": {
  //                 "links": {
  //                     "self": "http:\/\/example.com\/wp-json\/posts\/1",
  //                     "author": "http:\/\/example.com\/wp-json\/users\/1",
  //                     "collection": "http:\/\/example.com\/wp-json\/posts",
  //                     "replies": "http:\/\/example.com\/wp-json\/posts\/1\/comments",
  //                     "version-history": "http:\/\/example.com\/wp-json\/posts\/1\/revisions"
  //                 }
  //             },
  //             "featured_image": null,
  //             "terms": {
  //                 "category": {
  //                     "ID": 1,
  //                     "name": "Uncategorized",
  //                     "slug": "uncategorized",
  //                     "parent": null,
  //                     "count": 7,
  //                     "meta": {
  //                         "links": {
  //                             "collection": "http:\/\/example.com\/wp-json\/taxonomies\/category\/terms",
  //                             "self": "http:\/\/example.com\/wp-json\/taxonomies\/category\/terms\/1"
  //                         }
  //                     }
  //                 }
  //             }
  //         },
  //         {
  //             "ID": 2,
  //             "title": "Hello world!q",
  //             "status": "publish",
  //             "type": "post",
  //             "author": {
  //                 "ID": 1,
  //                 "name": "admin",
  //                 "slug": "admin",
  //                 "URL": "",
  //                 "avatar": "http:\/\/0.gravatar.com\/avatar\/c57c8945079831fa3c19caef02e44614&d=404&r=G",
  //                 "meta": {
  //                     "links": {
  //                         "self": "http:\/\/example.com\/wp-json\/users\/1",
  //                         "archives": "http:\/\/example.com\/wp-json\/users\/1\/posts"
  //                     }
  //                 },
  //                 "first_name": "",
  //                 "last_name": ""
  //             },
  //             "content": "<p>Welcome to WordPress. This is your first post. Edit or delete it, then start blogging!<\/p>\n",
  //             "parent": 0,
  //             "link": "http:\/\/example.com\/2013\/06\/02\/hello-world\/",
  //             "date": "2013-06-02T05:28:00+10:00",
  //             "modified": "2013-06-30T13:56:57+10:00",
  //             "format": "standard",
  //             "slug": "hello-world",
  //             "guid": "http:\/\/example.com\/?p=1",
  //             "excerpt": "",
  //             "menu_order": 0,
  //             "comment_status": "open",
  //             "ping_status": "open",
  //             "sticky": false,
  //             "date_tz": "Australia\/Brisbane",
  //             "date_gmt": "2013-06-02T05:28:00+00:00",
  //             "modified_tz": "Australia\/Brisbane",
  //             "modified_gmt": "2013-06-30T03:56:57+00:00",
  //             "password": "",
  //             "post_meta": [
  //             ],
  //             "meta": {
  //                 "links": {
  //                     "self": "http:\/\/example.com\/wp-json\/posts\/1",
  //                     "author": "http:\/\/example.com\/wp-json\/users\/1",
  //                     "collection": "http:\/\/example.com\/wp-json\/posts",
  //                     "replies": "http:\/\/example.com\/wp-json\/posts\/1\/comments",
  //                     "version-history": "http:\/\/example.com\/wp-json\/posts\/1\/revisions"
  //                 }
  //             },
  //             "featured_image": null,
  //             "terms": {
  //                 "category": {
  //                     "ID": 1,
  //                     "name": "Uncategorized",
  //                     "slug": "uncategorized",
  //                     "parent": null,
  //                     "count": 7,
  //                     "meta": {
  //                         "links": {
  //                             "collection": "http:\/\/example.com\/wp-json\/taxonomies\/category\/terms",
  //                             "self": "http:\/\/example.com\/wp-json\/taxonomies\/category\/terms\/1"
  //                         }
  //                     }
  //                 }
  //             }
  //         }
  //       ]);
  //     }, 1000);
  //   });
  // }
});
