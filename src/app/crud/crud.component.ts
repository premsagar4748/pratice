import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  productData:any;

  constructor(public productGetApi:ProductService){}



  // mobiles=
  // [{
  //   name:'oneplus',
  //   price:64000,
  //   ram:12,
  //   Storage:256
  // },
  // { name:'iqoo',
  //   price:50000,
  //   ram:8,
  //   Storage:128
  // }
  // ];


  ngOnInit(): void {
 
    this.productGetApi.getproducts().subscribe((response:any)=>{
      console.log("hiii a iam comming from api::::",response);
      
      this.productData = response.products;
    })
}

}
