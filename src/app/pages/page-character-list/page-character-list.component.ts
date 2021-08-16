import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service/api.service';

@Component({
  selector: 'app-page-character-list',
  templateUrl: './page-character-list.component.html',
  styleUrls: ['./page-character-list.component.scss']
})
export class PageCharacterListComponent implements OnInit {
  public charactersList: any = [];
  
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getCharactersList();
  }

  private getCharactersList(){
    this.api.getInfo('character/?page=1').subscribe((data: any) => {
      console.log(this.charactersList);
      this.charactersList = data.results;
      console.log(this.charactersList);
    })

  } 

 
}
