const {
  EventHubConsumerClient,
  earliestEventPosition,
} = require("@azure/event-hubs");
const { ContainerClient } = require("@azure/storage-blob");
const {
  BlobCheckpointStore,
} = require("@azure/eventhubs-checkpointstore-blob");
const sendUpdate = require('../bin/www');

const connectionString = "Targil-eventhub";
const eventHubName = "targil";
const consumerGroup = "$Default"; // name of the default consumer group
const storageConnectionString = "Endpoint=sb://targil-eventhub.servicebus.windows.net/;SharedAccessKeyName=core-listen;SharedAccessKey=PRCK/SePp/hswyCy3ju1u0x7Vrmay2t6n+AEhB6Hm38=;EntityPath=targil";
const containerName = "targil";

async function main() {
  // Create a blob container client and a blob checkpoint store using the client.
  console.log(storageConnectionString)
  const containerClient = new ContainerClient(
    storageConnectionString,
    containerName
  );
  const checkpointStore = new BlobCheckpointStore(containerClient);

  // Create a consumer client for the event hub by specifying the checkpoint store.
  const consumerClient = new EventHubConsumerClient(
    consumerGroup,
    connectionString,
    eventHubName,
    checkpointStore
  );

  // Subscribe to the events, and specify handlers for processing the events and errors.
  const subscription = consumerClient.subscribe(
    {
      processEvents: async (events, context) => {
        if (events.length === 0) {
          console.log(
            `No events received within wait time. Waiting for next interval`
          );
          return;
        }

        for (const event of events) {
          console.log(
            `Received event: '${event.body}' from partition: '${context.partitionId}' and consumer group: '${context.consumerGroup}'`
          );
          sendUpdate(event.body);
        }
        // Update the checkpoint.
        await context.updateCheckpoint(events[events.length - 1]);
      },

      processError: async (err, context) => {
        console.log(`Error : ${err}`);
      },
    },
    { startPosition: earliestEventPosition }
  );

  // After 30 seconds, stop processing.
  await new Promise((resolve) => {
    setTimeout(async () => {
      await subscription.close();
      await consumerClient.close();
      resolve();
    }, 30000);
  });
}

module.exports = main;
