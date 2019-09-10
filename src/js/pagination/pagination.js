(()=>{
  class joomlaPagination extends HTMLElement {
    /* Attributes to monitor */
    static get observedAttributes() {}

    /* Lifecycle, element appended to the DOM */
    connectedCallback() {
      const self = this;
      const nav = document.createElement('nav');
      const breadcrumbList = document.createElement('ol');
      const minimizeWrapper = document.createElement('div');
      const minimizeItemsWrapper = document.createElement('div');
      const toggleButton = document.createElement('span');

      toggleButton.classList.add('items-toggler');
      toggleButton.innerHTML = '...';

      minimizeItemsWrapper.classList.add('minimize-items-wrapper');
      minimizeWrapper.appendChild(toggleButton);
      minimizeWrapper.appendChild(minimizeItemsWrapper);
      minimizeWrapper.classList.add('minimize-items');
      
      toggleButton.addEventListener('click', ()=>{
        minimizeItemsWrapper.classList.toggle('active');
      })

      /* item manipulate */
      const items = [...this.querySelectorAll('item')];
      items.forEach(item => {
        const createItem = document.createElement('li');
        const createLink = document.createElement('a');

        createItem.classList.add('breadcrumb-item');
        if(item.getAttribute('class')){
          createItem.classList.add(item.getAttribute('class'));
        }
        createLink.setAttribute('href', item.getAttribute('href'));
        createLink.innerHTML = item.getAttribute('value');
        createItem.appendChild(createLink);
        breadcrumbList.append(createItem);
      });
      self.innerHTML = '';
      nav.append(breadcrumbList);
      nav.setAttribute("aria-label", self.getAttribute('aria-label'));
      self.append(nav);
      self.removeAttribute("aria-label");
      /* store items */
      const breadcrumbItems = breadcrumbList;
      const allItems = Array.from(breadcrumbItems.children);
      console.log(breadcrumbList.offsetWidth, allItems)

      /* minimize items */
      const minimizeItemsFun = () =>{
        if(allItems.length>0){
          const filterItems = allItems.filter((item, key) => key>0);
          self.append(allItems[0]);
          self.append(minimizeWrapper);

          for(let i = filterItems.length - 1; i >= 0; i--){
            if(self.offsetWidth + 40 < self.parentElement.offsetWidth){
              let minimizeItemsDom = this.querySelector('.minimize-items');
              minimizeWrapper.parentNode.insertBefore(filterItems[i], minimizeWrapper.nextSibling);
            } else{
              minimizeItemsWrapper.prepend(filterItems[i]);
            }
          }
          /* when responsive works */
          self.setAttribute('responsive', true);
        }
      }

      /* init minimizeItems function */
      if(breadcrumbList.offsetWidth > breadcrumbList.parentElement.offsetWidth){
        minimizeItemsFun()
      }

      /* check on reisze */
      window.addEventListener('resize', () => {
          setTimeout(() => {
            if(breadcrumbList.offsetWidth > breadcrumbList.parentElement.offsetWidth){
              minimizeItemsFun()
            } else if(breadcrumbList.offsetWidth < breadcrumbList.parentElement.offsetWidth){
              if(self.getAttribute('responsive')){
                if(allItems.length>0){
                  minimizeWrapper.remove()
                  self.innerHTML = '';
                  allItems.forEach(item => {
                    self.append(item);
                  })
                }
                self.setAttribute('responsive', false);
              }
            }
          }, 1000);
      })
    }
  } 
  customElements.define('joomla-breadcrumb', joomlaBreadcrumb);
})()