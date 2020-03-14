import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceDetailComponent } from './device-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { DevicesService } from 'src/app/services/services/devices.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DeviceDetailComponent', () => {
  let component: DeviceDetailComponent;
  let fixture: ComponentFixture<DeviceDetailComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [FormBuilder,

      ],
      imports: [RouterTestingModule.withRoutes(routes), HttpClientTestingModule],
      declarations: [DeviceDetailComponent]
    })

    router = TestBed.get(Router)
    location = TestBed.get(Location)

    fixture = TestBed.createComponent(DeviceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router.initialNavigation(); (5)
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
