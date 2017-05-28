import { Component, OnInit } from '@angular/core';

import { PythonBarcodeService } from './python-barcode.service';

@Component({
  selector: 'app-python-page',
  templateUrl: './python-page.component.html',
  styleUrls: ['./python-page.component.scss']
})
export class PythonPageComponent implements OnInit {

  constructor(private pythonBarcodeService: PythonBarcodeService) { }

  ngOnInit() {
  }

  onProcessByPython(): void {
    this.pythonBarcodeService.showImage();
  }

}
