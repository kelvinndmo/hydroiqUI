import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DevicesService } from '../services/services/devices.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DeviceResolver implements Resolve<any> {

    constructor(private deviceService: DevicesService) { }
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        const id = route.paramMap.get("id");
        if (isNaN(+id)) {
            const message = `device id was not a number ${id}`;
            console.log(message);
            return of({ device: null, error: message });
        }
        return this.deviceService.getDevice(+id).pipe(
            map(device => ({ device: device.data })),
            catchError(error => {
                const message = `Retrieval Error: ${error}`;
                console.log(error);
                return of({ device: null, error: message });
            })
        )
    }
}