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
    expect(customElements.get('joomla-tab-element')).toBeTrue;
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

  it('Inserting a new tab at the end', function() {
    const tabs = fixture.el.firstElementChild; //.setAttribute('type', 'warning');

    expect(tabs.querySelector('button[aria-expanded=true]').innerText).toEqual('First tab');
    expect(tabs.querySelector('[active]').innerText).toEqual('First tab content');

    const newTab = document.createElement('joomla-tab-element');
    newTab.setAttribute('name', 'New one');
    newTab.innerText = 'New one Content';
    newTab.setAttribute('id', 'new-one');
    tabs.appendChild(newTab);

    // Activate the last one we just inserted
    tabs.activateTab(3);

    setTimeout(function() {
      expect(tabs.querySelector('button[aria-expanded=true]').innerText).toEqual('new-one');
      expect(tabs.querySelector('[active]').innerText).toEqual('New one Content');
    }, 1000);
  });

  it('Inserting a new tab at the begining', function() {
    const tabs = fixture.el.firstElementChild; //.setAttribute('type', 'warning');
    const nav = tabs.firstElementChild;

    expect(tabs.querySelector('button[aria-expanded=true]').innerText).toEqual('First tab');
    expect(tabs.querySelector('[active]').innerText).toEqual('First tab content');

    const newTab = document.createElement('joomla-tab-element');
    newTab.setAttribute('name', 'New one');
    newTab.innerText = 'New one Content';
    newTab.setAttribute('id', 'new-one');
    nav.insertAdjacentElement('afterend', newTab);

    // Activate the first one we just inserted
    tabs.activateTab(0);

    setTimeout(function() {
      expect(tabs.querySelector('button[aria-expanded=true]').innerText).toEqual('new-one');
      expect(tabs.querySelector('[active]').innerText).toEqual('New one Content');
    }, 1000);
  });

  it('Inserting a new tab at the middle', function() {
    const tabs = fixture.el.firstElementChild; //.setAttribute('type', 'warning');
    const afterTab = tabs.querySelector('#second-tab');

    expect(tabs.querySelector('button[aria-expanded=true]').innerText).toEqual('First tab');
    expect(tabs.querySelector('[active]').innerText).toEqual('First tab content');

    const newTab = document.createElement('joomla-tab-element');
    newTab.setAttribute('name', 'New one');
    newTab.innerText = 'New one Content';
    newTab.setAttribute('id', 'new-one');
    afterTab.insertAdjacentElement('afterend', newTab);

    // Activate the first one we just inserted
    tabs.activateTab(2);

    setTimeout(function() {
      expect(tabs.querySelector('button[aria-expanded=true]').innerText).toEqual('new-one');
      expect(tabs.querySelector('[active]').innerText).toEqual('New one Content');
    }, 1000);
  });

  it('Remove the last tab', function() {
    const tabs = fixture.el.firstElementChild; //.setAttribute('type', 'warning');

    expect(tabs.querySelector('button[aria-expanded=true]').innerText).toEqual('First tab');
    expect(tabs.querySelector('[active]').innerText).toEqual('First tab content');

    const tabElems = [].slice.call(tabs.children).filter((tab) => tab.tagName.toLowerCase() === 'joomla-tab-element');

    tabs.removeChild(tabElems[2]);

    setTimeout(function() {
      expect(tabs.querySelector('#third-tab')).toBeUndefined();
      expect(tabs.querySelector('[aria-controls=third-tab]')).toBeUndefined();
    }, 1000);
  });

  it('Removes th first tab', function() {
    const tabs = fixture.el.firstElementChild; //.setAttribute('type', 'warning');
    const tabElems = [].slice.call(tabs.children).filter((tab) => tab.tagName.toLowerCase() === 'joomla-tab-element');

    tabs.activateTab(tabElems[1]);

    expect(tabs.querySelector('button[aria-expanded=true]').innerText).toEqual('Second tab');
    expect(tabs.querySelector('[active]').innerText).toEqual('Second tab content');

    tabs.removeChild(tabElems[0]);

    setTimeout(function() {
      expect(tabs.querySelector('#first-tab')).toBeUndefined();
      expect(tabs.querySelector('[aria-controls=first-tab]')).toBeUndefined();
    }, 1000);
  });

  it('Removes a tab in the middle', function() {
    const tabs = fixture.el.firstElementChild; //.setAttribute('type', 'warning');
    const tabElems = [].slice.call(tabs.children).filter((tab) => tab.tagName.toLowerCase() === 'joomla-tab-element');

    tabs.activateTab(tabElems[2]);

    expect(tabs.querySelector('button[aria-expanded=true]').innerText).toEqual('Third tab');
    expect(tabs.querySelector('[active]').innerText).toEqual('Third tab content');

    tabs.removeChild(tabElems[1]);

    setTimeout(function() {
      expect(tabs.querySelector('#second-tab')).toBeUndefined();
      expect(tabs.querySelector('[aria-controls=second-tab]')).toBeUndefined();
    }, 1000);
  });
});
