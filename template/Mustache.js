dojo.provide('template.Mustache');

dojo.require('dijit._Widget');
dojo.require('template.mustache._Templated');

dojo.declare('template.Mustache', [dijit._Widget, template.mustache._Templated], {
	templateString: dojo.cache('template.templates', 'Mustache.html'),

	_setLabelAttr: function (label) {
		this.label = label;
		this.render();
	}
});
