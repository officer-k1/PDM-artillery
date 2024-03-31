const { Kafka } = require("kafkajs");
const sendUpdate = require('../bin/www');

const clientId = "my-app";
const brokers = ["kafka1:9092", "kafka2:9092"];

const kafka = new Kafka({
  clientId: clientId,
  brokers: brokers,
});

const startConsumer = async (groupId, topic) => {
  const consumer = kafka.consumer({ groupId: groupId });

  await consumer.connect();
  await consumer.subscribe({ topic: topic, fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      sendUpdate(message);
      console.log({
        value: message.value.toString(),
      });
    },
  });
};

module.exports = startConsumer;
