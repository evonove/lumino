import get from 'lodash.get';
import set from 'lodash.set';
import { createTransform } from 'redux-persist';


export function persistFilter (state, paths=[]) {
  const newState = state.map((object) => {
    let filtered = {}
    paths.forEach(path => set(filtered, path, get(object, path)));
    return filtered;
  });
  return newState;
}


export function createFilter (reducerName, paths) {
  return createTransform(
    (inboundState, key) => persistFilter(inboundState, paths),
    (outboundState, key) => persistFilter(outboundState, paths),
    {'whitelist': [reducerName]}
  );
};

export default createFilter;
