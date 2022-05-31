import { Component, OnInit } from '@angular/core';

import { MarvelService } from 'src/app/service/marvel.service';
import { showConsole } from "src/app/shared/constants";

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.sass']
})
export class ComicsComponent implements OnInit {

  constructor(
    private marvelService: MarvelService) { }

  ngOnInit(): void {
    this.getAllComics();
  }

  getAllComics() {
    this.marvelService.getAllComics().subscribe(data => {
      if (showConsole) console.log('getAllComics', data);
    }, error => {
      console.log(error);
    }
    );
  }

}
