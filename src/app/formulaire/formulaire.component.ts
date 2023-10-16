import { Component } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  template: `
    <p>
      <label for="nom">Saisie Nom :</label>
      <input type="text" id="nom">
    </p>
  `,
  styles: [],
})
export class FormulaireComponent {
  nom: string = '';
}
