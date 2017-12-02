import { helper } from '@ember/component/helper';

const valueMap = { high: 1, medium: .75, average: .5, low: .25 };

export function convertToValue(params) {
  let [textValue] = params;

  return valueMap[textValue];
}

export default helper(convertToValue);
