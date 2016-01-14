# UptimeTest

A simple NodeJS app that continuously checks for network connectivity. Useful in offices with unreliable internet.

## Installation

### Local

1. Clone this repo
2. `npm install`
3. `npm start`

### Heroku

Simply click: [![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/isisbusapps/UptimeTest) or follow these manual steps:

1. Install the [Heroku Toolbelt](https://toolbelt.heroku.com/)
2. `git clone git@github.com:isisbusapps/UptimeTest.git`
3. `cd UptimeTest`
4. `heroku create`
6. `heroku buildpacks:set heroku/nodejs`
7. `git push heroku master`

