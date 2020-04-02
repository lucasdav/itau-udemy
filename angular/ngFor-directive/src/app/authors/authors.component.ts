import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngfor-directive-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors;

  constructor(authorsService: AuthorsService) {
    this.authors = authorsService.getAuthors();
   }

  ngOnInit() {
  }

}
