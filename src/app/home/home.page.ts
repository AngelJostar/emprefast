import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}
}


const box = document.getElementById('box');
  box.style.backgroundColor = 'lime';
  box.style.color = 'red';
  box.style.fontSize = '2em';

