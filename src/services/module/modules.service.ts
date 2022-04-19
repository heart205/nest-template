import { Injectable } from '@nestjs/common';

@Injectable()
export class ModulesService {
  testMoudles() {
    return 'testMoudles';
  }
}
