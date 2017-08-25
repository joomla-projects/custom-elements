const Joomla = window.Joomla || {};

class JoomlaPasswordStrength {
  constructor(settings) {
    this.lowercase = settings.lowercase || 0;
    this.uppercase = settings.uppercase || 0;
    this.numbers = settings.numbers || 0;
    this.special = settings.special || 0;
    this.length = settings.length || 4;
  }

  getScore(value) {
    let score = 0;
    let mods = 0;
    const sets = ['lowercase', 'uppercase', 'numbers', 'special', 'length'];
    sets.forEach(function (set) {
      if (Object.prototype.hasOwnProperty.call(this, set) && this[set] > 0) {
        mods += 1;
      }
    });

    score += this.calc(value, /[a-z]/g, this.lowercase, mods);
    score += this.calc(value, /[A-Z]/g, this.uppercase, mods);
    score += this.calc(value, /[0-9]/g, this.numbers, mods);
    score += this.calc(value, /[$!#?=;:*-_€%&()`´]/g, this.special, mods);
    const comp = this.length * value.length;
    if (mods === 1) {
      score += value.length > this.length ? 100 : 100 / comp;
    } else {
      score += value.length > this.length ? (100 / mods) : (100 / mods) / comp;
    }

    return score;
  }
}

class JoomlaPasswordElement extends HTMLElement {
  static get observedAttributes() {
    return ['minLength', 'minIntegers', 'minSymbols', 'minUppercase', 'minLowercase'];
  }

  static get minLength() { return this.getAttribute('minLength'); }
  static get minIntegers() { return this.getAttribute('minIntegers'); }
  static get minSymbols() { return this.getAttribute('minSymbols'); }
  static get minUppercase() { return this.getAttribute('minUppercase'); }
  static get minLowercase() { return this.getAttribute('minLowercase'); }
  static set minLength(value) { this.setAttribute('minLength', value); }
  static set minIntegers(value) { this.setAttribute('minIntegers', value); }
  static set minSymbols(value) { this.setAttribute('minSymbols', value); }
  static set minUppercase(value) { this.setAttribute('minUppercase', value); }
  static set minLowercase(value) { this.setAttribute('minLowercase', value); }

  constructor() {
    super();

    document.formvalidator.setHandler('password-strength', (value) => {
      let returnedValue = false;
      const minLength = this.minLength;
      const minIntegers = this.minIntegers;
      const minSymbols = this.minSymbols;
      const minUppercase = this.minUppercase;
      const minLowercase = this.minLowercase;

      const strength = new PasswordStrength({
        lowercase: minLowercase || 0,
        uppercase: minUppercase || 0,
        numbers: minIntegers || 0,
        special: minSymbols || 0,
        length: minLength || 4,
      });

      const score = strength.getScore(value);
      if (score === 100) returnedValue = true;

      return returnedValue;
    });
  }

  connectedCallback() {
    const input = this.querySelector('input');
    const self = this;
    let startClass = '';
    let initialVal = '';

    if (!input.value.length) {
      startClass = ' bg-danger';
      initialVal = 0;
    }

    if (this.strength) {
      /** Create a progress meter and the label * */
      const meter = document.createElement('div');
      meter.setAttribute('class', 'progress');

      const meter2 = document.createElement('div');
      meter2.setAttribute('class', `progress-bar progress-bar-striped progress-bar-animated${startClass}`);
      meter2.style.width = 0 + initialVal;
      meter2.max = 100;
      meter2.setAttribute('aria-describedby', `password-${input.id}`);
      meter.appendChild(meter2);

      const label = document.createElement('div');
      label.setAttribute('class', 'text-xs-center');
      label.setAttribute('id', `password-${input.id}`);

      input.parentNode.insertAdjacentElement('afterEnd', label);
      input.parentNode.insertAdjacentElement('afterEnd', meter);

      /** Add a data attribute for the required * */
      if (input.value.length > 0) {
        input.setAttribute('required', true);
      }

      /** Add a listener for input data change * */
      input.addEventListener('keyup', (event) => {
        self.getMeter(event.target);
      });
    }

    if (this.switchable) {
      const inputGroup = this.querySelector('.input-group-addon');

      inputGroup.addEventListener('click', function () {
        const target = this.querySelector('.fa');
        const srText = target.nextElementSibling;

        if (target.classList.contains('fa-eye')) {
          // Update the icon class
          target.classList.remove('fa-eye');
          target.classList.add('fa-eye-slash');

          // Update the input type
          input.type = 'text';

          // Updat the text for screenreaders
          srText.innerText = Joomla.JText._('JSHOW');
        } else {
          // Update the icon class
          target.classList.add('fa-eye');
          target.classList.remove('fa-eye-slash');

          // Update the input type
          input.type = 'password';

          // Updat the text for screenreaders
          srText.innerText = Joomla.JText._('JHIDE');
        }
      });
    }
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    switch (attr) {
      case 'minLength':
        if (parseInt(newValue, 0) !== newValue) {
          this.minLength(parseInt(newValue, 0));
        }
        break;
      case 'minIntegers':
        if (parseInt(newValue, 0) !== newValue) {
          this.minIntegers(parseInt(newValue, 0));
        }
        break;
      case 'minSymbols':
        if (parseInt(newValue, 0) !== newValue) {
          this.minSymbols(parseInt(newValue, 0));
        }
        break;
      case 'minUppercase':
        if (parseInt(newValue, 0) !== newValue) {
          this.minUppercase(parseInt(newValue, 0));
        }
        break;
      case 'minLowercase':
        if (parseInt(newValue, 0) !== newValue) {
          this.minLowercase(parseInt(newValue, 0));
        }
        break;
      default:
        break;
    }
  }

  /** Method to check the input and set the meter * */
  getMeter(element) {
    const meter = document.querySelector('.progress-bar');
    const strength = new PasswordStrength({
      lowercase: this.minLowercase || 0,
      uppercase: this.minUppercase || 0,
      numbers: this.minIntegers || 0,
      special: this.minSymbols || 0,
      length: this.minLength || 4,
    });

    const score = strength.getScore(element.value);
    const i = meter.getAttribute('aria-describedby').replace(/^\D+/g, '');
    const label = element.parentNode.parentNode.querySelector(`#password-${i}`);

    if (score > 79) {
      meter.setAttribute('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
      label.innerHTML = Joomla.JText._('JFIELD_PASSWORD_INDICATE_COMPLETE');
    }
    if (score > 64 && score < 80) {
      meter.setAttribute('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
      label.innerHTML = Joomla.JText._('JFIELD_PASSWORD_INDICATE_INCOMPLETE');
    }
    if (score > 50 && score < 65) {
      meter.setAttribute('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
      label.innerHTML = Joomla.JText._('JFIELD_PASSWORD_INDICATE_INCOMPLETE');
    }
    if (score > 40 && score < 51) {
      meter.setAttribute('class', 'progress-bar progress-bar-striped progress-bar-animated bg-warning');
      label.innerHTML = Joomla.JText._('JFIELD_PASSWORD_INDICATE_INCOMPLETE');
    }
    if (score < 41) {
      meter.setAttribute('class', 'progress-bar progress-bar-striped progress-bar-animated bg-danger');
      label.innerHTML = Joomla.JText._('JFIELD_PASSWORD_INDICATE_INCOMPLETE');
    }
    if (score === 100) {
      meter.setAttribute('class', 'progress-bar progress-bar-striped progress-bar-animated bg-success');
    }
    meter.style.width = `${score}%`;

    if (!element.value.length) {
      meter.setAttribute('class', 'progress-bar progress-bar-striped progress-bar-animated');
      label.innerHTML = '';
      element.setAttribute('required', '');
    }
  }
}

customElements.define('joomla-password', JoomlaPasswordElement);
