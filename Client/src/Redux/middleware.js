import { applyMiddleware } from 'redux';
import reduxCatch from 'redux-catch';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const actionTransformer = action => {
  return action;
};

const stateTransformer = state => {
  return state;
};

function errorHandler(error, getState, lastAction, dispatch) {
  if (process.env.NODE_ENV !== 'production') {
    console.error(error);
    console.debug('current state', getState());
    console.debug('last action was', lastAction);
  }
}

const customLogger = process.env.NODE_ENV !== 'production' ?
  createLogger({
    logErrors: true,
    actionTransformer,
    logger: console
  }) :
  createLogger({
    collapsed: true,
    logErrors: true,
    stateTransformer,
    actionTransformer,
    logger: console
  });

const middleware = applyMiddleware(promise(), thunk, customLogger, reduxCatch(errorHandler));

export default middleware; 