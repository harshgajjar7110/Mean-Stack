/* tslint:disable:no-unused-variable */

import { inject, TestBed } from "@angular/core/testing";
import { ApiService } from "./api-service";

describe("Service: ApiService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService]
    });
  });

  it("should ...", inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
