import LOCALSTORAGE from '../constants/localsorage';

const driverSwitch = {
    isChecked: JSON.parse(localStorage.getItem(LOCALSTORAGE.CHECKED)) || false,
    setCheckedTrue() {
      localStorage.setItem(LOCALSTORAGE.CHECKED, true);
      this.isChecked = JSON.parse(localStorage.getItem(LOCALSTORAGE.CHECKED));
    },
    setCheckedFalse() {
        localStorage.setItem(LOCALSTORAGE.CHECKED, false);
        this.isChecked = JSON.parse(localStorage.getItem(LOCALSTORAGE.CHECKED));
      },
    checkedClear() {
      localStorage.removeItem(LOCALSTORAGE.CHECKED);
    }
  };

export default driverSwitch;