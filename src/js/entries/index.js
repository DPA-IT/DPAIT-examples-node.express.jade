/* ##### CSS */
import base from '../../stylus/base/index.styl'
import nav from '../../stylus/modules/nav.styl'
import hero from '../../stylus/modules/hero.styl'

import dpa from 'dpa-it'

/* ##### JS ##### */
console.log('Home Page')

var options = {

};

var dpaIt = new dpa('#dpa-container', options);
dpaIt.init();