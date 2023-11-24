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
  userInput = '';
  responseMessage = '';

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
    if (this.word && this.word.id) {
      this.wordService.checkWordSimilarity(this.word.id, this.userInput)
        .subscribe(response => {
          this.updateResponseMessage(response.similarity);
        });
    }
  }

  private updateResponseMessage(similarityScore: number): void {
    if (similarityScore == 100) {
      this.responseMessage = 'Excelent! Correct answer.';
    } else if (similarityScore >= 80) {
      this.responseMessage = 'Great! Very close answer.';
    } else if (similarityScore >= 50) {
      this.responseMessage = 'Good, but there\'s room for improvement.';
    } else if (similarityScore > 0) {
      this.responseMessage = 'Not quite right, try again!';
    } else {
      this.responseMessage = 'No similarity. Please try a different answer.';
    }
  }
}
