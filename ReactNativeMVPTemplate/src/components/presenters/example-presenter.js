import BasePresenter from './presenter';
import { ExampleM } from '../models/export-models';

/**
 * Class for the Example presenter and view
 * @extends BasePresenter
 */
class ExamplePresenter extends BasePresenter {
	/**
	 * Creates an instance of ExamplePresenter
	 *
	 * @constructor
	 * @param {Object} view - An instance of a view class
	 */
	constructor(view) {
		super();
		this.view = view;
		ExampleM.subscribe(this);
	}

	/**
	 * Updates the example model with new data.
	 *
	 * @param {Object} newData - New data to update the model's data with.
	 */
	update = (newData) => {
		ExampleM.update(newData); 
	};

	/**
	 * Called when the model is updated with new data. Refreshes the state of the view.
	 * Method is supplied with the data to add.
	 * Better way to refresh the state?
	 *
	 * @param {Object} newData - New data to add.
	 */
	onUpdated = (newData) => {
		// Do something with the new data or let the view auto update?
		if (newData == null) {
			this.forceRefresh(); // Force a refresh here because we got the data from the database
		} else {
			this.view.refreshState();
		}
	};

	/**
	 * Gets the data from the model and returns it to the caller.
	 *
	 * @return {Object} Data from the model.
	 */
	getData = () => {
		return ExampleM.get().data;
	};

	/**
	 * If the view or presenter is destroyed, unsubscribe the presenter from the model.
	 */
	onDestroy = () => {
		ExampleM.unsubscribe(this);
	};

	/**
	 * Forces a refresh for the view by recalcuating the timeago property, resorting bookmarked data and setting the state again.
	 */
	forceRefresh = () => {
		this.view.setState({
			data: this.getData(),
		});
	};
}

export default ExamplePresenter;