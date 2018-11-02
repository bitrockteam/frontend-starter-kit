var env = process.env.NODE_ENV;
var envs = {
    production: 'production',
    development: 'development',
    local: 'local',
    test: 'test'
};
var isProd = function () { return env === envs.production; };
module.exports = { isProd: isProd, envs: envs, env: env };
