import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { PickupCallCardComponent } from './pickup-call-card/pickup-call-card.component';
import { ErrorMessageComponent } from './error-message/error-message.component';

@NgModule ({
    imports: [ CommonModule, IonicModule],
    declarations: [PickupCallCardComponent, ErrorMessageComponent],
    exports: [PickupCallCardComponent, ErrorMessageComponent]
})
export class ComponentsModule{}