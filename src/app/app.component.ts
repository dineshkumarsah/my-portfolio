import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CotactFormComponent } from './cotact-form/cotact-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portfolio';
constructor(private dialog:MatDialog){

}
    openModal(): void {
    this.dialog.open(CotactFormComponent, {
      width: '400px',
      height: '300px',
      disableClose: true, // optional
      data: {} // optional: pass data to the dialog
    });
  }

}
