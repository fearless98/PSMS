import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
//声明一个数组来存储页面上展示的商品信息的数据
  private products	: Array<Product>;
  private imgUrl = 'http://placehold.it/320x150';

  constructor() { }

  ngOnInit() {//在ProductComponent实例化以后调用一次
  	//初始化数组
  	this.products = [
  		new Product(1,"第一个商品",999.00,4.0,"这是第一个商品的描述",["电子产品","硬件设备"]),
  		new Product(2,"第二个商品",129.00,1.0,"这是第二个商品的描述",["家用电器","双门冰箱"]),
  		new Product(3,"第三个商品",39.00,3.0,"这是第三个商品的描述",["休闲服饰","大牌女装"]),
  		new Product(4,"第四个商品",42.00,4.0,"这是第四个商品的描述",["生活用品","个人洗护"]),
  		new Product(5,"第五个商品",119.00,2.0,"这是第五个商品的描述",["户外运动","品牌跑鞋"]),
  		new Product(6,"第六个商品",454.00,5.0,"这是第六个商品的描述",["美妆护理","必备面膜"]),
  	]
  }

}

//产品(Product)对象封装信息
export class Product{
	
	constructor(
		// 声明产品所拥有的属性
		public id 			      : number,
		public name		      : string,
		public price 	          : number,
		public rating 	  	  : number,
		public desc 			  : string,
		public categories	  : Array<string>
	) {//构造函数
		
	}
}
