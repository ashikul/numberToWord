import { TestBed } from '@angular/core/testing';
import { numberToWordConverter } from './numberToWordConverter';

describe('numberToWordConverter function', () => {

  it('Input 0', () => {
    const result = numberToWordConverter('0');
    expect(result).toEqual('Zero');
  });

  it('Input 1', () => {
    const result = numberToWordConverter('1');
    expect(result).toEqual('One');
  });

  it('Input 2', () => {
    const result = numberToWordConverter('2');
    expect(result).toEqual('Two');
  });

  it('Input 3', () => {
    const result = numberToWordConverter('3');
    expect(result).toEqual('Three');
  });

  it('Input 4', () => {
    const result = numberToWordConverter('4');
    expect(result).toEqual('Four');
  });

  it('Input 13', () => {
    const result = numberToWordConverter('13');
    expect(result).toEqual('Thirteen');
  });

  it('Input 85', () => {
    const result = numberToWordConverter('85');
    expect(result).toEqual('Eighty five');
  });

  it('Input 100', () => {
    const result = numberToWordConverter('100');
    expect(result).toEqual('One hundred');
  });

  it('Input 5237', () => {
    const result = numberToWordConverter('5237');
    expect(result).toEqual('Five thousand two hundred and thirty seven');
  });


});
