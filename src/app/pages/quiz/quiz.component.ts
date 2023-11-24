import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordService } from '../../services/words.service';
import { Word } from '../../models/word.model';
import { WordGroup } from '../../models/word-group.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  word: Word | null = null;
  wordGroup: WordGroup | null = null;
  userInput: string = '';

  constructor(
    private route: ActivatedRoute,
    private wordService: WordService
  ) { }

  ngOnInit(): void {
    const groupIdParam = this.route.snapshot.paramMap.get('group_id');
    if (groupIdParam) {
      const groupId = +groupIdParam;
      this.fetchRandomWord(groupId);
      // Fetch word group details as needed
    } else {
      // Handle the case where groupId is null
      // For example, redirecting to a 'not found' page or showing an error message
      console.error('Group ID is missing');
      // Redirect to home or another appropriate page
      window.location.href = '/';
    }
  }

  fetchRandomWord(groupId: number): void {
    this.wordService.getRandomWord(groupId).subscribe(data => {
      this.word = data;
    });
  }

  checkAnswer(): void {
    // Implement your logic to check the answer
    console.log(this.userInput); // For now, just log the input
  }
}
