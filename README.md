# env-select
> Dynamic detect env by url or other window environment.

## installation
```shell
npm i @jswork/env-select
```

## usage
```js
// .env-cmdrc.js
const { CraEnvs, AbstractEnvSelect } = require('./src/envs');

module.exports = CraEnvs.set({
  beta: {
    base_url: 'https://site-predict-platform.beta.saybot.net',
  },
  staging: {
    base_url: 'https://site-predict-platform.staging.saybot.net',
  },
});


// your env.ts
class Env extends AbstractEnvSelect{
  /**
   * Auto select env by current url.
   * @returns {Environment} The target env string.
   */
  private static select(): Environment {
    let env: Environment = 'beta';
    nx.forIn(this.ENV_SELECTORS, (key: Environment, value) => {
      if (window.location.pathname.includes(value)) {
        env = key;
        return nx.BREAKER;
      }
    });
    return env;
  }
}

// usage<when beta/staging>
const base_url = Env.get('base_url');
// https://site-predict-platform.beta.saybot.net
```
