dojo.provide('template.Dijit');

dojo.require('dijit._Widget');
dojo.require('dijit._Templated');

dojo.declare('template.Dijit', [dijit._Widget, dijit._Templated], {
	templateString: dojo.cache('template.templates', 'Dijit.html'),

	attributeMap: dojo.delegate(dijit._Widget.prototype.attributeMap, {
		label: {
			node: 'containerNode',
			type: 'innerHTML'
		}
	})
});
