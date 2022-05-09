# EventTrackerProject

### Description

LaunchEvent is an event service that tracks upcoming digital token launches.

The application is made up of Spring Boot and Java Persistence Application (JPA) with a MySQL database.

### Routes
- `GET http://localhost:8082/api/index`
- `GET http://localhost:8082/api/events/1`
- `GET http://localhost:8082/api/events/1`
- `POST http://localhost:8082/api/events`
- `PUT http://localhost:8082/api/events/1`
- `DELETE http://localhost:8082/api/events/2`

### Functionality:
- Show All Launch Events
- Search Launch Event By ID
- Search Launch Events By Keyword
- Add New Launch Events
- Update Launch Event
- Delete Launch Event

##### Running the program:
```
- Import project into Spring Tool Suite (STS)
- Compile and run main (as Spring Boot App)
- Note: Must run MySQL with relevant database (launcheventdb) locally
```

### Technologies Used

- Spring Boot
- Java Persistence Application (JPA)
- MySQL
- JavaSE-1.8
  - Interfaces
  - Collections; List, ArrayList
- Eclipse IDE

### Author

- Andy Cary (@acary)
