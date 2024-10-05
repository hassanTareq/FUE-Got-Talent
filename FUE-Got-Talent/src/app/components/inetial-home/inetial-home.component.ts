import { animate, animation, style, transition, trigger } from '@angular/animations';

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-inetial-home',
  templateUrl: './inetial-home.component.html',
  styleUrls: ['./inetial-home.component.css'],
  animations:[
    trigger('fade',[
      transition('void=>*',[
        style({opacity:0}),
        animate(1500)
      ])
    ])
  ]
})
export class InetialHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
