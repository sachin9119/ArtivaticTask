import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBaseComponent } from './components/base/home.component';
import { DashboardRoutingModule } from './home.routing.module';
import { HomeService } from './services/home.service';

import { HttpClientModule } from '@angular/common/http';
import { CommonPageModule } from '../common/common.module';

@NgModule({
    declarations: [
        HomeBaseComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        HttpClientModule,
        CommonPageModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        HomeService
    ]
})


export class HomeModule { }
