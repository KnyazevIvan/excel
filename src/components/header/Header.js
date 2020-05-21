import {ExcelComponent} from '../../core/ExcelComponent';
import {changeTitle} from '../../redux/actions';
import {$} from '../../core/dom';

export class Header extends ExcelComponent {
  static className = 'excel__header'
  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input'],
      ...options
    })
  }
  toHTML() {
    const title = this.store.getState().title
    return `<input type="text" value="${title}" class="input"></input>
        <div>
          <div class="button">
            <i class="material-icons">delete</i>
          </div>
          <div class="button">
            <i class="material-icons">exit_to_app</i>
          </div>`
  }
  onInput(event) {
    const $target = $(event.target)
    this.$dispatch(changeTitle($target.text()))
  }
}