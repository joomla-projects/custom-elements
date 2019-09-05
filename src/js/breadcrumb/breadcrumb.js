(()=>{
  class joomlaBreadcrumb extends HTMLElement {
    /* Attributes to monitor */
    static get observedAttributes() {}

    connectedCallback() {
      const self = this;
      const allChild = self.children;
      // responsive
      const overlayWrapper = document.createElement('div')
      const overlayItemsWrapper = document.createElement('div')
      const toggleButton = document.createElement('button')
      toggleButton.classList.add('items-toggler')
      overlayItemsWrapper.classList.add('others-items-wrapper')
      toggleButton.innerHTML = '...'
      overlayWrapper.appendChild(toggleButton);
      overlayWrapper.appendChild(overlayItemsWrapper);
      overlayWrapper.classList.add('others-items')
      toggleButton.addEventListener('click', ()=>{
        overlayItemsWrapper.classList.toggle('active')
      })

      const responsiveFun = (allChild) => {
        if(self.offsetWidth>self.parentElement.offsetWidth){
          const allItems = Array.from(allChild);
          self.innerHTML = '';
          allItems.forEach((child, index) => {
            console.log(index)
            if((self.parentElement.offsetWidth - 50)>self.offsetWidth){
              self.appendChild(child)
              console.log(this.querySelector('others-items'))
            } else{
              self.append(overlayWrapper);
              overlayItemsWrapper.appendChild(child)
            }
          })
        }
      }

      // item manupulate
      const items = [...this.querySelectorAll('item')];
      items.forEach(item => {
        const callbackLink = document.createElement('a');
        callbackLink.setAttribute('href', item.getAttribute('href'));
        callbackLink.innerHTML = item.getAttribute('value');
        item.appendChild(callbackLink);
        item.removeAttribute('href')
      });

      responsiveFun(allChild)
      
      // window.addEventListener('resize', () => {
      //   setTimeout(function (){
      //     responsiveFun(allChild)
      //     if(self.offsetWidth<self.parentElement.offsetWidth){
      //       if(document.querySelector('.others-items')){
      //         self.querySelector('.items-toggler').style.display = 'none';
      //         console.log('wide')
      //         const allItems = Array.from(allChild);
      //         self.innerHTML = '';
      //         allItems.forEach(child => {
      //           self.appendChild(child)
      //         })
      //       }
      //     }
      //   }, 1000)
      // });
    }
  } 
  customElements.define('joomla-breadcrumb', joomlaBreadcrumb);
})()