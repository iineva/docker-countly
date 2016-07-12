# countly-docker

Countly docker image with external mongodb support

Example:

```
docker run \
    -d \
    -e MONGO_URL=mongodb://db1.mongo.local,db2.mongo.local/countly?replicaSet=replicaName \
    ineva/countly
```


Example2:

```
docker run -d \
  --name=countly \
  --restart=always \
  --link=mongo \
  -e MONGO_URL="mongodb://mongo/countly" \
  -p 9006:80 \
  ineva/countly:16.06
```