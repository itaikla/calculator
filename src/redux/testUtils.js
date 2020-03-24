import { configure, mount } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import React from "react";
import { createStore } from "redux";
import reducer from "./reducers/rootReducer";
import { render } from "@testing-library/react";

configure({
  adapter: new Adapter()
});

const initialState = {
  memoReducer: {
    memo: 0,
    isMemoShown: false
  },
  calculatorBasicReducer: {
    left: 0,
    right: 0,
    display: "0",
    operator: null
  },
  calculatorMetadataReducer: {
    isLeft: true,
    equalClicked: false,
    operatorClicked: false
  }
};

const store = createStore(reducer, initialState);

export const renderWithRedux = ui => ({
  ...render(<Provider store={store}>{ui}</Provider>),
  store
});

export const mountWithRedux = ui =>
  mount(<Provider store={store}>{ui}</Provider>);
