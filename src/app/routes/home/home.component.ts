import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalsComponent } from '@components/modal/modal-content.component';

import { PokeApiService } from '@services/poke-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit() {
    this.pokeApiService.getPokemons().subscribe((data) => console.log(data));
  }

  open() {
    this.modalService.open(ModalsComponent);
  }
}
