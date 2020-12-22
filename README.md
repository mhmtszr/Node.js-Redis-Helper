# Node.js Redis Helper

Example usage of Redis on Node.js.

### Install Redis from Docker

Needed [Docker](https://www.docker.com/products/docker-desktop).

Pull Redis Image.

```
docker pull redis
```

Run Redis and Bind to Localport 6379.

```
docker run --rm -i -t -p 6379:6379 redis
```

### Run the Node.js Code

Get packages.

```
npm install
```

Run app.js and see the output of some CRUD operations.

```
npm start
```

Run producer.js to test Pub/Sub Model.

```
npm producer
```
