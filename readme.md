// Need to add RabbitMQ image in docker and config it
--> select image from docker hub (3.12.13-management)
--> open command prompt
--> docker pull rabbitmq:3.12.13-management
--> docker run -d --hostname rabbit --name rabbit-server -p 15672:15672 -p 5672:5672 rabbitmq:3.12.13-management

// Create exchange
// Create other microservices

//Use postman collection
