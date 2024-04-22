//Step 1 : connect to rabbitmq server
//Step 2 : create a new channel
//Step 3 : create the exchange
//Step 4 : create the queue
//Step 5 : bind the queue to the exchange
//Step 6 : consume the message from the queue

const amqp = require("amqplib");

async function consumeMessages() {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  await channel.assertExchange("logExchange", "direct");

  // Newly creates queue has name InfoQueue...
  // Bound to exchange called logExchange...
  // With routing key Info
  //! Step 4
  const queue = await channel.assertQueue("InfoQueue");
  //! Step 5
  await channel.bindQueue(queue.queue, "logExchange", "Info");

  //! Step 6
  channel.consume(queue.queue, (message) => {
    const data = JSON.parse(message.content);
    console.log(data);
    channel.ack(message);
  });
}

consumeMessages();
