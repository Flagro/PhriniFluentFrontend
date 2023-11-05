import { TestBed } from '@angular/core/testing';
import { Router, UrlTree } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { canActivate } from './auth.guard';
import { AuthService } from '../services/auth.service';
import { Observable, of } from 'rxjs';

describe('canActivate', () => {
  let authServiceMock: any;
  let routerMock: any;
  let routeMock: ActivatedRouteSnapshot;
  let stateMock: RouterStateSnapshot;

  beforeEach(() => {
    // Mock services
    authServiceMock = { checkLoggedIn: jasmine.createSpy('checkLoggedIn') };
    routerMock = { navigate: jasmine.createSpy('navigate') };

    // Provide the mock services to the TestBed
    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock }
      ]
    });

    routeMock = new ActivatedRouteSnapshot();
    stateMock = {} as RouterStateSnapshot;
  });

  it('should allow a logged-in user to activate route', (done) => {
    authServiceMock.checkLoggedIn.and.returnValue(of(true));
    const result = canActivate(routeMock, stateMock);

    // Ensure the result is an observable before subscribing
    (result instanceof Observable ? result : of(result)).subscribe((canActivate) => {
      expect(canActivate).toBe(true);
      expect(routerMock.navigate).not.toHaveBeenCalled();
      done();
    });
  });

  it('should not allow a logged-out user to activate route and redirect to login', (done) => {
    authServiceMock.checkLoggedIn.and.returnValue(of(false));
    const result = canActivate(routeMock, stateMock);

    // Ensure the result is an observable before subscribing
    (result instanceof Observable ? result : of(result)).subscribe((canActivate) => {
      expect(canActivate).toBe(false);
      expect(routerMock.navigate).toHaveBeenCalledWith(['/login']);
      done();
    });
  });
});
