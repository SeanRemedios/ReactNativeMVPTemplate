import ExampleModel from './example-model';

const ExampleM = new ExampleModel();

/**
 * The export-models file allows for singleton instances of a class to be created.
 * To export a new model, add the class instance creation as a const below,
 * then add the name to the export list.
 * To import in a new class add the following line to the top of the file:
 * import { NameM } from '../models/export-models';
 * where NameM is the name of the instance.
 */
export {
	ExampleM
};