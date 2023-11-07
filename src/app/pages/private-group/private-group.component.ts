import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-private-group',
  templateUrl: './private-group.component.html',
  styleUrls: ['./private-group.component.scss']
})
export class PrivateGroupComponent {
  groupId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.groupId = params.get('groupId');
      // Now you can use this.groupId to load the specific group data
    });
  }
}
