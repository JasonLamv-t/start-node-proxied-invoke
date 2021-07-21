module.exports.handler = function(event, context, callback) {
  console.log('Hello');
  console.log('Serverless Devs');
  callback(null, 'Hello Serverless Devs');
};
