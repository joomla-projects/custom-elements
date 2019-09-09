(()=>{
  class joomlaBreadcrumb extends HTMLElement {
    /* Attributes to monitor */
    static get observedAttributes() {}

    /* Lifecycle, element appended to the DOM */
    connectedCallback() {
      const self = this;
      const children = self.children;
      const allItems = Array.from(children);
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
      const items = [...this.querySelectorAll('span')];
      items.forEach(item => {
        item.classList.add('item');
        const createLink = document.createElement('a');
        createLink.setAttribute('href', item.getAttribute('link'));
        createLink.innerHTML = item.getAttribute('value');
        item.appendChild(createLink);
        item.removeAttribute('link');
      });
      
      /* minimize items */
      const minimizeItemsFun = () =>{
        if(allItems.length>0){
          self.innerHTML = '';
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
      if(self.offsetWidth > self.parentElement.offsetWidth){
        minimizeItemsFun()
      }

      /* check on reisze */
      window.addEventListener('resize', () => {
          setTimeout(() => {
            if(self.offsetWidth > self.parentElement.offsetWidth){
              minimizeItemsFun()
            } else if(self.offsetWidth < self.parentElement.offsetWidth){
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