var countlyConfig = {
    mongodb: {
        host: process.env.MONGO_HOST || "localhost",
        db: process.env.MONGO_DBNAME || "countly",
        port: process.env.MONGO_PORT || 27017,
        max_pool_size: process.env.MONGO_MAX_POLL_SIZE_FORONTEND || 10,
        //username: test,
        //password: test,
        /*
        dbOptions:{
            //db options
            native_parser: true
        },
        serverOptions:{
            //server options
            ssl:false
        }
        */
    },
    /*  or for a replica set
    mongodb: {
        replSetServers : [
            '192.168.3.1:27017',
            '192.168.3.2:27017'
        ],
        db: "countly",
    replicaName: "test",
    username: test,
    password: test,
        max_pool_size: 10,
        dbOptions:{
            //db options
            native_parser: true
        },
        serverOptions:{
            //server options
            ssl:false
        }
    },
    */
    /*  or define as a url
  //mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]
  mongodb: "mongodb://localhost:27017/countly",
    */
    web: {
        port: process.env.WEB_PORT || 6001,
        host: process.env.WEB_HOST || "localhost",
        use_intercom: process.env.WEB_USE_INTERCOM || true
    },
  path: "",
  cdn: ""
};

if (process.env.MONGO_URL) {
  countlyConfig.mongodb = process.env.MONGO_URL;
}


module.exports = countlyConfig;
