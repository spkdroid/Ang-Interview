import { RoutesProjectPage } from './app.po';

describe('routes-project App', function() {
  let page: RoutesProjectPage;

  beforeEach(() => {
    page = new RoutesProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
