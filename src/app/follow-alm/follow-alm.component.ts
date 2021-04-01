import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-follow-alm',
  templateUrl: './follow-alm.component.html',
  styleUrls: ['./follow-alm.component.css']
})
export class FollowAlmComponent implements OnInit {

  constructor() { }
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  
  ngOnInit(): void {
  }

}
