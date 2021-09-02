import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
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
  public totalPokemons = 0;
  private nextPokemons = '';

  constructor(
    private modalService: NgbModal,
    private toastr: ToastrService,
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit() {
    this.pokeApiService.getPokemonList().subscribe({
      next: (data) => {
        this.nextPokemons = data.next;
        this.totalPokemons = data.count;
        this.pokemonList = data.results;
      },
      error: (error) => this.toastr.error(error.error, 'Alert!'),
    });
  }

  public getPokemonByName(name: string) {
    if (name) {
      this.pokeApiService.getPokemonByName(name).subscribe({
        next: (data) => this.openModalPokemon(data),
        error: (error) => this.toastr.error(`Pokemon ${error.error}`, 'Alert!'),
      });
    }
  }

  public getNextPokemonList() {
    this.pokeApiService.getPokemonDetails(this.nextPokemons).subscribe({
      next: (data) => {
        this.nextPokemons = data.next;
        this.pokemonList.push(...data.results);
      },
      error: (error) => this.toastr.error(error.error, 'Alert!'),
    });
  }

  public openPokemonDetails(url: string) {
    this.pokeApiService.getPokemonDetails(url).subscribe({
      next: (data) => this.openModalPokemon(data),
      error: (error) => this.toastr.error(error.error, 'Alert!'),
    });
  }

  private openModalPokemon(details: any) {
    const modalRef = this.modalService.open(ModalsComponent);
    modalRef.componentInstance.pokemonDetails = details;
  }
}
