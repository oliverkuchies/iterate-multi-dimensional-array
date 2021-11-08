iterate(obj, string = '', arr = []) {
      if (typeof obj === 'object') {
        Object.entries(obj).map(([parent_index, parent_obj]) => {
          this.iterate(parent_obj, string + parent_index + '.', arr);
        });
      } else {
        if (string[string.length - 1] === '.') {  
          arr[string.substring(0, string.length - 1)] = obj;
        }
      }
      
      return arr;
}
