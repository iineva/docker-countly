# countly-docker

Countly docker image with external mongodb support

Example:
```
docker run \
    -d \
    -e MONGO_URL=mongodb://db1.mongo.local,db2.mongo.local/countly?replicaSet=replicaName \
    ineva/countly
```
