#ember-wp-green

*a fun ember project that utilizes the wordpress json api plugin*

# Install Your Development Evironment

```
cd <this-repository>
git clone --recursive git@github.com:Chassis/Chassis.git server
cd server
vagrantup
vagrant ssh -c 'cd /vagrant && wp plugin install json-rest-api && wp plugin activate json-rest-api'
vagrant ssh -c "cd /vagrant && wp rewrite structure '/%postname%/'"
```