/**
 * Class representing an Exception
 * @author Craig Harvie <craig@craigharvie.me>
 */
class Exception {


	/**
   * Create an Exception.
   */
	constructor( type, message, stack ) {
		this.type = type;
		this.message = message;
		if ( stack ) {
			this.stack = stack;
		}
		this.toString = function() {
			return `${this.type}: ${this.message}`;
		};
	}


}


module.exports = Exception;
