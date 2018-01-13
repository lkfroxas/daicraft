// import { Dispatcher } from 'flux';
// import assign from 'object-assign';
//
// const AppDispatcher = assign(new Dispatcher(), {
//   handleAction(action) {
//     this.dispatch({
//       source: 'VIEW_ACTION',
//       action: action
//     });
//   }
// });
//
// export default AppDispatcher;

var Dispatcher = require('flux').Dispatcher;

var AppDispatcher = new Dispatcher();

AppDispatcher.handleAction = function(action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
}

module.exports = AppDispatcher;
