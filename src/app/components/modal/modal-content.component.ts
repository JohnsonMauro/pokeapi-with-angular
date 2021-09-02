import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modal-content.component.html',
})
export class ModalsComponent {
  constructor(public activeModal: NgbActiveModal) {}
}
