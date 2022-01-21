import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { RoomEffect } from './store/effects/room.effects';
import { reducers } from './store/reducers';
import { AppRoutingModule } from './app-routing.module';
import { ViewRoomsComponent } from './components/view-rooms/view-rooms.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { RoomAddComponent } from './components/room-add/room-add.component';
import { FilterByUserPrice } from './components/rooms/roomFilter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomService } from './services/room.service';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    FilterByUserPrice,
    RoomAddComponent,
    ViewRoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    EffectsModule.forRoot([RoomEffect]),
    StoreModule.forRoot(reducers)
  ],
  providers: [HttpClientModule, RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }

