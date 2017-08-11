import Store from './store';
import View from './view';


export default class Controller {
	public store: Store;
	public view: View;

	public constructor(store: Store, view: View) 
	{
		this.store = store;
		this.view = view;
	}
}