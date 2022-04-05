# ZOOP | Unofficial Client for Zoop API


## About

- **Isomorphic**: Compatible with Browser, Node.JS and React Native environments
- **Written in TypeScript**: So you get type checking and autocomplete for all API Endpoints and parameters
- **Promises / Async Iterables based**: So you can use `async` and `await` (ES2016) and `for await` (ES2018) syntax.


## Installing

```bash
npm install @alibsoft/zoop
```
```bash
yarn add @alibsoft/zoop
```
## Usage

```javascript
import { IConfig, IMarketplace, Marketplace } from '@alibsoft/zoop';

//Create configuration
const config: IConfig = {
  marketplaceId: 'your marketplace id',
  publishableKey: 'your zpk key',
  sandbox: true,
};
// Create API Client
const marketplace: IMarketplace = Markertplace.Instance(config);
```