import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cotact-form',
  standalone: true,
  imports: [],
  templateUrl: './cotact-form.component.html',
  styleUrl: './cotact-form.component.scss'
})
export class CotactFormComponent {
  constructor(private dialogRef: MatDialogRef<CotactFormComponent>){

  }
  close(){
    this.dialogRef.close()
  }
  submit(){
    this.dialogRef.close()
  }

}
