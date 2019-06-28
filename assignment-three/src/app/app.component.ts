import { Component } from '@angular/core';
import { BlockingProxy } from 'blocking-proxy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-three';
  isParagraphVisible = true;
  log = []


  onToggleDisplay(){
    this.isParagraphVisible = !this.isParagraphVisible;
    this.log.push(new Date())
  }
}
