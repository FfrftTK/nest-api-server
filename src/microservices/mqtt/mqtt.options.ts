import { ClientOptions, Transport } from "@nestjs/microservices";
export const mqttClientOptions: ClientOptions = {
  transport: Transport.MQTT,
  options: {
    host: "mqtt.nm.cs.uec.ac.jp",
    port: 8883,
  },
};
