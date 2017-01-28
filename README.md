# Spring Boot and Angular 2
Combining Angular2 and Spring Boot is a great way of getting up and running quickly with a new web application.

# Pre-requisites
1. excellent angular-cli tool
2. spring-boot cli tool

# Generating SPA Project
1. first create a Spring Boot web project either by starting from http://start.spring.io or using the following CLI command
$ spring init --dependencies=web <project.name>

2. now generate a Angular 2 project using the angular-cli
$ ng init

3. change the location where angular-cli builds the artifacts, edit angular-cli.json and modify outDir location to
/src/main/resources/static

4. now build the static content
$ ng build

5. and start up the Spring-Boot app
$ mvn spring-boot:run

6. And the Angular2 based UI should render cleanly!
http://localhost:8080
