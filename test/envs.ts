
import test from 'ava';
const { isProd, envs, env } = require('./../scripts/envs.ts');
// import { isProd, envs, env } from './../scripts/envs';

test(`current env is 'test'`, t => {
  t.is(env, 'test');
});

test(`isProd() get false`, t => {
  t.is(isProd(), false);
});

test(`envs values`, t => {
  t.is(envs.production, 'production');
  t.is(envs.development, 'development');
  t.is(envs.local, 'local');
  t.is(envs.test, 'test');
});