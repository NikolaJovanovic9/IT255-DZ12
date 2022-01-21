import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Room } from 'src/app/interfaces/room';
function skuValidator(control: FormControl): { [s: string]: boolean } {
  //if (!control.value.match(/^[0-9].*/)) {
  if (!control.value.match(/^[0-9]*$/)) {
    return { invalidForm: true };
  } else {
    return { invalidForm: false };
  }
}
@Component({
  selector: 'add-room',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.css']
})
export class RoomAddComponent implements OnInit {

  public roomForm!: FormGroup;
  @Output() roomToAdd: EventEmitter<Room>;
  roomSku!: AbstractControl;

  constructor(fb: FormBuilder) {
    this.roomToAdd = new EventEmitter();
  }

  ngOnInit() {
    this.initForm();
    this.roomSku = this.roomForm.controls['price'];
  }

  public initForm() {
    this.roomForm = new FormGroup({
      roomNumber: new FormControl('', [Validators.required,
      ]),
      h_name: new FormControl('', [
        Validators.required,
      ]),
      availablePpl: new FormControl('', [
        Validators.required,
      ]),
      nights: new FormControl('', [
        Validators.required,
      ]),
      price: new FormControl('', [
        Validators.required, skuValidator
      ])
    });

    this.roomForm.controls['roomNumber'].valueChanges.subscribe(
      (value: string) => { console.log("vrijednost unosa -> ", value) }
    );
  }
  
  public submitForm() {
    let roomNumber = this.roomForm.get('roomNumber')!.value;
    let name = this.roomForm.get('h_name')!.value;
    let availablePpl = this.roomForm.get('availablePpl')!.value;
    let nights = this.roomForm.get('nights')!.value;
    let price = this.roomForm.get('price')!.value;
    //let room = new Room(roomNumber, name, availablePpl, nights, price);
    let room = <Room>{roomNumber, name, availablePpl, nights, price};
    //if (this.roomForm.invalid) {
    //  return alert("Niste ispravno unijeli podatke");
    //}
    this.roomToAdd.emit(room);
  }
  osmotri(event: string) {
    if (event.length < 6)
      console.log("Duzina je manja od 6 karaktera");
  }
}