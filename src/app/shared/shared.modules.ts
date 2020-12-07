import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
    imports: [
        BsDropdownModule.forRoot(),
        ModalModule.forRoot(),
        BsDatepickerModule.forRoot()],
    exports: [
        BsDropdownModule,
        ModalModule,
        BsDatepickerModule,
    ],
    declarations: [],
    providers: []
})

export class SharedModule { }