const { fetchWeather } = require('.');

describe('Open weather map library', () => {
  let cod;
  beforeEach(() => {
    cod = '200';
    global.fetch = jest
      .fn()
      .mockImplementation(() => ({ json: () => ({ cod }) }));
  });

  it('calls "fetch" with the url and its parameters', () => {
    fetchWeather('Barcelona', 'Es', '123abc');
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
  it('throws an error if response code is "404"', async () => {
    cod = '404';
    const act = fetchWeather('Barcelona', 'Es', '123abc');
    await expect(act).rejects.toEqual(Error('Resource not found'));
  });
  it('resolves with the response', async () => {
    const act = fetchWeather('Barcelona', 'Es', '123abc');
    await expect(act).resolves.toEqual({ cod: '200' });
  });
});
