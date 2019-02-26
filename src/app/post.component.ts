import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'post',
  template: `<p>test</p>`  
})
export class PostComponent {
  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(data => {
      console.log(data);
    });
  }
}


