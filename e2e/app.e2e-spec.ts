import { FrontEndTestAiesecDarmstadtPage } from './app.po';

describe('front-end-test-aiesec-darmstadt App', () => {
  let page: FrontEndTestAiesecDarmstadtPage;

  beforeEach(() => {
    page = new FrontEndTestAiesecDarmstadtPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
