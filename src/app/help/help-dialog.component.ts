import {Component, Inject} from "@angular/core";
import {MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA} from "@angular/material/legacy-dialog";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
             selector:    'help-dialog',
             templateUrl: 'help-dialog.component.html',
             styleUrls:   ['./help-dialog.component.scss']
           })
export class HelpDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private sanitizer: DomSanitizer) {}

  public page() {
    return this.data.page;
  }
}
