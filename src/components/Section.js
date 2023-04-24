export default class Section {
  constructor({ renderer }, container) {
    this.renderer = renderer;
    this.container = container;
  }

  renderItems(items) {
    items.forEach(item => {
      this.renderer(item);
    });
  }

  addItem(element) {
    this.container.prepend(element);
  }
}