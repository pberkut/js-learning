/* worker.js */
const workerResult = 'Worker result';

// Receive message from main file
self.onmessage = function (e) {
  console.log(e.data);

  // Send message to main file
  self.postMessage(workerResult);
};
