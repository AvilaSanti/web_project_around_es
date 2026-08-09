interface SectionConfig<T> {
    items: T[];
    renderer: (item: T) => HTMLElement;
}

export class Section<T> {
private sectionConfig: SectionConfig<T>;
private container: HTMLElement | null;

constructor({items, renderer}: SectionConfig<T>, sectionClass: string){
this.sectionConfig = {items, renderer};
this.container = document.querySelector(sectionClass);
}

public renderer(): void {
if (!this.container) {
    return;
}
const elementsArray: HTMLElement[] = [];
this.sectionConfig.items.forEach((item) => {
const element = this.sectionConfig.renderer(item); 
 elementsArray.push(element);
});
this.container.append(...elementsArray); 
}

public addItem(element: HTMLElement): void {
        if (!this.container) {
            return;
        }
          this.container.append(element);
}
}