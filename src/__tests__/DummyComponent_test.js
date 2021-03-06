// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE

import * as Jest from "@glennsl/bs-jest/src/jest.js";
import * as React from "react";
import * as Enzyme from "../Enzyme.js";
import * as Enzyme$1 from "enzyme";
import * as ReasonReact from "reason-react/src/ReasonReact.js";
import * as DummyComponent from "./DummyComponent.js";
import * as EnzymeAdapterReact from "enzyme-adapter-react-16";

Enzyme.configureEnzyme(new EnzymeAdapterReact.default());

Jest.describe("Shallow rendering", (function (param) {
        var setup = function ($staropt$star, param) {
          var title = $staropt$star !== undefined ? $staropt$star : "Test";
          return Enzyme$1.shallow(ReasonReact.element(undefined, undefined, DummyComponent.make(title, /* array */[])));
        };
        return Jest.describe("DummyComponent", (function (param) {
                      Jest.test("renders a #header", (function (param) {
                              var wrapper = setup("A test title", /* () */0);
                              var headerNodes = wrapper.find("#header").first();
                              return Jest.Expect[/* toBe */2](1, Jest.Expect[/* expect */0](headerNodes.length));
                            }));
                      Jest.test("has the expected title in the #header", (function (param) {
                              var title = "A test title";
                              var wrapper = setup(title, /* () */0);
                              var headerText = wrapper.find("#header").first().text();
                              return Jest.Expect[/* toContainString */11](title, Jest.Expect[/* expect */0](headerText));
                            }));
                      Jest.test("has the expected h1 tag in the #header", (function (param) {
                              var title = "A test title";
                              var wrapper = setup(title, /* () */0);
                              var expectedNode = React.createElement("h1", undefined, title);
                              return Jest.Expect[/* toBe */2](true, Jest.Expect[/* expect */0](wrapper.contains(expectedNode)));
                            }));
                      Jest.test("has the expected #header", (function (param) {
                              var title = "A test title";
                              var wrapper = setup(title, /* () */0);
                              var header = wrapper.find("#header").first();
                              var expectedNode = React.createElement("div", {
                                    id: "header"
                                  }, React.createElement("h1", undefined, title));
                              return Jest.Expect[/* toBe */2](true, Jest.Expect[/* expect */0](header.equals(expectedNode)));
                            }));
                      Jest.test("initially has its `clicked` state set to false", (function (param) {
                              var wrapper = setup(undefined, /* () */0);
                              var match = Enzyme.Shallow[/* state */0](wrapper);
                              return Jest.Expect[/* toBe */2](false, Jest.Expect[/* expect */0](match[/* clicked */0]));
                            }));
                      Jest.test("folds left properly", (function (param) {
                              var wrapper = setup(undefined, /* () */0);
                              var items = wrapper.find("#list").children();
                              var result = items.reduce((function (text, node) {
                                      return text + node.text();
                                    }), "");
                              return Jest.Expect[/* toBe */2]("OneTwoThree", Jest.Expect[/* expect */0](result));
                            }));
                      Jest.test("folds right properly", (function (param) {
                              var wrapper = setup(undefined, /* () */0);
                              var items = wrapper.find("#list").children();
                              var result = items.reduceRight((function (text, node) {
                                      return text + node.text();
                                    }), "");
                              return Jest.Expect[/* toBe */2]("ThreeTwoOne", Jest.Expect[/* expect */0](result));
                            }));
                      return Jest.test("maps properly", (function (param) {
                                    var wrapper = setup(undefined, /* () */0);
                                    var items = wrapper.find("#list").children();
                                    var result = items.map((function (node) {
                                            return node.text();
                                          }));
                                    return Jest.Expect[/* toEqual */12](/* array */[
                                                "One",
                                                "Two",
                                                "Three"
                                              ], Jest.Expect[/* expect */0](result));
                                  }));
                    }));
      }));

Jest.describe("Full DOM rendering", (function (param) {
        var setup = function ($staropt$star, param) {
          var title = $staropt$star !== undefined ? $staropt$star : "Test";
          return Enzyme$1.mount(ReasonReact.element(undefined, undefined, DummyComponent.make(title, /* array */[])));
        };
        return Jest.describe("DummyComponent", (function (param) {
                      Jest.test("renders a #header", (function (param) {
                              var wrapper = setup("A test title", /* () */0);
                              var headerNodes = wrapper.find("#header").first();
                              return Jest.Expect[/* toBe */2](1, Jest.Expect[/* expect */0](headerNodes.length));
                            }));
                      Jest.test("has the expected title in the #header", (function (param) {
                              var title = "A test title";
                              var wrapper = setup(title, /* () */0);
                              var headerText = wrapper.find("#header").first().text();
                              return Jest.Expect[/* toContainString */11](title, Jest.Expect[/* expect */0](headerText));
                            }));
                      Jest.test("has the expected h1 tag in the #header", (function (param) {
                              var title = "A test title";
                              var wrapper = setup(title, /* () */0);
                              var expectedNode = React.createElement("h1", undefined, title);
                              return Jest.Expect[/* toBe */2](true, Jest.Expect[/* expect */0](wrapper.contains(expectedNode)));
                            }));
                      Jest.test("initially has its `clicked` state set to false", (function (param) {
                              var wrapper = setup(undefined, /* () */0);
                              var match = Enzyme.Mount[/* state */0](wrapper);
                              return Jest.Expect[/* toBe */2](false, Jest.Expect[/* expect */0](match[/* clicked */0]));
                            }));
                      Jest.test("folds left properly", (function (param) {
                              var wrapper = setup(undefined, /* () */0);
                              var items = wrapper.find("#list").children();
                              var result = items.reduce((function (text, node) {
                                      return text + node.text();
                                    }), "");
                              return Jest.Expect[/* toBe */2]("OneTwoThree", Jest.Expect[/* expect */0](result));
                            }));
                      return Jest.test("folds right properly", (function (param) {
                                    var wrapper = setup(undefined, /* () */0);
                                    var items = wrapper.find("#list").children();
                                    var result = items.reduceRight((function (text, node) {
                                            return text + node.text();
                                          }), "");
                                    return Jest.Expect[/* toBe */2]("ThreeTwoOne", Jest.Expect[/* expect */0](result));
                                  }));
                    }));
      }));

export {
  
}
/*  Not a pure module */
