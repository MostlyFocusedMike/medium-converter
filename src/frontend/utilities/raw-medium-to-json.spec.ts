import { RawMediumToJSON } from './raw-medium-to-json';
import { mediumTextDump } from './utilities-test-mocks/mock-medium-text-dump';

describe('RawMediumToJson Tests', () => {
    it('should initialize', () => {
        const converter = new RawMediumToJSON(mediumTextDump, 'mikecronin92');
        expect(converter.userHandle).toEqual('mikecronin92');
        expect(converter.rawText).toEqual(mediumTextDump);
    })
});