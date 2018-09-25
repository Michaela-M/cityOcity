exports.DATABASE_URL = process.env.DATABASE_URL ||
                      'mongodb://User:Password20182@ds111963.mlab.com:11963/cityodenver';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL ||
                      'mongodb://localhost/test-restaurants-app';
exports.PORT = process.env.PORT || 8080;