import { ServiceAdvisorPage } from './app.po';

describe('service-advisor App', function() {
  let page: ServiceAdvisorPage;

  beforeEach(() => {
    page = new ServiceAdvisorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
