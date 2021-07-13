describe('<joomla-alert-levels>', function(){
  beforeEach(function() {
    fixture.setBase('tests/alert');
    fixture.load('alert.html', true);
  });
  afterEach(function() {
    fixture.cleanup();
  });

  it('Custom Element script is loaded', function(){
    expect(customElements.get('joomla-alert')).toBeTrue;
  });

  it('Has type info', function() {
    const type = fixture.el.firstElementChild.getAttribute('type')

    expect(type).toEqual('info');
  });

  it('Respects type attribute change, any unsupported value', function() {
    fixture.el.firstElementChild.setAttribute('type', 'unknown');
    const type = fixture.el.firstElementChild.getAttribute('type');

    expect(type).toEqual('info');
  });

  it('Respects type attribute change, warning', function() {
    fixture.el.firstElementChild.setAttribute('type', 'warning');
    const type = fixture.el.firstElementChild.getAttribute('type');

    expect(type).toEqual('warning');
  });

  it('Respects type attribute change, danger', function() {
    fixture.el.firstElementChild.setAttribute('type', 'danger');
    const type = fixture.el.firstElementChild.getAttribute('type');

    expect(type).toEqual('danger');
  });

  it('Respects type attribute change, success', function() {
    fixture.el.firstElementChild.setAttribute('type', 'success');
    const type = fixture.el.firstElementChild.getAttribute('type');

    expect(type).toEqual('success');
  });

  it('Has the right text', function() {
    const type = fixture.el.firstElementChild.querySelector('#text').innerText;

    expect(type).toEqual('Has some text');
  });
});

describe('<joomla-alert-dismiss>', function(){
  beforeEach(function() {
    fixture.setBase('tests/alert');
    fixture.load('alert.html', true);
  });
  afterEach(function() {
    fixture.cleanup();
  });

  it('Has close button', function() {
    const type = fixture.el.firstElementChild.hasAttribute('dismiss');

    expect(type).toBeTrue;
  });

  it('Respects button attribute change, false', function() {
    const el = fixture.el.firstElementChild;
    el.setAttribute('dismiss', 'false');
    const type = el.getAttribute('dismiss');
    const closeBtn = el.querySelectorAll('button.joomla-alert--close').length;
    const close = el.querySelectorAll('button').length;
    expect(type).toBe('false');
    expect(closeBtn).toBe(0);
    expect(close).toBe(0);
  });

  it('Respects button attribute change, true', function() {
    const el = fixture.el.firstElementChild;
    el.setAttribute('dismiss', 'true');
    const type = el.getAttribute('dismiss');
    const closeBtn = el.querySelectorAll('button.joomla-alert--close').length;
    const close = el.querySelectorAll('button').length;
    expect(type).toBe('true');
    expect(closeBtn).toBe(1);
    expect(close).toBe(1);
  });

  it('Method close removes the alert', function() {
    const el = fixture.el.firstElementChild;
    el.close();
    const type = el.querySelector('joomla-alert');

    expect(type).toBe(null);
  });
});
