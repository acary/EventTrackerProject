import { Component, OnInit } from '@angular/core';
import { LaunchEvent } from 'src/app/models/launch-event';
import { LaunchEventService } from 'src/app/services/launch-event.service';
import { DefaultPipe } from 'src/app/pipes/default.pipe';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  defaultImage: string = 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea';

  createFormVal() {
    this.createEventForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      eventDate: ['', Validators.required],
      contactEmail: ['', Validators.required],
      eventWebsite: [''],
      coverImage: [''],
      sourceAnnouncement: [''],
      blockchain: [''],
      marketplace: [''],
      marketplaceUrl: [''],
      categories: [''],
      projectTwitter: [''],
      projectDiscord: [''],
    });
  }

  createEventForm = new FormGroup({
    title: new FormControl()
  });

  constructor(
    private launchEventService: LaunchEventService,
    private defaultPipe: DefaultPipe,
    private fb: FormBuilder
  ) {
    this.createFormVal();
  }

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

  getNumEvents = () => {
    let result = this.launchEvents.length;
    return result;
  }

  checkBacklog() {
    let count = this.getNumEvents();
    if (count > 50) { return 'bg-danger'; }
    else if (count >= 20) { return 'bg-warning'; }
    else return 'bg-success';
  }

  displayEvent(launchEvent: LaunchEvent): void {
    this.selected = launchEvent;
    if (this.selected.coverImage === '') {
      this.selected.coverImage = this.defaultPipe.transform(this.defaultImage);
    }
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
    this.launchEventService.create(event).subscribe({
      next: event => {
        console.log("Created successfully: " + event.id);
        this.launchEvents.push(event);
        this.newLaunchEvent = new LaunchEvent();
        this.reload();
        this.toggleAllEvents();
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
