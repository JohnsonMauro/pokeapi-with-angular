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
  public pokemonList: any;
  private nextPokemons = '';

  constructor(
    private modalService: NgbModal,
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit() {
    this.pokeApiService.getPokemonList().subscribe((data) => {
      this.nextPokemons = data.next;
      this.pokemonList = data.results;
    });
  }

  public getPokemonByName(name: string) {
    if (name) {
      this.pokeApiService
        .getPokemonByName(name)
        .subscribe((data) => this.openModalPokemon(data));
    }
  }

  public getNextPokemonList() {
    this.pokeApiService
      .getPokemonDetails(this.nextPokemons)
      .subscribe((data) => {
        this.nextPokemons = data.next;
        this.pokemonList.push(...data.results);
      });
  }

  public openPokemonDetails(url: string) {
    this.pokeApiService
      .getPokemonDetails(url)
      .subscribe((data) => this.openModalPokemon(data));
  }

  private openModalPokemon(details: any) {
    const modalRef = this.modalService.open(ModalsComponent);
    modalRef.componentInstance.pokemonDetails = details;
  }
}
