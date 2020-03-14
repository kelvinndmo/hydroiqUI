
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DevicesService } from './devices.service';


describe('GithubApiService', () => {
  let injector: TestBed;
  let service: DevicesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DevicesService]
    });
    injector = getTestBed();
    service = injector.get(DevicesService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return devices', () => {
    const mockDevices = [{
      serial: 1,
      manufacturer_id: 12,
      description: 'novak',
      created_at: 2323323
    }]

    service.getDevices().subscribe(devices => {
      expect(devices.length).toBe(1)
      expect(devices).toEqual(mockDevices)
    })

    const req = httpMock.expectOne(`${service.url}`);
    expect(req.request.method).toBe("GET");
    req.flush(mockDevices);
  })
});