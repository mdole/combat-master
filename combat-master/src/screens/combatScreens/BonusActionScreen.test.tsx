import React from "react";
import TestRenderer from "react-test-renderer";
import { BonusActionScreen } from "./BonusActionScreen";

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

describe("empty bonus actions state", () => {
  let props: any;
  beforeEach(() => {
    props = createTestProps({});
  });

  it("does not render bonus action list or description", () => {
    const testRenderer = TestRenderer.create(<BonusActionScreen {...props} />);

    console.log(testRenderer.toJSON());
    // { type: 'a',
    //   props: { href: 'https://www.facebook.com/' },
    //   children: [ 'Facebook' ] }
  });
  it("renders text description", () => {
    expect(null);
  });
});
