const redis = require("redis");

// Default: localhost:6379
const client = redis.createClient({
  host: "localhost",
  port: 6379,
});

client.on("error", (error) => {
  console.error(error);
});

// Publish message to a channel
// We can do this from any client
client.publish("nodejs-redis", "Hello from publisher", (e, number) => {
  if (e) {
    console.error(e);
  }
  console.log(`Sended to ${number}`);
});
