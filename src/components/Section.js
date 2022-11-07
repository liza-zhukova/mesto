export default class Section{
    constructor({renderer}, elementContainer){
        this._renderer = renderer;
        this._elementContainer = document.querySelector(elementContainer);
    }

    renderItems(items){
        items.forEach((item) => {
          this._renderer(item)
        });
    }

    addMyItem(item){
        this._elementContainer.prepend(item);
    }

    addItem(item){
        this._elementContainer.append(item)
    }
}