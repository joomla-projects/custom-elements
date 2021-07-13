describe('<joomla-tabs>', function(){
  beforeEach(function() {
    fixture.setBase('tests/tabs')
    fixture.load('tabs.html', true);
  });
  afterEach(function() {
    fixture.cleanup();
  });

  it('Custom Element script is loaded', function(){
    expect(customElements.get('joomla-tabs')).toBeTrue;
    expect(customElements.get('joomla-tab')).toBeTrue;
  });

  it('Has type view', function() {
    const view = fixture.el.firstElementChild.getAttribute('view')

    expect(view).toEqual('tabs');
  });

  it('Change to Accordion', function() {
    fixture.el.firstElementChild.setAttribute('view', 'accordion');
    const view = fixture.el.firstElementChild.getAttribute('view');
    const navContainer = fixture.el.querySelector('[role="tablist"]');
    const navContainerHidden = navContainer.hasAttribute('hidden');

    expect(view).toEqual('accordion');
    expect(navContainer instanceof HTMLElement).toBeTrue();
    expect(navContainerHidden).toBeTrue();
  });

  it('First tab active', function() {
    const tabs = fixture.el.firstElementChild; //.setAttribute('type', 'warning');
    const activeTab = tabs.querySelector('[active]');
    const activeButton= tabs.querySelector('button[aria-expanded=true]');

    expect(activeButton.innerText).toEqual('First tab');
    expect(activeTab.innerText).toEqual('First tab content');
  });

  it('Activate another tab by clicking', function() {
    const tabs = fixture.el.firstElementChild; //.setAttribute('type', 'warning');
    expect(tabs.querySelector('button[aria-expanded=true]').innerText).toEqual('First tab');
    expect(tabs.querySelector('[active]').innerText).toEqual('First tab content');

    const activeButton2 = tabs.querySelector('[aria-controls=second-tab]');
    activeButton2.click();

    expect(tabs.querySelector('button[aria-expanded=true]').innerText).toEqual('Second tab');
    expect(tabs.querySelector('[active]').innerText).toEqual('Second tab content');
  });

  it('Activate another tab by API using the tab element', function() {
    const tabs = fixture.el.firstElementChild; //.setAttribute('type', 'warning');
    expect(tabs.querySelector('button[aria-expanded=true]').innerText).toEqual('First tab');
    expect(tabs.querySelector('[active]').innerText).toEqual('First tab content');

    tabs.activateTab(tabs.querySelector('#second-tab'));

    expect(tabs.querySelector('button[aria-expanded=true]').innerText).toEqual('Second tab');
    expect(tabs.querySelector('[active]').innerText).toEqual('Second tab content');
  });

  it('Activate another tab by API using the tab index', function() {
    const tabs = fixture.el.firstElementChild; //.setAttribute('type', 'warning');
    expect(tabs.querySelector('button[aria-expanded=true]').innerText).toEqual('First tab');
    expect(tabs.querySelector('[active]').innerText).toEqual('First tab content');

    tabs.activateTab(2);

    expect(tabs.querySelector('button[aria-expanded=true]').innerText).toEqual('Third tab');
    expect(tabs.querySelector('[active]').innerText).toEqual('Third tab content');
  });
});
