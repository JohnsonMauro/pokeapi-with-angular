import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modal-content.component.html',
})
export class ModalsComponent implements OnInit {
  @Input() public pokemonDetails: any;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    console.log(this.pokemonDetails);
  }
}
