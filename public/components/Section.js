export class Section {
    sectionConfig;
    container;
    constructor({ items, renderer }, sectionClass) {
        this.sectionConfig = { items, renderer };
        this.container = document.querySelector(sectionClass);
    }
    renderer() {
        if (!this.container) {
            return;
        }
        const elementsArray = [];
        this.sectionConfig.items.forEach((item) => {
            const element = this.sectionConfig.renderer(item);
            elementsArray.push(element);
        });
        this.container.append(...elementsArray);
    }
    addItem(element) {
        if (!this.container) {
            return;
        }
        this.container.append(element);
    }
}
//# sourceMappingURL=Section.js.map