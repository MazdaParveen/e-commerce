import { Component, Input , Output, EventEmitter  } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent {

  @Input()
  message: any = {}; 
  @Input()
  index: number = -1;

  @Output()
   delete: EventEmitter<number> = new EventEmitter<number>();
  onDelete(): void {
    this.delete.emit(this.index);

  }
}
