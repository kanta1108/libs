class MyItyped {
  constructor(target, strs, delay) {
    this.target = document.querySelector(target);
    this.strs = strs;
    this.delay = delay;
    this._init();
  }
  _init() {
    ityped.init(this.target, {
      showCursor: false,
      strings: [this.strs],
      startDelay: this.delay,
      typeSpeed: 50,
      loop: false,
      disableBackTyping: true,
      cursorChar: "|",
    });
  }
}

export class CreateTypedText {
  constructor(strings, parent) {
    this.strings = strings;
    this.parent = parent;
    this._create();
  }

  _create() {
    for (let i = 0; i < this.strings.length; i++) {
      let p = document.createElement("p");
      p.classList.add(`ityped${i + 1}`);
      document.querySelector(this.parent).appendChild(p);
      new MyItyped(`.ityped${i + 1}`, this.strings[i], 500 + 4000 * i);
    }
  }
}
