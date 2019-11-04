(() => {
  class joomlaBreadcrumb extends HTMLElement {
    /* Lifecycle, element appended to the DOM */
    connectedCallback() {
      const self = this;
      const nav = document.createElement('nav');
      const breadcrumbList = document.createElement('ol');
      const singleLi = document.createElement('li');
      const minimizeWrapper = document.createElement('div');
      const minimizeItemsWrapper = document.createElement('div');
      const toggleButton = document.createElement('span');
      const minimizeList = document.createElement('ol');

      toggleButton.classList.add('items-toggler');
      toggleButton.innerHTML = '...';
      singleLi.classList.add('minimize-list');
      minimizeItemsWrapper.classList.add('minimize-items-wrapper');
      minimizeWrapper.appendChild(toggleButton);
      minimizeWrapper.appendChild(minimizeItemsWrapper);
      minimizeWrapper.classList.add('minimize-items');
      toggleButton.addEventListener('click', () => {
        minimizeItemsWrapper.classList.toggle('active');
      });

      /* item manipulate */
      const items = [...this.querySelectorAll('li')];
      items.forEach((item) => {
        const createItem = document.createElement('li');
        const createLink = document.createElement('a');

        createItem.classList.add('joomla-breadcrumb-item');
        if (item.getAttribute('class')) {
          createLink.className = item.getAttribute('class');
        }
        if (item.getAttribute('activeClass')) {
          createLink.className += ` ${item.getAttribute('activeClass')}`;
        }
        createLink.setAttribute('href', item.getAttribute('href'));
        createLink.innerHTML = item.getAttribute('text');
        createItem.appendChild(createLink);
        breadcrumbList.append(createItem);
        item.parentNode.removeChild(item);
      });
      nav.append(breadcrumbList);
      self.append(nav);
      /* store items */
      const breadcrumbItems = breadcrumbList;
      const allItems = Array.from(breadcrumbItems.children);

      /* minimize items */
      const minimizeItemsFun = () => {
        if (allItems.length > 0) {
          breadcrumbList.innerHTML = '';
          const filterItems = allItems.filter((item, key) => key > 0);
          breadcrumbList.appendChild(allItems[0]);
          breadcrumbList.appendChild(singleLi);
          singleLi.append(minimizeWrapper);
          for (let i = filterItems.length - 1; i >= 0; i--) {
            if (breadcrumbList.offsetWidth < nav.offsetWidth) {
              singleLi.parentNode.insertBefore(filterItems[i], singleLi.nextSibling);
            } else {
              minimizeList.prepend(filterItems[i]);
            }
          }
          minimizeItemsWrapper.append(minimizeList);
          /* when responsive works */
          self.setAttribute('responsive', true);
        }
      };
      /* init minimizeItems function */
      if (breadcrumbList.offsetWidth + 100 > breadcrumbList.parentElement.offsetWidth) {
        minimizeItemsFun();
      }
      /* check on reisze */
      window.addEventListener('resize', () => {
        setTimeout(() => {
          if (breadcrumbList.offsetWidth + 100 > nav.offsetWidth) {
            minimizeItemsFun();
          } else if (breadcrumbList.offsetWidth < nav.offsetWidth) {
            if (self.getAttribute('responsive')) {
              if (allItems.length > 0) {
                const upated = Array.from(minimizeList.children);
                if (upated.length !== 0) {
                  for (let i = upated.length - 1; i >= 0; i--) {
                    if (breadcrumbList.offsetWidth + 100 < nav.offsetWidth) {
                      singleLi.parentNode.insertBefore(upated[i], singleLi.nextSibling);
                    }
                  }
                }
              }
            }
          }
          setTimeout(() => {
            if (minimizeList.children.length === 0) {
              singleLi.remove();
              self.setAttribute('responsive', false);
            }
          }, 200);
        }, 300);
      });
    }
  }
  customElements.define('joomla-breadcrumb', joomlaBreadcrumb);
})();
