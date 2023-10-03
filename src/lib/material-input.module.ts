import { NgModule } from '@angular/core';
import { MaterialInputComponent } from './material-input.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    MaterialInputComponent
  ],
  imports: [
    MatButtonModule
  ],
  exports: [
    MaterialInputComponent
  ]
})
export class MaterialInputModule { }
