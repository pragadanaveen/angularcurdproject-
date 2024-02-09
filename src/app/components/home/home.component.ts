import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  i="interpolation"

  c=1
  ic = [1,2,3,4,5]
  objec=


{


name:"Home",
place:"vskp",
age:20


}
// obj1=


// [{


// "name":"jHome",
// "place":"jvskp",
// "age":20


// }]
obj1=
[{

  "name":"naveen",
  "place": "rjy",
  "ageeee":20

}]

ngg=""
required=true
require=true


cc=

{
ccc:this.required,
cccc:this.required


}

st=

{
  color:"red",
  background:"blue"


}

fun()
{

  alert("it is working")
}


}
