import PAYMENTS_URLS from './apiUrls';

jest.mock('@optimus/core-feature-toggle');

describe('payments urls', () => {
  it('should return all urls ', () => {
    const actualUrls = PAYMENTS_URLS();
    expect(actualUrls).toMatchSnapshot();
  });
});
