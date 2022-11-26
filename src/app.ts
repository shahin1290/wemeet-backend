import express, { Express } from "express";
import { WeMeetServer } from "./setupServer";

class Application {
  public initialize(): void {
    const app: Express = express();
    const server: WeMeetServer = new WeMeetServer(app);
    server.start();
  }
}

const application: Application = new Application();

application.initialize();
