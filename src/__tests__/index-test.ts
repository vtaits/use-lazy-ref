import { jest } from '@jest/globals';

jest.unstable_mockModule('react', () => ({
  useRef: jest.fn(),
}));

const {
  useRef,
} = await import('react');

const {
  useLazyRef,
  EMPTY_VALUE,
} = await import('../index');

const mockedUseRef = jest.mocked(useRef);

test('should return filled value and not call init', () => {
  const init = jest.fn();

  const refResult = {
    current: Symbol('result'),
  };

  mockedUseRef.mockReturnValue(refResult);

  const result = useLazyRef(init);

  expect(init).toHaveBeenCalledTimes(0);
  expect(result).toBe(refResult);
});

test('should return result of init', () => {
  const resultValue = Symbol('result');

  const init = jest.fn().mockReturnValue(resultValue);

  mockedUseRef.mockReturnValue({
    current: EMPTY_VALUE,
  });

  const result = useLazyRef(init);

  expect(init).toHaveBeenCalledTimes(1);
  expect(result).toEqual({
    current: resultValue,
  });
});
