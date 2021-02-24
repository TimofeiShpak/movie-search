const MAX_RADIUS = 20;
const MIN_RADIUS = 0;
const typePast = JSON.parse(localStorage.getItem('myKey'));

const firstLineKeys = {
  ruSmall: ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ruShift: ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
  ruShiftCaps: ['ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
  ruCaps: ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  enCaps: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  enSmall: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  enShift: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
  enShiftCaps: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
  code: ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7',
    'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  name: 'firstLine',
};

const secondLineKeys = {
  ruSmall: ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
  ruShift: ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del'],
  ruShiftCaps: ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del'],
  ruCaps: ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del'],
  enSmall: ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
  enShift: ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'],
  enShiftCaps: ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Del'],
  enCaps: ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del'],
  code: ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO',
    'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
  name: 'secondLine',
};

const thirdLineKeys = {
  ruSmall: ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ruShift: ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
  ruShiftCaps: ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ruCaps: ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
  enSmall: ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
  enShift: ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
  enShiftCaps: ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter'],
  enCaps: ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'],
  code: ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL',
    'Semicolon', 'Quote', 'Enter'],
  name: 'thirdLine',
};

const forthLineKeys = {
  ruSmall: ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift'],
  ruShift: ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'Shift'],
  ruShiftCaps: ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '▲', 'Shift'],
  ruCaps: ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '▲', 'Shift'],
  enSmall: ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'],
  enShift: ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift'],
  enShiftCaps: ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '▲', 'Shift'],
  enCaps: ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '▲', 'Shift'],
  code: ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma',
    'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  name: 'forthLine',
};

const fifthLineKeys = {
  ruSmall: ['Ctrl', 'lang', 'Alt', '', 'Alt', '◄', '▼', '►', 'Ctrl'],
  code: ['ControlLeft', 'lang', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown',
    'ArrowRight', 'ControlRight'],
  name: 'fifthLine',
};

const textInput = document.querySelector('.search-input');
const wrapper = document.createElement('div');
const footer = document.querySelector('.show-result');
const arrayLines = [];
const arrayLinesKeys = [firstLineKeys, secondLineKeys, thirdLineKeys, forthLineKeys, fifthLineKeys];
const keyboard = document.querySelector('.keyboard');

wrapper.classList.add('key-wrapper');
wrapper.classList.add('hide-keyboard');

function addElement(element, place) {
  place.append(element);
}

footer.before(wrapper);

for (let i = 0; i < 5; i++) {
  const line = document.createElement('div');
  line.classList.add('line');
  arrayLines.push(line);
  addElement(arrayLines[i], wrapper);
}

let type = 'ruSmall';
function createRow() {
  for (let j = 0; j < arrayLinesKeys.length; j++) {
    const keys = arrayLinesKeys[j][type];
    for (let i = 0; i < keys.length; i++) {
      const button = document.createElement('button');
      button.classList.add('button-small');
      button.innerText = keys[i];
      addElement(button, arrayLines[j]);
    }
  }
}
createRow();

if (typePast) {
  if (typePast[0] === 'e') {
    type = 'enSmall';
  } else if (typePast[0] === 'r') {
    type = 'ruSmall';
  }
}

arrayLines[0].children[13].classList.add('bigBtnL');
arrayLines[1].children[0].classList.add('tab');
arrayLines[1].children[14].classList.add('littleBtn');
arrayLines[2].children[0].classList.add('bigBtnL');
arrayLines[2].children[12].classList.add('bigBtnR');
arrayLines[2].children[12].classList.add('enter');
arrayLines[3].children[0].classList.add('bigBtnL');
arrayLines[3].children[11].classList.add('littleBtn');
arrayLines[3].children[12].classList.add('bigBtnR');

for (let i = 0; i < 10; i++) {
  if (i !== 1 && i < 9 && i !== 3) {
    arrayLines[4].children[i].classList.add('littleBtn');
  }
}
arrayLines[4].children[1].classList.add('lang');
arrayLines[4].children[3].classList.add('space');

const deleteButton = arrayLines[1].children[14];
const shiftLeftButton = arrayLines[3].children[0];
const shiftRightButton = arrayLines[3].children[12];
const controlLeftButton = arrayLines[4].children[0];
const controlRightButton = arrayLines[4].children[8];
const altLeftButton = arrayLines[4].children[2];
const altRightButton = arrayLines[4].children[4];
const spaceButton = arrayLines[4].children[3];
const arrowUpButton = arrayLines[3].children[11];
const arrowLeftButton = arrayLines[4].children[5];
const arrowDownButton = arrayLines[4].children[6];
const arrowRightButton = arrayLines[4].children[7];
const capsLockButton = arrayLines[2].children[0];
const langButton = arrayLines[4].children[1];
const enterButton = arrayLines[2].children[12];

