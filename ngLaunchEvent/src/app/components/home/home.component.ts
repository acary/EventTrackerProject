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

  constructor(
    private launchEventService: LaunchEventService
  ) { }

  ngOnInit(): void {
    this.reload();
    if(this.launchEvents) {
      console.log(this.launchEvents);
    }
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

}
