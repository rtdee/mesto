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

  prependItem(element) {
    this.container.prepend(element);
  }

  appendItem(element) {
    this.container.append(element);
  }

  clearSection() {
    this.container.replaceChildren();
  }
}