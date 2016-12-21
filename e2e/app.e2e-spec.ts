import { NgBSportifyPage } from './app.po';

describe('ng-b-sportify App', function() {
  let page: NgBSportifyPage;

  beforeEach(() => {
    page = new NgBSportifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
