// Main viewmodel class
define(['knockout'], function(ko) {
	'use strict';

	// Class to represent a row in the seat reservations grid
	var Invitee = function(name) {
		var self = this;
		self.name = name;
		self.responded = ko.observable(false);
		self.attending = ko.observable(false);
		self.declined = ko.computed(function() {
			return this.responded() && !this.attending();
		}, this);
		self.attend = function() { self.responded(true); self.attending(true); };
		self.decline = function() { self.responded(true); self.attending(false); };
		self.clear = function() { self.responded(false); self.attending(false); };
	};

	return function() {
		this.nextDate = 'Thursday the 23rd';
		this.attendees = ko.observableArray([
			new Invitee('Royce'),
			new Invitee('Amanda'),
			new Invitee('Frances'),
			new Invitee('Lee'),
			new Invitee('Lenka'),
			new Invitee('Matt'),
			new Invitee('Tim'),
			new Invitee('Pam')
		]);

		this.numConfirmed = ko.computed(function() {
			var count = 0;
			for (var i = this.attendees().length - 1; i >= 0; i--) {
				if (this.attendees()[i].attending()) {
					count += 1;
				}
			}
			return count;
		}, this);
		this.numDeclined = ko.computed(function() {
			var count = 0;
			for (var i = this.attendees().length - 1; i >= 0; i--) {
				var current = this.attendees()[i];
				if (!current.attending() && current.responded()) {
					count += 1;
				}
			}
			return count;
		}, this);
		this.isConfirmed = ko.computed(function() {
			return this.numConfirmed() >= 2;
		}, this);

		this.percentConfirmed = ko.computed(function() {
			return 100.0 * this.numConfirmed() / this.attendees().length;
		}, this);

		this.percentDeclined = ko.computed(function() {
			return 100.0 * this.numDeclined() / this.attendees().length;
		}, this);
	};
});