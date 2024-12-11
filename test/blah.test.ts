import { toPersianDigits } from '../src';

describe('itsOk?', () => {
  it('works', () => {
    expect(toPersianDigits(12)).toEqual("۱۲");
  });
});
