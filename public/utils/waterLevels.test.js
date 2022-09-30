import { waterLevels } from './waterLevels';

const knownTests = [
  [[0, 4, 0, 0, 0, 6, 0, 6, 4, 0], [0, 0, 4, 4, 4, 0, 6, 0, 0, 0]],
];

const prepareTests = knownTests.map(array => ({
  blockLevels: array[0],
  expected: array[1],
})
);

describe.each(prepareTests)(
  `Water Tank Problem:
    blockLevels=$blockLevels,
    expected=$expected`,
  ({ blockLevels, expected }) => {
    test(
      `given block wall levels return water levels`, () => {
        expect(waterLevels(blockLevels)).toEqual(expected);
      }
    )
  }
);