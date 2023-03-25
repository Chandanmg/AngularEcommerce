import { Injectable } from '@angular/core';
import {
    MatSnackBar, MatSnackBarConfig, MatSnackBarVerticalPosition
} from '@angular/material';

@Injectable({
  providedIn: 'root'
})

export class SnackbarService {
    constructor(private snackBar: MatSnackBar) {}
    showMessage(
      message: string,
      type: string = 'success',
      position: MatSnackBarVerticalPosition = 'top',
      
    ) {
    //   console.log(type)
      const config = new MatSnackBarConfig();
      config.verticalPosition = position;
      config.panelClass = [type, 'custom-snackbar', `snackbar-${type}`];
      config.duration = 2000;
    //   console.log(config);
      this.snackBar.open(message, 'Close', config);
    }
}



// Define color classes
const successColor = '#0000FF';
const errorColor = '#f44336';
const warningColor = '#ff9800';
const infoColor = '#2196f3';

// Set color classes for each snackbar type
const snackbarTypeColors = {
  success: successColor,
  error: errorColor,
  warning: warningColor,
  info: infoColor,
};

// Generate snackbar type classes dynamically
for (const [type, color] of Object.entries(snackbarTypeColors)) {
  const className = `snackbar-${type}`;
  const style = `
    background-image: linear-gradient(to right, #52c234 0%, #268900  51%, #52c234  100%);
    color: #fff;
  `;
  const element = document.createElement('style');
  element.innerHTML = `.${className} { ${style} }`;
  document.head.appendChild(element);
}


