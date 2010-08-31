dojo.provide('template.mustache._Templated');

dojo.require('template.mustache._base');
dojo.require('dijit._Templated');

// this is a really lightweight version for testing
dojo.declare('template.mustache._Templated', dijit._Templated, {
	templateString: '',

	buildRendering: function () {
		var node = dojo._toDom(dojo.trim(template.mustache(this.templateString, this)));

		// ignoring attaching template nodes and widgetsInTemplate for now
		this._attachTemplateNodes(node);

		if(this.domNode){
			dojo.place(node, this.domNode, "before");
			dojo.destroy(this.domNode);
		}
		this.domNode = node;

		// ignoring _fillContent
	},

	render: function () {
		this.buildRendering();
	}
});
