// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE

import * as Enzyme from "enzyme";

function state(t) {
  return t.state().reasonState;
}

var Renderer = /* module */[/* state */state];

var Shallow = /* module */[/* state */state];

var Mount = /* module */[/* state */state];

function configureEnzyme(adapter) {
  return Enzyme.configure({
              adapter: adapter
            });
}

export {
  Renderer ,
  Shallow ,
  Mount ,
  configureEnzyme ,
  
}
/* enzyme Not a pure module */
