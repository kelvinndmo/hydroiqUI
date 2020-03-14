import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DevicesService } from 'src/app/services/services/devices.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss']
})
export class DeviceDetailComponent implements OnInit {
  device;
  deviceForm: FormGroup;

  constructor(private router: Router, private spinner: NgxSpinnerService, private fb: FormBuilder, private route: ActivatedRoute, private deviceService: DevicesService) { }

  ngOnInit(): void {
    this.device = this.route.snapshot.data[
      'resolvedData'
    ].device;
    console.log(this.device)

    console.log(this.device)
    this.deviceForm = this.fb.group({
      serial: [this.device.serial, [Validators.required]],
      description: [this.device.description, [Validators.required]]
    })
  }


  updateDevice() {
    this.spinner.show()
    const updatingValues = {
      ...this.deviceForm.value,
      manufacturer_id: 1
    }
    this.deviceService.updateDevice(this.device.id, updatingValues).subscribe((data) => {
      console.log(data)
      this.spinner.hide()
      this.router.navigate(['/'])
    })
  }

}
