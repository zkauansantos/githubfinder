import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GetDataGithubService } from 'src/app/services/get-data-github.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {
  @Input('placeholder') placeholder!: string;

  form = new FormControl();
  searchTerm = '';

  ngOnInit() {
    this.form.valueChanges.subscribe((value) => (this.searchTerm = value));
  }

  onSearch(event: KeyboardEvent) {
    if (event.key !== 'Enter') return;

    if (!this.form.value) return;
  }

  onErase() {
    this.form.reset();
  }
}
