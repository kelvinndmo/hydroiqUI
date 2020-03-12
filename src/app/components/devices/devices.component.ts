import { Component, OnInit } from '@angular/core';
import { DevicesService } from 'src/app/services/services/devices.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  devices = [];
  deviceForm: FormGroup;


  constructor(private spinner: NgxSpinnerService, private fb: FormBuilder, private deviceService: DevicesService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.spinner.show()
    this.deviceService.getDevices().subscribe((data) => {
      this.devices = data.data
      this.spinner.hide()
    })
    this.deviceForm = this.fb.group({
      serial: ['', [Validators.required]],
      manufacturer: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  save() {
    this.spinner.show()
    const { description } = this.deviceForm.value;
    const obj = {
      manufacturer_id: 1,
      description
    }
    this.deviceService.createDevice(obj).subscribe((data) => {
      let device = data.data;
      this.deviceService.getDevice(device.id).subscribe((data) => {
        this.devices.unshift(data.data)
      })
      this.spinner.hide()
      this.toastr.success("Device created successfully..")
    })
  }
  deleteDevice(id) {
    this.deviceService.deleteDevice(id).subscribe((data) => {
      this.toastr.success("Device Deleted successfully...")
      this.devices = this.devices.filter((device) => device.id !== id)
    })
  }



}
