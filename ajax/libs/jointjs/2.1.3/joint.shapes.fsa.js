/*! JointJS v2.1.2 (2018-06-29) - JavaScript diagramming library


This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/
joint.shapes.basic.Circle.define('fsa.State', {
    attrs: {
        circle: { 'stroke-width': 3 },
        text: { 'font-weight': '800' }
    }
});

joint.dia.Element.define('fsa.StartState', {
    size: { width: 20, height: 20 },
    attrs: {
        circle: {
            transform: 'translate(10, 10)',
            r: 10,
            fill: '#000000'
        }
    }
}, {
    markup: '<g class="rotatable"><g class="scalable"><circle/></g></g>',
});

joint.dia.Element.define('fsa.EndState', {
    size: { width: 20, height: 20 },
    attrs: {
        '.outer': {
            transform: 'translate(10, 10)',
            r: 10,
            fill: '#ffffff',
            stroke: '#000000'
        },

        '.inner': {
            transform: 'translate(10, 10)',
            r: 6,
            fill: '#000000'
        }
    }
}, {
    markup: '<g class="rotatable"><g class="scalable"><circle class="outer"/><circle class="inner"/></g></g>',
});

joint.dia.Link.define('fsa.Arrow', {
    attrs: { '.marker-target': { d: 'M 10 0 L 0 5 L 10 10 z' } },
    smooth: true
});
