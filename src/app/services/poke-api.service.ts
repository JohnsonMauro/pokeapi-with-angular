import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, mergeMap, take } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private baseURLPokemon = `${environment.urlBase}/pokemon`;

  constructor(private httpClient: HttpClient) {}

  public getPokemonList() {
    return this.httpClient.get<any>(this.baseURLPokemon).pipe(take(1));
  }

  public getPokemonByName(name: string) {
    return this.httpClient
      .get<any>(`${this.baseURLPokemon}/${name}`)
      .pipe(take(1));
  }

  public getPokemonDetails(url: string) {
    return this.httpClient.get<any>(url).pipe(take(1));
  }

  public getNextPokemonList(url: string) {
    return this.httpClient.get<any>(url).pipe(take(1));
  }
}
