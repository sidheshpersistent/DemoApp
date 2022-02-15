import { TRACING } from 'constants/wealth/constants';

describe('constants', () => {
  it('should match TRACING snapshot', () => {
    expect(TRACING).toMatchSnapshot();
  });
});
