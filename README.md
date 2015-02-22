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

The server is meant for manual testing on your local machine. I would like to use a fixture adapter to do most of the client side development, but would also like the luxury of finding out what to mock in a fast way. If you rebuild the ember application, it will remove the `wordpress` folder, forcing you to ssh into the vm and running the following command to install wordpress again...

 ```
 sudo cp -a /home/vagrant/wordpress /var/www/wordpress
 ```
 