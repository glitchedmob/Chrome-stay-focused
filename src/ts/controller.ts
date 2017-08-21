import Store from './store';
import View from './view';


export default class Controller {
	public store: Store;
	public view: View;

	public constructor(store: Store, view: View) 
	{
		this.store = store;
		this.view = view;
		this.blockSites();
	}

	public blockSites()
	{
		for(let site of this.store.sites) {
			if(window.location.href.includes(site)) {
				this.view.addApp();
				return;
			}
		}
	}
}