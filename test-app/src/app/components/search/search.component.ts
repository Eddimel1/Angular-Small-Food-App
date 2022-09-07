import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    searchTerm :string=''
  constructor() { }
  @Output() newSearchTerm = new EventEmitter<string>()
  ngOnInit(): void {
  }
  newTerm($event:Event) {
    console.log('from search comp',this.searchTerm)
    const target = $event.target as HTMLInputElement
    this.newSearchTerm.emit(target.value);
  }
}
