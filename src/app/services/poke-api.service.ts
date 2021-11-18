import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private baseURLPokemon = `${environment.urlBase}/pokemon`;

  constructor(private httpClient: HttpClient) {}

  public getPokemonList() {
    return this.httpClient.get<any>(this.baseURLPokemon);
  }

  public getPokemonByName(name: string) {
    return this.httpClient.get<any>(`${this.baseURLPokemon}/${name}`);
  }

  public getPokemonDetails(url: string) {
    return this.httpClient.get<any>(url);
  }

  public getNextPokemonList(url: string) {
    return this.httpClient.get<any>(url);
  }
}
