describe('<joomla-alert-levels>', function(){
  beforeEach(function() {
    fixture.set(`
<joomla-alert type="info">
  <p id="text">Has some text</p>
</joomla-alert>
  `,
    true);
  });
  afterEach(function() {
    fixture.cleanup();
  });

  it('Custom Element script is loaded', function(){
    expect(typeof customElements.get('joomla-alert') === 'function').toBeTrue;
  });

  it('Has type info', function() {
    const type = fixture.el.firstElementChild.getAttribute('type')

    expect(type).toEqual('info');
  });

  it('Respects type attribute change, any unsupported value', function() {
    fixture.el.firstElementChild.setAttribute('type', 'unknown');
    const type = fixture.el.firstElementChild.getAttribute('type')

    expect(type).toEqual('info');
  });

  it('Respects type attribute change, warning', function() {
    fixture.el.firstElementChild.setAttribute('type', 'warning');
    const type = fixture.el.firstElementChild.getAttribute('type')

    expect(type).toEqual('warning');
  });

  it('Respects type attribute change, danger', function() {
    fixture.el.firstElementChild.setAttribute('type', 'danger');
    const type = fixture.el.firstElementChild.getAttribute('type')

    expect(type).toEqual('danger');
  });

  it('Respects type attribute change, success', function() {
    fixture.el.firstElementChild.setAttribute('type', 'success');
    const type = fixture.el.firstElementChild.getAttribute('type')

    expect(type).toEqual('success');
  });

  it('Has the right text', function() {
    const type = fixture.el.firstElementChild.querySelector('#text').innerText

    expect(type).toEqual('Has some text');
  });
});

describe('<joomla-alert-dismiss>', function(){
  beforeEach(function() {
    this.result = fixture.set(`
<joomla-alert type="info" dismiss="true">
  <p id="text">Has some text</p>
</joomla-alert>
  `,
    true);
  });
  afterEach(function() {
    fixture.cleanup();
  });

  it('Has close button', function() {
    const type = this.result[0].hasAttribute('dismiss')

    expect(type).toBeTrue;
  });

  it('Respects button attribute change, false', function() {
    const el = this.result[0];
    el.setAttribute('dismiss', 'false');
    const type = this.result[0].getAttribute('dismiss')
    const closeBtn = this.result[0].querySelectorAll('button.joomla-alert--close').length
    const close = this.result[0].querySelectorAll('button').length
    expect(type).toBe('false');
    expect(closeBtn).toBe(0);
    expect(close).toBe(0);
  });

  it('Respects button attribute change, any other value', function() {
    const el = this.result[0];
    el.setAttribute('dismiss', 'true');
    const type = this.result[0].getAttribute('dismiss')
    const closeBtn = this.result[0].querySelectorAll('button.joomla-alert--close').length
    const close = this.result[0].querySelectorAll('button').length
    expect(type).toBe('true');
    expect(closeBtn).toBe(1);
    expect(close).toBe(1);
  });

  it('Method close removes the alert', function() {
    const el = this.result[0];
    el.close();
    const type = this.result[0].querySelector('joomla-alert ')

    expect(type).toBe(null);
  });
});

describe('<joomla-alert-acknowledge>', function(){
  beforeEach(function() {
    this.result = fixture.set(`
<joomla-alert type="info" dismiss="true">
  <p id="text">Has some text</p>
</joomla-alert>
  `,
    true);
  });
  afterEach(function() {
    fixture.cleanup();
  });

  it('Has close button', function() {
    const type = this.result[0].hasAttribute('acknowledge')

    expect(type).toBeTrue;
  });

  it('Respects button attribute change, false', function() {
    const el = this.result[0];
    el.setAttribute('acknowledge', 'false');
    const type = this.result[0].getAttribute('acknowledge')
    const closeBtn = this.result[0].querySelectorAll('button.joomla-alert--close').length
    const close = this.result[0].querySelectorAll('button').length
    expect(type).toBe('false');
    expect(closeBtn).toBe(0);
    expect(close).toBe(0);
  });

  it('Respects button attribute change, any other value', function() {
    const el = this.result[0];
    el.setAttribute('acknowledge', '');
    const type = this.result[0].getAttribute('acknowledge')
    const closeBtn = this.result[0].querySelectorAll('button.joomla-alert--close').length
    const close = this.result[0].querySelectorAll('button').length
    expect(type).toBe('');
    expect(closeBtn).toBe(1);
    expect(close).toBe(1);
  });

  it('Method close removes the alert', function() {
    const el = this.result[0];
    el.close();
    const type = this.result[0].querySelector('joomla-alert ')

    expect(type).toBe(null);
  });
});
