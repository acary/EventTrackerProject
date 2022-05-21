import { Component, OnInit } from '@angular/core';
import { LaunchEvent } from 'src/app/models/launch-event';
import { LaunchEventService } from 'src/app/services/launch-event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  launchEvents: LaunchEvent[] = [];

  newLaunchEvent: LaunchEvent = new LaunchEvent();

  selected: LaunchEvent | null = null;

  editEvent: LaunchEvent | null = null;

  constructor(
    private launchEventService: LaunchEventService
  ) { }

  ngOnInit(): void {
    this.reload();
  }

  submitEvent() {
    console.log('Submit event mocked...');
  }

  reload(): void {
    this.launchEventService.index().subscribe({
      next: launchEvents => {
        this.launchEvents = launchEvents;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  displayEvent(launchEvent: LaunchEvent): void {
    this.selected = launchEvent;
  }

  displayAll(): void {
    this.selected = null;
    this.editEvent = null;
  }

  setEditEvent(launchEvent: LaunchEvent): void {
    this.editEvent = launchEvent;
  }

  cancelEdit = () => {
    this.editEvent = null;
  }

  saveEdit = (event: LaunchEvent) => {
    console.log(event);
    this.editEvent = null;
    this.displayEvent(event);
  }

  createEvent(event: LaunchEvent): void {
    this.launchEventService.create(event).subscribe({
      next: event => {
        console.log("Created successfully: " + event.id);
        this.launchEvents.push(event);
        this.newLaunchEvent = new LaunchEvent();
        this.reload();
      },
      error: (err) => {
        console.error('Error creating event: ', err);
      }
    })
  }

  updateEvent = (id: number, event: LaunchEvent) => {
    console.log(id);
    console.log(event);
    this.launchEventService.update(id, event).subscribe(
      {
        next: event => {
          this.selected = null;
          this.editEvent = null;
          this.reload();
        },
        error: err => {
          console.error('Error updating event: ', err);
        }
      }
    );
  }

  deleteEvent(id: number) {
    this.launchEventService.destroy(id).subscribe({
      next: () => {
        console.log("Deleted successfully: " + id);
        this.reload();
        this.selected = null;
      },
      error: (err) => {
        console.error('Error deleting event: ', err);
      }
    });
  }

}
