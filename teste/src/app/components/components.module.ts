import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { PickupCallCardComponent } from './pickup-call-card/pickup-call-card.component';

@NgModule ({
    imports: [ CommonModule, IonicModule],
    declarations: [PickupCallCardComponent],
    exports: [PickupCallCardComponent]
})
export class ComponentsModule{}