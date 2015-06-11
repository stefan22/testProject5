#testProject4  -- ANGULAR (practice round)

 > heroku app => http://githubprofiles.herokuapp.com/
 
##app deployed to heroku - pre-heroku is testProject3
 
 

need node and bower install

check by doing:
  node -v
  bower -v

then run:
  bower init

install packages:
  bower install jquery --save
  bower install bootstrap --save
  bower install angular --save
  bower install angular-resource --save

  The --save will add the package into your bower.json file as dependencies.
  Then when you clone your repo again you can do a bower install in exactly the
  same way as you bundle install with Ruby

  Now we don't really want to add bower_components into our repository -
  most people consider it bad practice.
  Because we don't want to commit those dependencies we need to add bower_components
  to our .gitignore file

  Setting up test environment

  we need to get our environment set up with some boilerplate:
    bower install angular-mocks --save-dev
    bower install angular-route --save-dev

  install test runner karma:
    install some packages, which we'll do via npm
      npm init
      add node_modules to your .gitignore

  Now let's install our node packages:

    npm install karma --save-dev
    npm install karma-jasmine karma-chrome-launcher karma-phantomjs-launcher --save-dev
    npm install -g karma-cli
    
    
    
    
  ![sample search](public/images/image.png)  
