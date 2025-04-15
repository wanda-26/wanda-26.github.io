
function getCurrentTimestamp() {
    return new Date().toISOString(); 
  }
  
 
  function getEventObjectType(target) {
    if (target.tagName) {
      const tag = target.tagName.toLowerCase();
      if (tag === 'img') return 'image';
      if (tag === 'select') return 'drop-down';
      if (tag === 'input') {
        const type = target.type ? target.type.toLowerCase() : '';
        if (type === 'checkbox' || type === 'radio' || type === 'button' || type === 'submit') return type + ' input';
        return 'text input';
      }
      if (tag === 'button') return 'button';
      if (tag === 'a') return 'link';
      if (tag === 'textarea') return 'text area';
      if (tag === 'form') return 'form';
      if (tag === 'ul' || tag === 'ol') return 'list';
      if (tag === 'li') return 'list item';
      if (tag === 'div' || tag === 'span' || tag === 'p') return 'text';
      return tag;
    }
    return 'unknown';
  }
  
  
  console.log(`${getCurrentTimestamp()} , view , page`);
  
 
  document.addEventListener('click', function(event) {
    
    let target = event.target;
    while (target && target !== document && !target.tagName) {
      target = target.parentNode;
    }
    const objectType = getEventObjectType(target);
    console.log(`${getCurrentTimestamp()} , click , ${objectType}`);
  });
  