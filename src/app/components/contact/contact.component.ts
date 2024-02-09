import { Component,OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {




  @Output() cp=new EventEmitter();

  @Input() par=""





  func()
{
this.cp.emit("this is from to child to parent");


}
}
