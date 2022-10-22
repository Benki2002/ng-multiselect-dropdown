import { TestBed } from '@angular/core/testing';

import { DropdownMultiselectService } from './dropdown-multiselect.service';

describe('DropdownMultiselectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DropdownMultiselectService = TestBed.get(DropdownMultiselectService);
    expect(service).toBeTruthy();
  });
});
