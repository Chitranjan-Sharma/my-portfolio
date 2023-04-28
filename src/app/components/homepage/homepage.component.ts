import { Component } from '@angular/core';
import { ProjectData } from 'src/app/models/project-data';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  constructor(public api: ApiService) {}
}
