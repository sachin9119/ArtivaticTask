import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {


  @Input() dropDownTitle: string;

  @Input() items: Array<string>;

  @Output() selectedItem = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public onItemClick(selectedItem: string): void {
    this.selectedItem.emit(selectedItem);
  }

}
