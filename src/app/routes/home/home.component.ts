import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalsComponent } from '@components/modal/modal-content.component';

import { PokeApiService } from '@services/poke-api.service';
import { firstValueFrom } from 'rxjs';

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
  ) {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
    // this.pokeApiService.getPokemonList().subscribe({
    //   next: (data) => {
    //     this.nextPokemons = data.next;
    //     this.totalPokemons = data.count;
    //     this.pokemonList = data.results;
    //   },
    //   error: (error) => this.toastr.error(error.error, 'Alert!'),
    //   complete: () => console.log('complete'),
    // });
    this.callPromise();
    this.callObservable();
  }

  ngDestroy() {
// this.pokeApiService.getPokemonList().unsubscribe()
  }

  callObservable() {
    console.log('Observable');
    console.time('Observable');
    let loading = true;
    this.pokeApiService
      .getPokemonList()
      .subscribe({
        next: (data) => {
          this.nextPokemons = data.next;
          this.totalPokemons = data.count;
          this.pokemonList = data.results;
        },
        error: (error) => {
          this.toastr.error(error.error, 'Alert!');
        },
        complete: () => console.log('complete'),
      })
      .add(() => {
        loading = false;
        console.log('finally');
      });

    console.timeEnd('Observable');
  }

  async callPromise() {
    console.log('Promise');
    console.time('Promise');

    const { next, count, results } = await firstValueFrom(
      this.pokeApiService.getPokemonList()
    );
    // this.nextPokemons = next;
    // this.totalPokemons = count;
    // this.pokemonList = results;

    console.timeEnd('Promise');
  }

  public getPokemonByName(name: string) {
    if (name) {
      this.pokeApiService
        .getPokemonByName(name)
        .subscribe({
          next: (data) => this.openModalPokemon(data),
          error: (error) =>
            this.toastr.error(`Pokemon ${error.error}`, 'Alert!'),
          complete: () => {
            //console.log('complete')
          },
        })
        .add(() => {
          // console.log('finally')
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
