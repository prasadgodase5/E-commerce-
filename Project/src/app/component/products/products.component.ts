import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private http:ProductService){
    this.getD();
  }


  productData:any;

  getD(){
   this.http.getData().subscribe((res) =>{
    this.productData=res;
    console.log(this.productData);

    },
    (error) => {
      console.error(error); // Handle errors here
    }
    )
  }

  PostData(){
    this.http.postData(this.productData).subscribe((res) =>{
      console.log(res);

    })
  }

}
