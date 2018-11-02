
import test from 'ava';
import { JSDOM, dom, document, window } from './helpers/dom.js';
import { kitchenSink } from './../src/libs/kitchen';

const ks = new JSDOM(`<!DOCTYPE html>${kitchenSink}</div>`);

test(`DOM string`, t => {  
  t.is(typeof kitchenSink, 'string');
});

test(`#wrapper query`, t => {
  const query = ks.window.document.querySelector('#wrapper');

  t.is(typeof query, 'object');
  t.is(query.toString(), '[object HTMLDivElement]');
});

test(`<h1> queries`, t => {
  const query = ks.window.document.querySelectorAll('h1');

  t.is(query.length, 5);
  t.is(query.toString(), '[object NodeList]');
});