import AppDispatcher from '../dispatcher/AppDispatcher.js';
import { EventEmitter } from 'events';
import { CraftConstants } from '../constants/CraftConstants.js'

let items = [];

function addItem(item) {
  items.push(Object.assign({}, item));
  console.log('items', items);
}

function removeItem(index) {
  items.splice(index, 1);
}

class ItemStoreClass extends EventEmitter {
  getItems() {
    return items;
  }

  emitChange() {
    this.emit('change');
  }

  addChangeListener(callback) {
    this.on('change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
}

const ItemStore = new ItemStoreClass();

AppDispatcher.register((payload) => {
  const action = payload.action;

  switch (action.actionType) {
    case CraftConstants.ITEM_ADD:
      addItem(action.item);
      break;
    case CraftConstants.ITEM_REMOVE:
      removeItem(action.index);
      break;
    default:
      return true;
  }

  ItemStore.emitChange();

  return true;
});

export default ItemStore;
