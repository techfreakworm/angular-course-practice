import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { 
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('ng-oninit called');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called')
    console.log(changes)
  }

}
