import { converge, or } from 'ramda';
import isDesktopSafari from './isDesktopSafari';
import isMobileSafari from './isMobileSafari';

export default converge(or, [ isDesktopSafari, isMobileSafari ]);
