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
    this.loadNewWord();
  }

  loadNewWord(): void {
    const groupId = this.getGroupId();
    if (groupId !== null) {
      this.fetchRandomWord(groupId);
    }
  }

  getNewWord(): void {
    this.loadNewWord();
  }

  getGroupId(): number | null {
    const groupIdParam = this.route.snapshot.paramMap.get('group_id');
    if (groupIdParam) {
      return +groupIdParam;
    } else {
      return null;
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
