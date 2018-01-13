import AppDispatcher from '../dispatcher/AppDispatcher.js';
import { CraftConstants } from '../constants/CraftConstants.js';

class CraftActions {
  addItem(item) {
    AppDispatcher.handleAction({
      actionType: CraftConstants.ITEM_ADD,
      item: item
    });
  }

  removeItem(index, item) {
    AppDispatcher.handleAction({
      actionType: CraftConstants.ITEM_REMOVE,
      index: index,
      item: item
    });
  }

  selectSchematic(id, schematic) {
    AppDispatcher.handleAction({
      actionType: CraftConstants.SELECT_SCHEMATIC,
      id: id,
      schematic: schematic
    });
  }

  setSlots(slots) {
    AppDispatcher.handleAction({
      actionType: CraftConstants.SET_SLOTS,
      slots: slots
    });
  }

  selectSlotTier(index, tier) {
    AppDispatcher.handleAction({
      actionType: CraftConstants.SELECT_SLOT_TIER,
      index: index,
      tier: tier
    });
  }

  selectSlotProperty(index, property) {
    AppDispatcher.handleAction({
      actionType: CraftConstants.SELECT_SLOT_PROPERTY,
      index: index,
      property: property
    });
  }

  selectSlotMaterial(index, material) {
    AppDispatcher.handleAction({
      actionType: CraftConstants.SELECT_SLOT_MATERIAL,
      index: index,
      material: material
    });
  }
}

export default new CraftActions();
