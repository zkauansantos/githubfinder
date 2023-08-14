import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { resultsResolver } from './results.resolver';
import { RepositoriesResponse } from 'src/interfaces/RepositoriesResponse';

describe('resultsResolverResolver', () => {
  const executeResolver: ResolveFn<RepositoriesResponse> = (
    ...resolverParameters
  ) =>
    TestBed.runInInjectionContext(() => resultsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
