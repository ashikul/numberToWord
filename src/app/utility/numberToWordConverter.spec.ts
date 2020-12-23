import { TestBed } from '@angular/core/testing';
import { numberToWordConverter } from './numberToWordConverter';

describe('numberToWordConverter function', () => {
  beforeEach(async () => {
  });

  it('Input 0', () => {
    const result = numberToWordConverter('0');
    expect(result).toEqual('Zero');
  });

  it('Input 1', () => {
    const result = numberToWordConverter('1');
    expect(result).toEqual('One');
  });

  it('Input 13', () => {
    const result = numberToWordConverter('13');
    expect(result).toEqual('Thirteen');
  });

  it('Input 85', () => {
    const result = numberToWordConverter('85');
    expect(result).toEqual('Eighty five');
  });

  it('Input 5237', () => {
    const result = numberToWordConverter('5237');
    expect(result).toEqual('Five thousand two hundred and thirty seven');
  });


});
