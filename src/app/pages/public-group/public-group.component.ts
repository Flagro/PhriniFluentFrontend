import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public-group',
  templateUrl: './public-group.component.html',
  styleUrls: ['./public-group.component.scss']
})
export class PublicGroupComponent {
  groupId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.groupId = params.get('groupId');
      // Now you can use this.groupId to load the specific group data
    });
  }
}
