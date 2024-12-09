import { html, fixture, expect } from '@open-wc/testing';
import "../Character-Project.js";

describe("Character-Project test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <Character-Project
        title="title"
      ></Character-Project>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
