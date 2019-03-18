import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  //将product组件中的star数值传递至stars组件
  @Input()
  private rating : number = 0;//rating用来接收product组件传来的星级评价的数值 默认为0
  private stars : boolean[];
  constructor() { }
  ngOnInit() {
  	this.stars = [];
  	for(let i = 1; i<=5; i++){
  		this.stars.push(i > this.rating);
  	}
  }

}
