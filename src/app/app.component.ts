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
    console.log(this.value);

    this.subscription = timer(0, 2000)
      .pipe(switchMap(() => this.service.getPosts()))
      .subscribe((result) => {
        this.res = result;
        this.value = this.res.datetime;
        this.value = this.value.substring(11, 19);
        console.log(this.value);
        this.hello.setValue(this.value);
        // console.log(this.hello.getValue());
      });
  }

  // ngOnInit() {
  //   const eventSource = new EventSource(
  //     'http://localhost:3000/checkAllBookSendToFrontEnd'
  //   );

  //   eventSource.onmessage = (event) => {
  //     // console.log(event);
  //     // this.res = JSON.parse(event.data);
  //     // console.log(this.res.data);
  //     // this.value = JSON.parse(event.data).data[0]['title'];
  //     // console.log(this.res.data[0]['title']);
  //     // console.log(this.res.data[0]['genre']);
  //     this.res = JSON.parse(event.data);
  //     this.ngZone.run(() => {
  //       // this.value = this.res.data[0]['title'];
  //       this.value = this.res.data;
  //     });
  //   };
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
