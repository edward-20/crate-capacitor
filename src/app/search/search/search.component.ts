import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SearchAllServiceService } from '../search-all-service.service';
import { AccordionModule } from 'primeng/accordion'

@Component({
  selector: 'app-search',
  imports: [InputTextModule, ReactiveFormsModule, AccordionModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  applyForm = new FormGroup({
    fuzzyValue: new FormControl('')
  })

  submitApplication() {
    console.log(this.service.getSearch(
      this.applyForm.value.fuzzyValue ?? ''
    ))
  }

  constructor(private service: SearchAllServiceService) {}
}
