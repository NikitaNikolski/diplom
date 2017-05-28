import 'rxjs/add/operator/map';

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PythonBarcodeService {

  constructor(private http: Http) { }

  // Get all posts from the API
  showImage():void {
    this.http.get('../api/barcode-python')
      .map(res => {

        debugger;
        //res.json()
      });
  }
}
