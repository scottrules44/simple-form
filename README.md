# simple-form
Simple form project with angular and spring


# Client

```
cd client && yarn install && yarn start
```

# Server

```
cd server && ./mvnw spring-boot:run   
```

Note that the server uses Java 21 to ensure long terms support

Make sure you have mysql database running, change inside 'application.properties'
Using table 'simple_form'


# To Do

- Prevent same customer from being entered
- Add search button and handle exccess queries
