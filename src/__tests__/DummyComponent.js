// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE

import * as Block from "bs-platform/lib/es6/block.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as ReasonReact from "reason-react/src/ReasonReact.js";

function se(prim) {
  return prim;
}

var component = ReasonReact.reducerComponent("DummyComponent");

function make(title, _children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              var match = self[/* state */1][/* clicked */0];
              return React.createElement("div", {
                          className: "dummy"
                        }, React.createElement("div", {
                              id: "header"
                            }, React.createElement("h1", undefined, title)), React.createElement("div", {
                              id: "content"
                            }, React.createElement("button", {
                                  id: "click-me",
                                  onClick: (function (_event) {
                                      return Curry._1(self[/* send */3], /* Click */0);
                                    })
                                }, match ? "I've been clicked!" : "Click Me!"), React.createElement("ul", {
                                  id: "list"
                                }, React.createElement("li", undefined, "One"), React.createElement("li", undefined, "Two"), React.createElement("li", undefined, "Three"))));
            }),
          /* initialState */(function (param) {
              return /* record */[/* clicked */false];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              return /* Update */Block.__(0, [/* record */[/* clicked */!state[/* clicked */0]]]);
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

export {
  se ,
  component ,
  make ,
  
}
/* component Not a pure module */
