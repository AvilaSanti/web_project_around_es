export class Section {
    _items;
    _renderer;
    _container;
    constructor({ items, renderer }, sectionClass) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(sectionClass);
    }
    renderItems() {
        if (!this._container)
            return;
        this._items.forEach((item) => {
            this._renderer(item);
        });
    }
    addItem(element) {
        if (!this._container)
            return;
        this._container.prepend(element);
    }
}
//# sourceMappingURL=Section.js.map