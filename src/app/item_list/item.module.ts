import { ReplacePipe } from './../pipe/replace.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ItemInfoComponent } from './item.info.component';
import { ItemListComponent } from './item-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarsComponent } from '../shared/component/stars/stars.component';
import { StarModule } from '../shared/component/stars/stars.module';

@NgModule({
    declarations: [
        ItemListComponent,
        ItemInfoComponent,
        ReplacePipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        StarModule,
        RouterModule.forChild([
            { path: 'items', component: ItemListComponent },
            { path: 'items/info/:id', component: ItemInfoComponent },
        ])
    ]
})
export class ItemModule { }