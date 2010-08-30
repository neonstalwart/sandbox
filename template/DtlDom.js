dojo.provide('template.DtlDom');

dojo.require('dijit._Widget');
dojo.require('dojox.dtl._DomTemplated');

dojo.declare('template.DtlDom', [dijit._Widget, dojox.dtl._DomTemplated], {
	templateString: dojo.cache('template.templates', 'DtlDom.html'),
	
	_setLabelAttr: function (label) {
		this.label = label;
		this.render();
	}
});
