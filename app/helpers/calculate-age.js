import { helper } from '@ember/component/helper';
import moment from 'moment';

export function calculateAge(params) {
  let [birthday] = params;
  return moment().diff(moment(birthday), 'years');
}

export default helper(calculateAge);
