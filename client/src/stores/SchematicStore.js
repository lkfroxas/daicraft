import AppDispatcher from '../dispatcher/AppDispatcher.js';
import { EventEmitter } from 'events';
import { CraftConstants } from '../constants/CraftConstants.js'

let schematic = {
  id: "",
  name: "",
  slots: []
};

function setSchematic(id, name) {
  schematic.id = id;
  schematic.name = name;
  console.log('id', id);
  console.log('name', name);
}

function setSlots(slots) {
  schematic.slots = slots.map(slot => {
    return {
      slotId: slot.SlotId,
      slotTypeId: slot.SlotTypeId,
      slotType: slot.SlotTypeName,
      tier: "",
      property: "",
      materialTypeId: slot.MaterialTypeId,
      materialType: slot.MaterialTypeName,
      material: "",
      quantity: slot.Quantity
    };
  });
}

function setSlotTier(index, tier) {
  schematic.slots[index].tier = tier;
}

function setSlotProperty(index, property) {
  schematic.slots[index].property = property;
}

function setSlotMaterial(index, material) {
  schematic.slots[index].material = material;
}

class SchematicStoreClass extends EventEmitter {
  getSchematic() {
    return schematic;
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

const SchematicStore = new SchematicStoreClass();

AppDispatcher.register((payload) => {
  const action = payload.action;

  switch (action.actionType) {
    case CraftConstants.SET_SLOTS:
      setSlots(action.slots);
      break;
    case CraftConstants.SELECT_SCHEMATIC:
      setSchematic(action.id, action.schematic);
      break;
    case CraftConstants.SELECT_SLOT_TIER:
      setSlotTier(action.index, action.tier);
      break;
    case CraftConstants.SELECT_SLOT_PROPERTY:
      setSlotProperty(action.index, action.property);
      break;
    case CraftConstants.SELECT_SLOT_MATERIAL:
      setSlotMaterial(action.index, action.material);
      break;
    default:
      return true;
  }

  SchematicStore.emitChange();

  return true;
});

export default SchematicStore;