let isHide = true;
let checkAnimation = 0;
const checkElem = {};
let checkShiftUp = 1; // проверка нажата ли кнопка shift
let checkCaps = 1; // проверка нажата ли кнопка CapsLock

function change() {
  langButton.innerText = `lang: ${type.slice(0, 2)}`;
  const save = JSON.stringify(type);
  localStorage.setItem('myKey', save);
  for (let j = 0; j < arrayLinesKeys.length; j++) {
    if (arrayLinesKeys[j][type] !== undefined) {
      const keys = arrayLinesKeys[j][type];
      for (let i = 0; i < keys.length; i++) {
        if (keys[i].indexOf('lang') < 0) {
          arrayLines[j].children[i].innerText = keys[i];
        }
      }
    }
  }
}
change();

function animationDown(e) {
  if (!checkAnimation || checkElem[e.innerText] === undefined) {
    checkElem[e.innerText] = 1;
    let radius = MIN_RADIUS;
    setInterval(() => {
      radius = +radius;
      if (radius < MAX_RADIUS) {
        radius += 1; e.style.borderRadius = `${radius}px`;
      }
    }, 5);
    checkAnimation = 1;
  }
}

function animationUp(e) {
  checkAnimation = 0;
  delete checkElem[e.innerText];
  if (e.className !== 'key-wrapper') {
    let radius = MAX_RADIUS;
    const interval = setInterval(() => {
      radius = +radius;
      if (radius > MIN_RADIUS) {
        radius -= 1; e.style.borderRadius = `${radius}px`;
      } else {
        e.style.borderRadius = '';
        clearInterval(interval);
      }
    }, 5);
  }
}

function capsLock() {
  switch (type) {
    case 'ruSmall':
      type = 'ruCaps';
      capsLockButton.classList.add('active');
      animationDown(capsLockButton);
      break;
    case 'enSmall':
      type = 'enCaps';
      capsLockButton.classList.add('active');
      animationDown(capsLockButton);
      break;
    case 'ruCaps':
      type = 'ruSmall';
      capsLockButton.classList.remove('active');
      animationUp(capsLockButton);
      break;
    default:
      type = 'enSmall';
      capsLockButton.classList.remove('active');
      animationUp(capsLockButton);
  }
  change();
}

const checkButtons = ['key-wrapper', 'line', 'Ctrl', 'Alt', 'lang: en', 'lang: ru', 'lang', 'Enter'];
wrapper.addEventListener('click', (e) => {
  const buttonClassName = e.target.className;
  const buttonInnerText = e.target.innerText;
  if (!checkButtons.includes(buttonClassName) && !checkButtons.includes(buttonInnerText)) {
    wrapper.classList.remove('hide-keyboard');
    isHide = false;
    textInput.focus();
    switch (buttonInnerText) {
      case '◄':
        if (textInput.selectionStart > 0) {
          textInput.setSelectionRange(textInput.selectionStart - 1, textInput.selectionEnd - 1);
        }
        break;
      case 'Shift':
        break;
      case '►':
        textInput.setSelectionRange(textInput.selectionStart + 1, textInput.selectionEnd + 1);
        break;
      case '▼':
        break;
      case '▲':
        break;
      case '':
        textInput.setRangeText(' ', textInput.selectionStart, textInput.selectionEnd, 'end');
        break;
      case 'Tab':
        textInput.setRangeText('    ', textInput.selectionStart, textInput.selectionEnd, 'end');
        break;
      case 'Backspace':
        if (textInput.selectionStart > 0) {
          textInput.setRangeText('', textInput.selectionStart - 1, textInput.selectionEnd, 'end');
        }
        break;
      case 'Del':
        textInput.setRangeText('', textInput.selectionStart, textInput.selectionEnd + 1, 'end');
        break;
      case 'CapsLock':
        capsLock();
        break;
      default:
        textInput.setRangeText(buttonInnerText, textInput.selectionStart, textInput.selectionEnd, 'end');
    }
  }
});

function buttonDown(e) {
  if (e !== undefined) {
    e.click();
    if (e.className !== 'key-wrapper' && e.innerText !== 'Enter') {
      animationDown(e);
      e.classList.add('active');
    }
  }
}

function buttonUp(e) {
  if (e !== undefined && e.innerText !== 'Enter') {
    animationUp(e);
    e.classList.remove('active');
  }
}

function shiftDown() {
  if (checkShiftUp) {
    checkShiftUp = 0;
    switch (type) {
      case 'ruSmall':
        type = 'ruShift';
        break;
      case 'enSmall':
        type = 'enShift';
        break;
      case 'ruCaps':
        type = 'ruShiftCaps';
        break;
      default:
        type = 'enShiftCaps';
    }
    change();
  }
}

