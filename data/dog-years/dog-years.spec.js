import { describe, expect, it } from 'vitest'
import {dogYears} from './dog-years'
describe('dogYears', () => {
    it('should return dog years for Earth', () => {
        expect(dogYears('earth', 1000000000)).toBe(221.82);
    });
    it('should return dog years for Mercury', () => {
        expect(dogYears('mercury', 31557600)).toBe(29.06);
    });
    it('should return dog years for Jupiter', () => {
        expect(dogYears('jupiter', 31557600)).toBe(0.59);
    });
})