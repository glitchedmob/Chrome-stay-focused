import {qs, qsa} from './helpers';

export default class View {

	private rootEl: Element;

	public constructor()
	{
		this.rootEl = <Element>document.querySelector('html')
	}
	/**
	 * Completly empties the DOM and sets the background to white
	 */
	private emptyDOM()
	{
		this.rootEl.innerHTML = ''
		this.rootEl.setAttribute('style', 'background-color: #FFF');
	}

	/**
	 * Injects our app into the DOM
	 */
	public addApp()
	{
		this.emptyDOM();
		const title = document.createElement('title');
		title.textContent = "Blocked!";
		document.head.appendChild(title);
	}
}