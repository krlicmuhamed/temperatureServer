import { Server } from "actionhero";

module.exports = class TemperatureServer extends Server {
  constructor() {
    super();
    this.type = "protobufServer";

    this.attributes = {
      canChat: false,
      logConnections: true,
      logExits: true,
      sendWelcomeMessage: false,
      verbs: [],
    };
    // this.config will be set to equal config.servers[this.type]
  }

  initialize() {
    this.on("connection", (connection) => {});

    this.on("actionComplete", (data) => {});
  }

  start() {
    // this.buildConnection (data)
    // this.processAction (connection)
    // this.processFile (connection)
  }

  stop() {}

  sendMessage(connection, message, messageId) {}

  sendFile(connection, error, fileStream, mime, length, lastModified) {}

  goodbye(connection) {}
};