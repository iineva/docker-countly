var countlyConfig = {
    mongodb: {
        host: process.env.MONGO_HOST || "localhost",
        db: process.env.MONGO_DBNAME || "countly",
        port: process.env.MONGO_PORT || 27017,
        max_pool_size: process.env.MONGO_MAX_POLL_SIZE || 500,
    //username: test,
    //password: test,
        //mongos: false,
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
    replicaName: "test",
        db: "countly",
    username: test,
    password: test,
        max_pool_size: 1000,
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
    api: {
        port: process.env.API_PORT || 3001,
        host: process.env.API_HOST || "localhost",
        max_sockets: process.env.API_MAX_SOCKETS || 1024
    },
    path: "",
    logging: {
        info: ["jobs", "push"],
        default: "warn"
    }
};

if (process.env.MONGO_URL) {
  countlyConfig.mongodb = process.env.MONGO_URL;
}

// Set your host IP or domain to be used in the emails sent
// countlyConfig.host = "YOUR_IP_OR_DOMAIN";

module.exports = countlyConfig;
