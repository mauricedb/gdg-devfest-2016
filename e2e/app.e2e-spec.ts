import { GdgNg2Page } from './app.po';

describe('gdg-ng2 App', function() {
  let page: GdgNg2Page;

  beforeEach(() => {
    page = new GdgNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
