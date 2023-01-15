import { Component, Input } from '@angular/core';

import EyeglassCardModel from 'src/app/models/EyeglassCardModel';

@Component({
  selector: 'app-eyeglass-page-card',
  templateUrl: './eyeglass-page-card.component.html',
})
export class EyeglassPageCardComponent {

  @Input() data: EyeglassCardModel = <EyeglassCardModel>{};

}
