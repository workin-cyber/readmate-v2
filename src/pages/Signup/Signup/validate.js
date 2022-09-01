export const validate = (obj) =>
   Object.keys(obj).reduce((acc, curr) =>
      obj[curr].length > 0 ?
         acc :
         [...acc, curr],
      [])