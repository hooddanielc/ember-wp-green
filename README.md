# ember-wp-green

*a fun ember project that utilizes the wordpress json api plugin*

# Install Your Development Evironment

Make sure to build the static website using ember cli first. This will build the static website in the /client/dist folder. You need to do this because the vm syncs this folder to /var/www

```
cd <this-repository>/client
ember build
```

Then go ahead and run vagrant

```
cd <this-repository>/server
vagrant up
```

You may now visit site wordpress on your host machine at http://localhost/wordpress/wp-admin and ember app at http://localhost

```
Wordpress Username: admin
Wordpress Password: password
Wordpress Database: wordpress
Wordpress Database User: root
Wordpress Database Pass: password
```

On a gruesome note, it turns out we are not able to use a lot of the features in the json wp-api. The plugin only supports nested urls in the endpoints. Ember does not plan to support this, nor should we try to fiddle with trying to create a custom adapter that probably will not be maintained. The best solution is to create our own wordpress plugin that serves an API that Ember supports. IMHO, I prefer the structure emberjs supports.

Have fun!
