interface SectionConfig<T> {
  items: T[];
  renderer: (item: T) => void;
}

export class Section<T> {
  private _items: T[];
  private _renderer: (item: T) => void;
  private _container: HTMLElement | null;

  constructor({ items, renderer }: SectionConfig<T>, sectionClass: string) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(sectionClass);
  }

  public renderItems(): void {
    if (!this._container) return;
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  public addItem(element: HTMLElement): void {
    if (!this._container) return;
    this._container.prepend(element);
  }
}
