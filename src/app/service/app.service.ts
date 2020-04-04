
import * as _moment from 'moment';

const DISPLAY_FORMAT: string = 'MMM-DD-YYYY HH:mm';

export class AppService {

  public static timestampToDisplayDate(value) {
    return _moment.unix(value.seconds).format(DISPLAY_FORMAT);
  }
}
