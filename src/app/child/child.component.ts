import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent  {
 
  @Input('childToMaster')
  masterName!: string;

  @Output() childToParent = new EventEmitter<String>();

  sendToParent(name: String | undefined){
    console.log("child")
    this.childToParent.emit(name);
  }
}
