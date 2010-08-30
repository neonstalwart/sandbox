dojo.provide('template.DtlString');

dojo.require('dijit._Widget');
dojo.require('dojox.dtl._Templated');

dojo.declare('template.DtlString', [dijit._Widget, dojox.dtl._Templated], {
	templateString: dojo.cache('template.templates', 'DtlString.html'),
	
	_setLabelAttr: function (label) {
		this.label = label;
		this.render();
	}
});
