(()=>{
  class joomlaPagination extends HTMLElement {
    /* Attributes to monitor */
    static get observedAttributes() {}

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
      
      toggleButton.addEventListener('click', ()=>{
        minimizeItemsWrapper.classList.toggle('active');
      })

      /* item manipulate */
      const items = [...this.querySelectorAll('li')];
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

      /* minimize items */
      const minimizeItemsFun = () =>{
        if(allItems.length>0){
          breadcrumbList.innerHTML = '';
          const filterItems = allItems.filter((item, key) => key>0);
          breadcrumbList.appendChild(allItems[0]);
          breadcrumbList.appendChild(singleLi);
          singleLi.append(minimizeWrapper);
          
          // nav.append(othersList);
          for(let i = filterItems.length - 1; i >= 0; i--){
            if(breadcrumbList.offsetWidth < nav.offsetWidth){
              singleLi.parentNode.insertBefore(filterItems[i], singleLi.nextSibling);
            } else{
              minimizeList.prepend(filterItems[i]);
            }
          }
          minimizeItemsWrapper.append(minimizeList);
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
            if(breadcrumbList.offsetWidth > nav.offsetWidth){
              minimizeItemsFun()
            } else if(breadcrumbList.offsetWidth < nav.offsetWidth){
              if(self.getAttribute('responsive')){
                if(allItems.length>0){
                  const upated = Array.from(minimizeList.children);
                  if(upated.length != 0){
                    for(let i = upated.length - 1; i >= 0; i--){
                      if(breadcrumbList.offsetWidth < nav.offsetWidth){
                        singleLi.parentNode.insertBefore(upated[i], singleLi.nextSibling);
                      }
                    }
                  }
                }
              }
            }
            setTimeout(() => {
              if(minimizeList.children.length == 0){
                singleLi.remove();
                self.setAttribute('responsive', false);
              }
            }, 200);
          }, 300);
      })
    }
  } 
  customElements.define('joomla-pagination', joomlaPagination);
})()