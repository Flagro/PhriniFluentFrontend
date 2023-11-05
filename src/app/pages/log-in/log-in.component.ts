import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.component.html',
    styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
    constructor(private authService: AuthService) {}

    onLogin() {
        // Implement log-in logic
    }
}
