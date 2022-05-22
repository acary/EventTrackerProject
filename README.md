# EventTrackerProject

### Description

LaunchEvent is an event service that tracks upcoming digital token launches. Users can create a "Launch Event" that includes information such as title, description, date, cover image and contact email, and project links.

The application consists of an Angular (13.3) frontend with Spring Boot API and Java Persistence Application (JPA) with a MySQL database.

### User Functionality:
- View all launch events
- Create/View/Edit/Delete event

## Screenshots

**Event List**

<img width="1307" alt="event-list" src="https://user-images.githubusercontent.com/1522180/169719444-4dd3702b-ab14-47a8-83c0-24dcdd38d045.png">

**Launch Event**

<img width="1308" alt="launch-event-item" src="https://user-images.githubusercontent.com/1522180/169718911-f8370705-2e0a-4456-a0d0-7919cfd19df2.png">

**Create Event**

<img width="691" alt="create-event" src="https://user-images.githubusercontent.com/1522180/169718985-277dac77-f684-4558-ad4b-131e5c3b4b91.png">

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
- Spring Boot
- Java Persistence Application (JPA)
- MySQL
- JavaSE-1.8
- Gradle
- Eclipse IDE

### Author

- Andy Cary (@acary)
