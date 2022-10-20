import filtersResetbtnListener from './filtersResetbtnListener';
import goodsSortingListener from './goodsSortingListener';
import modalClose from './modalListener';
import rangeAndCheckboxesListener from './rangeAndCheckboxesListener';
import resetSettingsBtnListener from './resetSettingsBtnListener';
import searchStringListener from './searchStringListener';

export default function listenerInit() {
  rangeAndCheckboxesListener();
  goodsSortingListener();
  searchStringListener();
  resetSettingsBtnListener();
  filtersResetbtnListener();
  modalClose();
}