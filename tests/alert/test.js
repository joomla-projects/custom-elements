describe('some test that needs a fixture', function(){
  // If base path is different from the default `spec/fixtures`
  before(function(){
    fixture.setBase('fixtures')
  });

  beforeEach(function(){
    this.result = fixture.load('alert.html');
  });

  afterEach(function(){
    fixture.cleanup()
  });

  it('plays with the html fixture', function(){
    expect(fixture.el.firstChild).to.equal(this.result[0][0]);
  });

  // ...
});


// suite('<joomla-alert-levels>', () => {

//   let myEl;

//   setup(() => {
//     myEl = fixture('alert-element-basic');
//   });

//   test('Custom Element script is loaded', () => {
//     assert.equal(typeof customElements.get('joomla-alert') === 'function', true);
//   });

//   test('Has type info', () => {
//     assert.equal(myEl.getAttribute('type'), 'info');
//   });

//   test('Respects type attribute change, any unsupported value', () => {
//     myEl.setAttribute('type', 'unknown');
//     assert.equal(myEl.getAttribute('type'), 'info');
//   });

//   test('Respects type attribute change, warning', () => {
//     myEl.setAttribute('type', 'warning');
//     assert.equal(myEl.getAttribute('type'), 'warning');
//   });

//   test('Respects type attribute change, danger', () => {
//     myEl.setAttribute('type', 'danger');
//     assert.equal(myEl.getAttribute('type'), 'danger');
//   });

//   test('Respects type attribute change, success', () => {
//     myEl.setAttribute('type', 'success');
//     assert.equal(myEl.getAttribute('type'), 'success');
//   });

//   test('Has the right text', () => {
//     console.info(myEl)
//     assert.equal(myEl.querySelector('#text').innerText, 'Has some text');
//   });
// });

// suite('<joomla-alert-dismiss>', () => {

//   let myEl;

//   setup(() => {
//     myEl = fixture('alert-element-dismiss');
//   });

//   test('Has close button', function () {
//     assert.equal(myEl.getAttribute('dismiss'), 'true');
//   });

//   test('Respects button attribute change, false', () => {
//     myEl.setAttribute('dismiss', 'false');
//     assert.equal(myEl.getAttribute('dismiss'), 'false');
//     assert.equal(myEl.querySelectorAll('button.joomla-alert--close').length, 0);
//     assert.equal(myEl.querySelector('button'), null);
//   });

//   test('Respects button attribute change, any other value', () => {
//     myEl.setAttribute('dismiss', 'true');
//     assert.equal(myEl.getAttribute('dismiss'), 'true');
//     assert.equal(myEl.querySelectorAll('button.joomla-alert--close').length, 1);
//     assert.equal(myEl.querySelector('button').tagName.toLowerCase(), 'button');
//   });

//   test('Method close removes the alert', () => {
//     myEl.close();
//     assert.equal(fixture('alert-element-basic').length, undefined);
//   });

// });

// suite('<joomla-alert-acknowledge>', () => {

//   let myEl;

//   setup(() => {
//     myEl = fixture('alert-element-acknowledge');
//   });

//   test('Has close button', function () {
//     assert.equal(myEl.getAttribute('acknowledge'), 'true');
//   });

//   test('Respects button attribute change, false', () => {
//     myEl.setAttribute('acknowledge', 'false');
//     assert.equal(myEl.getAttribute('acknowledge'), 'false');
//     assert.equal(myEl.querySelectorAll('button.joomla-alert-button--close').length, 0);
//     assert.equal(myEl.querySelector('button'), null);
//   });

//   test('Respects button attribute change, any other value', () => {
//     myEl.setAttribute('acknowledge', '');
//     assert.equal(myEl.getAttribute('acknowledge'), '');
//     assert.equal(myEl.querySelectorAll('button.joomla-alert-button--close').length, 1);
//     assert.equal(myEl.querySelector('button').tagName.toLowerCase(), 'button');
//   });

//   test('Method close removes the alert', () => {
//     myEl.close();
//     assert.equal(fixture('alert-element-basic').length, undefined);
//   });

// });
