import { CafeDeeHousePage } from './app.po';

describe('cafe-dee-house App', function() {
  let page: CafeDeeHousePage;

  beforeEach(() => {
    page = new CafeDeeHousePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
