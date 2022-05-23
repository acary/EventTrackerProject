# EventTrackerProject

### Description

LaunchEvent is an event service that tracks upcoming digital token launches. Users can create a "Launch Event" that includes information such as title, description, date, cover image and contact email, and project links.

The application consists of an Angular (13.3) frontend with Spring Boot API and Java Persistence Application (JPA) with a MySQL database.

### User Functionality:
- View all launch events
- Create/View/Edit/Delete event

## Screenshots

**Event List**

<img width="1196" alt="upcoming-event" src="https://user-images.githubusercontent.com/1522180/169820877-9e9c0bdf-5f4c-427f-96df-f8575cd9cc70.png">

**Launch Event**

<img width="1308" alt="launch-event-item" src="https://user-images.githubusercontent.com/1522180/169718911-f8370705-2e0a-4456-a0d0-7919cfd19df2.png">

**Create Event**

<img width="692" alt="create-event" src="https://user-images.githubusercontent.com/1522180/169820938-ed919ab6-1453-41f8-bb60-3b252fa9a947.png">

**Edit Event**

<img width="689" alt="edit-event" src="https://user-images.githubusercontent.com/1522180/169718998-84e27f2a-2d85-4daf-9897-f75b532a64a1.png">

### API Routes
- `GET http://localhost:8082/api/index`
- `GET http://localhost:8082/api/events/1`
- `GET http://localhost:8082/api/events/1`
- `POST http://localhost:8082/api/events`
- `PUT http://localhost:8082/api/events/1`
- `DELETE http://localhost:8082/api/events/2`

### API Functionality:
- Show All Launch Events
- Search Launch Event By ID
- Search Launch Events By Keyword
- Add New Launch Events
- Update Launch Event
- Delete Launch Event

##### Running the program:
```
- * BACKEND:
- Import project into Spring Tool Suite (STS)
- Compile and run main (as Spring Boot App)
- Note: Must run MySQL with relevant database (launcheventdb) locally
- Runs on port 8082
- * FRONTEND:
- Run with: ng serve -o
- Runs on port 4201
```

### Technologies Used

- Angular 13.3
- VS Code
- Spring Boot
- Java Persistence Application (JPA)
- Spring Tool Suite (STS)
- MySQL
- MySQL Workbench
- JavaSE-1.8
- Gradle

### Author

- Andy Cary (@acary)
