import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { PickupCallCardComponent } from './pickup-call-card/pickup-call-card.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule ({
    imports: [ CommonModule, IonicModule],
    declarations: [PickupCallCardComponent, ErrorMessageComponent, LoadingComponent],
    exports: [PickupCallCardComponent, ErrorMessageComponent, LoadingComponent]
})
export class ComponentsModule{}