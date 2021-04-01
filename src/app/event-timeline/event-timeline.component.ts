import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-timeline',
  templateUrl: './event-timeline.component.html',
  styleUrls: ['./event-timeline.component.css']
})
export class EventTimelineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * name
   */
  public eventTimeline: any = [
    {
      AddressTitle: "Assembly at Foley Square",
      AddressLink: "http://maps.google.com/?q=Foley Square, Lafayette Street Worth Street, Centre St, New York, NY 10013",
      Time: "12:30 PM",
    },
    {
      AddressTitle: "March to City Hall Park",
      AddressLink: "http://maps.google.com/?q=City Hall Park, Broadway &, Chambers St, New York, NY 10007",
      Time: "2:00 PM",
    },
    {
      AddressTitle: "March Across Brooklyn Bridge",
      AddressLink: "http://maps.google.com/?q=Brooklyn Bridge, New York, NY 10038",
      Time: "2:15 PM",
    },
    {
      AddressTitle: "Assembly at Cadman Plaza",
      AddressLink: "http://maps.google.com/?q=Cadman Plaza Park, Cadman Plaza E, Brooklyn, NY 11201",
      Time: "3:00 PM",
    }
  ];
}
