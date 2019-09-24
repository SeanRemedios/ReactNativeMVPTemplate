/**
 * Utility class for time functions.
 */
class TimeUtility {
	/**
	 * Returns the current date and time in milliseconds.
	 * 
	 * @return {Number} The date and time in milliseconds
	 */
	getDateTime() {
		return (new Date()).getTime();
	}
}

const TimeUtil = new TimeUtility();
export default TimeUtil;