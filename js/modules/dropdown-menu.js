import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(DropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(DropdownMenus);
    this.activeClass = 'active';
    if (events === undefined) this.events = ['touchstart', 'click']; 
    else this.events = events;
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
  }

  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove('active');
    });
  }

  dropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.dropdownMenusEvent();
    }
    return this;
  }
}
