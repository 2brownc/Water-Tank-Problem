export function waterLevels(blockLevels) {
  const waterLevels = Array(blockLevels.length).fill(0);

  let left = null;
  let leftPos = null;

  let right = null;
  let rightPos = null;

  for (let i = 0; i < blockLevels.length; i++) {
    if (blockLevels[i] != 0) {
      if (left === null) {
        left = blockLevels[i];
        leftPos = i;
      } else {
        right = blockLevels[i];
        rightPos = i;
      }
    }

    if (right != null) {
      const waterLevel = Math.min(left, right);

      waterLevels.fill(waterLevel, leftPos + 1, rightPos);

      left = right;
      leftPos = rightPos;

      right = null;
      rightPos = null;
    }

  }

  return waterLevels;
}
