import AppDispatcher from '../dispatcher/AppDispatcher.js';
import { EventEmitter } from 'events';
import { CraftConstants } from '../constants/CraftConstants.js'

let list = {};

function addItem(item) {
  addSlots(item.slots);
  if (item.rune) {
    addSlots(item.rune.slots);
  }
  console.log('list', list);
}

function addSlots(slots) {
  for (var slot of slots) {
    if (list[slot.material]) {
      list[slot.material] += parseInt(slot.quantity, 10);
    } else {
      list[slot.material] = parseInt(slot.quantity, 10);
    }
  }
}

function removeItem(item) {
  removeSlots(item.slots);
  if (item.rune) {
    removeSlots(item.rune.slots)
  }
  console.log('list', list);
}

function removeSlots(slots) {
  for (var slot of slots) {
    list[slot.material] -= parseInt(slot.quantity, 10);
    if (list[slot.material] === 0) delete list[slot.material];
  }
}

class ShoppingListStoreClass extends EventEmitter {
  getList() {
    return list;
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

const ShoppingListStore = new ShoppingListStoreClass();

AppDispatcher.register((payload) => {
  const action = payload.action;

  switch (action.actionType) {
    case CraftConstants.ITEM_ADD:
      addItem(action.item);
      break;
    case CraftConstants.ITEM_REMOVE:
      removeItem(action.item);
      break;
    default:
      return true;
  }

  ShoppingListStore.emitChange();

  return true;
});

export default ShoppingListStore;
