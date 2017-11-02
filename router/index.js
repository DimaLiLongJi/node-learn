const service = require('./service');
const router = require('./router');

service.start(router.route);
