import { Component, OnInit } from '@angular/core';
import { LaunchEvent } from 'src/app/models/launch-event';
import { LaunchEventService } from 'src/app/services/launch-event.service';
import { DefaultPipe } from 'src/app/pipes/default.pipe';

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

  createForm: boolean = false;

  showAllEvents: boolean = true;

  constructor(
    private launchEventService: LaunchEventService,
    private defaultPipe: DefaultPipe
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

  showCreateForm = () => {
    this.createForm = !this.createForm;
    this.showAllEvents = !this.showAllEvents;
  }

  toggleAllEvents = () => {
    this.showAllEvents = !this.showAllEvents;
    this.createForm = !this.createForm;
  }

  createEvent(event: LaunchEvent): void {
    if (event.coverImage === '') {
      event.coverImage = this.defaultPipe.transform('https://images.unsplash.com/photo-1459749411175-04bf5292ceea');
    }
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
