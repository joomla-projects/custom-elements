(()=>{
  class joomlaPagination extends HTMLElement {
    /* Attributes to monitor */
    static get observedAttributes() {}

    /* Lifecycle, element appended to the DOM */
    connectedCallback() {
      const self = this;
      const nav = document.createElement('nav');
      const paginationList = document.createElement('ul');
      const singleLi = document.createElement('li');
      const minimizeWrapper = document.createElement('div');
      const minimizeItemsWrapper = document.createElement('div');
      const toggleButton = document.createElement('span');
      const minimizeList = document.createElement('ul');

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
      const items = [...this.querySelectorAll('.pagination-link')];
      /* has arrow */
      const pageNavs = [...this.querySelectorAll('.has-arrow')];
      let totalArrowWidth = 0;
      const arrowFun = () => {
        if(pageNavs.length>0){
          pageNavs.forEach(item => {
            if(item.classList.contains('first-page')){
              nav.prepend(item);
              totalArrowWidth += item.offsetWidth;
            }
            if(item.classList.contains('next-page')){
              paginationList.before(item);
              totalArrowWidth += item.offsetWidth;
            }
            if(item.classList.contains('prev-page')){
              paginationList.after(item);
              totalArrowWidth += item.offsetWidth;
            }
            if(item.classList.contains('last-page')){
              nav.append(item);
              totalArrowWidth += item.offsetWidth;
            }
          })
        }
      }
      /* make full pagination */
      items.forEach((item) => {
        const createItem = document.createElement('li');
        const createLink = document.createElement('a');
        createItem.classList.add('pagination-item');
        if(item.getAttribute('class')){
          createLink.className = item.getAttribute('class');
        }
        if(item.getAttribute('activeClass')){
          createLink.className += ' ' + item.getAttribute('activeClass');
        }
        createLink.setAttribute('href', item.getAttribute('href'));
        createLink.setAttribute('value', item.getAttribute('value'));
        createLink.innerHTML = item.getAttribute('text');
        createItem.appendChild(createLink);
        paginationList.append(createItem);
        item.parentNode.removeChild(item);
      });
      nav.append(paginationList);
      self.append(nav);
      /* store items */
      const paginationItems = paginationList;
      const allItems = Array.from(paginationItems.children);
      /* minimize items */
      const minimizeItemsFun = () =>{
        if(allItems.length>0){
          paginationList.innerHTML = '';
          const filterItems = allItems.filter((item, key) => key<allItems.length - 1);
          singleLi.prepend(minimizeWrapper);
          for(let i = 0; i < filterItems.length; i++){
            if(paginationList.offsetWidth + totalArrowWidth + 100 < nav.offsetWidth){
              paginationList.append(filterItems[i]);
            } else{
              minimizeList.append(filterItems[i]);
            }
          }
          minimizeItemsWrapper.append(minimizeList);
          paginationList.append(singleLi);
          paginationList.append(allItems[allItems.length - 1]);
          /* when responsive works */
          self.setAttribute('responsive', true);
        }
      }

      /* init arrow function */
      arrowFun();

      /* init minimizeItems function */
      if(paginationList.offsetWidth + totalArrowWidth + 100 > paginationList.parentElement.offsetWidth){
        minimizeItemsFun();
      }
      /* check on reisze */
      window.addEventListener('resize', () => {
          setTimeout(() => {
            if(paginationList.offsetWidth + totalArrowWidth + 100 > nav.offsetWidth){
              minimizeItemsFun()
            } else if(paginationList.offsetWidth + totalArrowWidth + 100 < nav.offsetWidth){
              if(self.getAttribute('responsive')){
                if(allItems.length>0){
                  const upated = Array.from(minimizeList.children);
                  if(upated.length != 0){
                    if(paginationList.offsetWidth + totalArrowWidth + 100 < nav.offsetWidth){
                      for(let i = 0; i < upated.length; i++){
                        if(paginationList.offsetWidth + totalArrowWidth + 100 < nav.offsetWidth){
                          paginationList.append(upated[i]);
                        }
                      }
                      paginationList.append(self.querySelector('.minimize-list'));
                      paginationList.append(allItems[allItems.length - 1]);
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