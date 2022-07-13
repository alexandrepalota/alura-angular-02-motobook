import { Component, Input, OnInit } from '@angular/core';

const API = 'http://localhost:3000'

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {

  private originalUrl = ''

  @Input()
  description = ''

  @Input()
  set url(url: string) {
    if (url.startsWith('data')) {
      this.originalUrl = url
    } else {
      this.originalUrl = `${API}/imgs/${url}`
    }
  }

  get url(): string {
    return this.originalUrl
  }

  constructor() { }

  ngOnInit(): void {
  }

}
