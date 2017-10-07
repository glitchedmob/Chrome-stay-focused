import {qs, qsa} from './helpers';

export default class View {

	private rootEl: Element;

	private appTemplate = `
	<div class="app-container">
		<div class="app">
			<h1>Blocked!</h1>
			<p>This website has been blocked.<br>Perhaps you should try doing something productive.</p>
		</div>
	</div>
	`;

	public constructor()
	{
		this.rootEl = qs('html');
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
		title.textContent = 'Blocked!';
		document.head.appendChild(title);

		document.body.innerHTML = this.appTemplate;
	}

}
