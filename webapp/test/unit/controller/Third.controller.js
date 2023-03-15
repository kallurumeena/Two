/*global QUnit*/

sap.ui.define([
	"thir/controller/Third.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Third Controller");

	QUnit.test("I should test the Third controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
