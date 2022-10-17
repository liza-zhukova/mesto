export default class Section{
    constructor({items, renderer}, elementContainer){
        this._items = items;
        this._renderer = renderer;
        this._elementContainer = document.querySelector(elementContainer);
    }

    renderItems(){
        this._items.forEach((item) => {
            this._renderer(item)
        });
    }

    addItem(item){
        this._elementContainer.prepend(item)
    }
}