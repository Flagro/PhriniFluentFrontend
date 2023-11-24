import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { WordGroupService } from '../../services/word-groups.service';
import { WordGroup } from '../../models/word-group.model';

@Component({
  selector: 'app-word-groups',
  templateUrl: './word-groups.component.html',
  styleUrls: ['./word-groups.component.scss']
})
export class WordGroupsComponent implements OnInit {
  publicWordGroups: WordGroup[] = [];
  privateWordGroups: WordGroup[] = [];
  isLoggedIn = false;

  constructor(private authService: AuthService, private wordGroupService: WordGroupService) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.loadWordGroups();
  }

  loadWordGroups() {
    this.wordGroupService.getPublicWordGroups('en-us').subscribe(groups => {
      this.publicWordGroups = groups;
    });

    if (this.isLoggedIn) {
      this.wordGroupService.getPrivateWordGroups('en-us').subscribe(groups => {
        this.privateWordGroups = groups;
      });
    }
  }
}
