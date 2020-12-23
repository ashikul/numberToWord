import { TestBed } from '@angular/core/testing';
import { covertNumberToWord } from './covertNumberToWord';
describe('covertNumberToWord function', () => {

  it('Input 0', () => {
    const result = covertNumberToWord('0');
    expect(result).toEqual('Zero');
  });

  it('Input 1', () => {
    const result = covertNumberToWord('1');
    expect(result).toEqual('One');
  });

  it('Input 2', () => {
    const result = covertNumberToWord('2');
    expect(result).toEqual('Two');
  });

  it('Input 3', () => {
    const result = covertNumberToWord('3');
    expect(result).toEqual('Three');
  });

  it('Input 4', () => {
    const result = covertNumberToWord('4');
    expect(result).toEqual('Four');
  });

  it('Input 13', () => {
    const result = covertNumberToWord('13');
    expect(result).toEqual('Thirteen');
  });

  it('Input 85', () => {
    const result = covertNumberToWord('85');
    expect(result).toEqual('Eighty five');
  });

  it('Input 100', () => {
    const result = covertNumberToWord('100');
    expect(result).toEqual('One hundred');
  });

  it('Input 5237', () => {
    const result = covertNumberToWord('5237');
    expect(result).toEqual('Five thousand two hundred and thirty seven');
  });


});
