/* global ProgressBar */

import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  value: .5,

  didRender() {
    if (!this.get('progressbar')) {
      let [container] = $(`#${this.get('elementId')} .progressbar-container`);

      let bar = new ProgressBar.Line(container, {
        strokeWidth: 7,
        color: '#F6C96C',
        svgStyle: { width: '100%', height: '100%' }
      });

      bar.set(this.get('value'));

      this.set('progressbar', bar);
    }
  },

  didReceiveAttrs() {
    this._super(...arguments);
    if (this.get('progressbar')) {
      this.get('progressbar').set(this.get('value'));
    }
  },

  willDestroyElement() {
    this._super(...arguments);
    this.get('progressbar').destroy();
  }
});
