const redis = require("redis");

// Default: localhost:6379
const client = redis.createClient({
  host: "localhost",
  port: 6379,
});

client.on("error", (error) => {
  console.error(error);
});

// Set a key
client.set("user_name", "mehmet", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Set user_name mehmet: ", message);
});

// Append a key
// After append it will be mehmetsezer

client.append("user_name", "sezer", (error, message) => {
  if (error) {
    console.error(error);
  }
  //message will be length of last value
  console.log("Append user_name sezer: ", message);
});

// Get a key
client.get("user_name", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Get user_name: ", message);
});

// Key exists check
client.exists("user_name", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Exists user_name: ", message);
});

// Delete a key
client.del("user_name", (error, message) => {
  if (error) {
    console.error(error);
  }
  console.log("Delete user_name: ", message);
});

// Pub-Sub example
client.on("message", (channel, message) => {
  console.log("Coming message channel is: ", channel);
  console.log("Message: ", message);
});

// Subscribe to a channel
client.subscribe("nodejs-redis");