function shiftUp() {
  checkShiftUp = 1;
  switch (type) {
    case 'ruShift':
      type = 'ruSmall';
      break;
    case 'enShift':
      type = 'enSmall';
      break;
    case 'ruShiftCaps':
      type = 'ruCaps';
      break;
    default:
      type = 'enCaps';
  }
  change();
}

wrapper.addEventListener('mousedown', (e) => {
  const buttonClassName = e.target.className;
  const buttonInnerText = e.target.innerText;
  if (buttonClassName !== 'key-wrapper' && buttonClassName !== 'line') {
    e.target.classList.add('active');
    if (buttonInnerText !== 'CapsLock') {
      animationDown(e.target);
      if (buttonInnerText === 'Shift') {
        shiftDown();
        e.target.classList.add('active');
      }
    }
  }
});

wrapper.addEventListener('mouseup', (e) => {
  textInput.focus();
  const buttonClassName = e.target.className;
  const buttonInnerText = e.target.innerText;
  if (buttonClassName !== 'key-wrapper' && buttonClassName !== 'line' && buttonInnerText !== 'CapsLock') {
    e.target.classList.remove('active');
    animationUp(e.target);
    if (buttonInnerText === 'Shift') {
      shiftUp();
      e.target.classList.remove('active');
      change();
    }
  }
});

wrapper.addEventListener('mouseout', (e) => {
  const buttonClassName = e.target.className;
  const buttonInnerText = e.target.innerText;
  if (buttonClassName.indexOf('active') !== -1) {
    if (buttonClassName !== 'key-wrapper' && buttonClassName !== 'line' && buttonInnerText !== 'CapsLock') {
      if (buttonInnerText === 'Shift') {
        shiftUp();
      }
      e.target.classList.remove('active');
      animationUp(e.target);
    }
  }
});

function changeLanguage() {
  if (type[0] === 'r') {
    type = (`en${type.slice(2)}`);
  } else {
    type = (`ru${type.slice(2)}`);
  }
  change();
}

function findOtherButton(code) {
  let element;
  for (let i = 0; i < arrayLinesKeys.length; i++) {
    for (let j = 0; j < arrayLinesKeys[i].code.length; j++) {
      if (code === arrayLinesKeys[i].code[j]) {
        element = arrayLines[i].children[j];
      }
    }
  }
  return element;
}

function findButton(code, key) {
  switch (code) {
    case 'ShiftLeft':
      return shiftLeftButton;
    case 'ShiftRight':
      return shiftRightButton;
    case 'Space':
      return spaceButton;
    case 'Delete':
      return deleteButton;
    case 'ControlLeft':
      return controlLeftButton;
    case 'ControlRight':
      return controlRightButton;
    case 'AltRight':
      return altRightButton;
    case 'AltLeft':
      return altLeftButton;
    case 'MetaLeft':
      return undefined;
    case 'CapsLock':
      return wrapper;
    case 'ArrowUp':
      return arrowUpButton;
    case 'ArrowLeft':
      return arrowLeftButton;
    case 'ArrowDown':
      return arrowDownButton;
    case 'ArrowRight':
      return arrowRightButton;
    default:
      return findOtherButton(code, key);
  }
}

function checkCapsLock() {
  if (checkCaps) {
    checkCaps = 0;
    capsLock();
  }
}

const keydown = (e) => {
  textInput.focus();
  if (!isHide) {
    e.preventDefault();
    switch (e.code) {
      case 'ShiftLeft':
        shiftDown();
        break;
      case 'ShiftRight':
        shiftDown();
        break;
      case 'CapsLock':
        checkCapsLock();
        break;
      default:
    }
    buttonDown(findButton(e.code, e.key));
  }
  if (e.code === 'Enter') {
    enterButton.click();
  }
};

const keyup = (e) => {
  if (!isHide) {
    e.preventDefault();
    switch (e.code) {
      case 'ShiftLeft':
        shiftUp();
        break;
      case 'ShiftRight':
        shiftUp();
        break;
      case 'CapsLock':
        checkCaps = 1;
        break;
      default:
    }
    buttonUp(findButton(e.code, e.key));
  }
};

document.addEventListener('keyup', keyup);
document.addEventListener('keydown', keydown);

langButton.addEventListener('click', () => {
  changeLanguage();
});

keyboard.addEventListener('click', () => {
  if (isHide) {
    wrapper.classList.remove('hide-keyboard');
  } else {
    wrapper.classList.add('hide-keyboard');
  }
  isHide = !isHide;
});
