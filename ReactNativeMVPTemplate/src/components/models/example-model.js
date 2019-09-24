import Model from './model';

/**
 * ExampleModel
 * @extends Model 
 */
class ExampleModel extends Model {
	/**
	 * Creates an instance of ExampleModel.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		
		this.listener = null;
		this._data = {data: []};

		this._createEventStream();
	}

	/**
	 * Get method for presenters to get data.
	 *
	 * @return {Object} data stored in the model
	 */
	get() {
		return {...this._data} // immutable
	}

	/**
	 * Default callback
	 */
	_defaultCallback(message) {
		console.log(message);
	}

	/**
	 * Set the model's callback to a new callback. This callback can be used anywhere and is usually passed in from a presenter.
	 *
	 * @param {Function} callback - A callback to run when certain code is executed
	 */
	setCallback(callback) {
		this._callback = callback;
	}

	/**
	 * Insert data into the data object when data has changed from the database
	 *
	 * @param {Object} databaseData - Each data item is an object within the overall object
	 */
	_insertDataOnRead(databaseData) {
		if (databaseData != null) { // Check if there are objects in the database
			this._data = tempData;
			// console.log(this._data)
		}
	}

	/**
	 * Toggle the database listener off and then on again to get the data again.
	 */
	toggleListeners() {
		if (this.listener != null) {
			// Toggle listener
		}
	}

	/**
	 * Update method for presenters to update the model's data.
	 *
	 * @param {Object} newData - New data to add
	 */
	update(newData) {
		this._notifyAll(this._data);
	}
}

export default ExampleModel;