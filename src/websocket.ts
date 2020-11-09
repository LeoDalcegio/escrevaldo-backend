import socketio from "socket.io";
import { Server } from "http";

interface IConnection {
  id: string;
  room: string;
}

export class WebSocket {
  private connections: IConnection[] = [];
  private io: socketio.Server;

  setupWebsocket(server: Server) {
    this.io = socketio(server);

    this.io.on("connection", (socket: socketio.Socket) => {
      const { room } = socket.handshake.query;

      const user = {
        id: socket.id,
        room,
      };

      this.connections.push(user);

      socket.on("send-message", (data: string) => {
        const filteredConnections = this.findConnections(room).filter(
          (connection) => connection.id != socket.id
        );

        if (user) {
          this.sendMessage(filteredConnections, "update-text", data);
        }
      });

      socket.on("disconnect", () => {
        const index = this.connections.findIndex(
          (connection) => connection.id === socket.id
        );

        this.connections.splice(index);
      });
    });
  }

  sendMessage(to: IConnection[], message: string, data: string) {
    to.forEach((connection) => {
      this.io.to(connection.id).emit(message, data);
    });
  }

  findConnections(roomName: string): IConnection[] {
    return this.connections.filter(
      (connection) => connection.room === roomName
    );
  }
}
