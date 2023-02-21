import { Component, NgZone } from '@angular/core';
import { PostService } from './services/post.service';
import { Observable, Subscription, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { HelloWorldComponent } from './hello-world';

@Component({
  selector: `app-root`,
  // templateUrl: './app.component.html',
  template: `
    <h2>Hello World</h2>
    <p>{{ value }}</p>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first-app';
  value: string = 'adaw';
  res: any;
  posts: any;
  subscription!: Subscription;

  constructor(
    private service: PostService,
    private hello: HelloWorldComponent,
    private ngZone: NgZone
  ) {}

  // request every 2 second
  async ngOnInit() {
    this.hello.setValue(this.value);

    this.subscription = timer(0, 2000)
      .pipe(switchMap(() => this.service.getPosts()))
      .subscribe((result) => {
        this.res = result;
        this.value = this.res.datetime;
        this.value = this.value.substring(11, 19);
        this.hello.setValue(this.value);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
