import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tableBody: Array<object>;
  @Input() tableConfig: object;

  @Output() currentRow =  new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onRowClick(event) {
    this.currentRow.emit(event);
  }
}
