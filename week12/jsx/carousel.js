import { Component, createElement } from './framework'

class Carousel extends Component {
	constructor() {
		super();
		this.attributes = Object.create(null);
	}

	setAttribute(name, value) {
		this.attributes[name] = value;
	}

	render() {
		this.root = document.createElement('div');
		this.root.classList.add('carousel')
		for (let record of this.attributes.src) {
			let child = document.createElement('div');
			child.style.backgroundImage = `url(${record})`;
			this.root.appendChild(child);
		}
		
		// auto
		/* let currentIndex = 0;
		setInterval(() => {
			let children = this.root.children;

			let nextIndex = (currentIndex + 1) % children.length;

			let current = children[currentIndex];
			let next = children[nextIndex];

			next.style.transition = "none";
			next.style.transform = `translateX(${100 - nextIndex * 100}%)`;

			setTimeout(() => {
				next.style.transition = "";
				current.style.transform = `translateX(${-100 - nextIndex * 100}%)`
				next.style.transform = `translateX(${- nextIndex * 100}%)`;

				currentIndex = nextIndex
			}, 16)

		}, 3000) */

		let position = 0;
		this.root.addEventListener('mousedown', event => {
			let children = this.root.children;
			let startX = event.clientX;

			let move = event => {
				let x = event.clientX - startX;
				for (let child of children) {
					child.style.transition = 'none';
					child.style.transform = `translateX(${- position * 500 + x}px)`;
				}
			}

			let up = event => {
				let x = event.clientX - startX;
				position = position - Math.round(x / 500);
				for (let child of children) {
					child.style.transition = '';
					child.style.transform = `translateX(${- position * 500}px)`;
				}

				document.removeEventListener('mousemove', move);
				document.removeEventListener('mousemove', up);
			}

			document.addEventListener('mousemove', move)
			document.addEventListener('mouseup', up)

		})



		return this.root;
	}

	mountTo(parent) {
		parent.appendChild(this.render());
	}
}

let d = [
	'https://hellorfimg.zcool.cn/preview260/201364079.jpg',
	'https://hellorfimg.zcool.cn/preview260/1054385372.jpg',
	'https://hellorfimg.zcool.cn/preview260/307847267.jpg',
	'https://hellorfimg.zcool.cn/preview260/665332564.jpg'
]

let a = <Carousel src={d} />

// document.body.appendChild(a)
a.mountTo(document.body)