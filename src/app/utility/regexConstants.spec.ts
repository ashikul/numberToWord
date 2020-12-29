import { TestBed } from '@angular/core/testing';
import { convertNumberToWord } from './convertNumberToWord';
import { regexConstants } from './regexConstants';

describe('POSITIVE_AND_NEGATIVE_INTEGERS', () => {

  it('0', () => {
    let result = regexConstants.POSITIVE_AND_NEGATIVE_INTEGERS.test('0');
    expect(result).toEqual(true);
  });

  it('-1', () => {
    let result = regexConstants.POSITIVE_AND_NEGATIVE_INTEGERS.test('-1');
    expect(result).toEqual(true);
  });

  it('1', () => {
    let result = regexConstants.POSITIVE_AND_NEGATIVE_INTEGERS.test('1');
    expect(result).toEqual(true);
  });

  it('-0.1', () => {
    let result = regexConstants.POSITIVE_AND_NEGATIVE_INTEGERS.test('-0.1');
    expect(result).toEqual(false);
  });

  it('0.1', () => {
    let result = regexConstants.POSITIVE_AND_NEGATIVE_INTEGERS.test('0.1');
    expect(result).toEqual(false);
  });

  it('--1', () => {
    let result = regexConstants.POSITIVE_AND_NEGATIVE_INTEGERS.test('--1');
    expect(result).toEqual(false);
  });

});
