import { AlaedoPage } from './app.po';

describe('alaedo App', () => {
  let page: AlaedoPage;

  beforeEach(() => {
    page = new AlaedoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
