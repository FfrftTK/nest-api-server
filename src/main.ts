import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { grpcClientOptions } from "./microservices/grpc/grpc.options";
import { mqttClientOptions } from "./microservices/mqtt/mqtt.options";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(grpcClientOptions);
  app.connectMicroservice(mqttClientOptions);
  await app.startAllMicroservicesAsync();
  await app.listen(3000);
}
bootstrap().catch();
