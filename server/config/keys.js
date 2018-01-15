// Figure out credentials to return:

//Happens automatically on Heroku
if (process.env.NODE_ENV === 'production') {
    //production
    module.exports = require('./prod');
} else {
    //in dev
    module.exports = require('./dev');
}