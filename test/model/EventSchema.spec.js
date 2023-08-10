/**
 * alertmanager
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Alertmanager);
  }
}(this, function(expect, Alertmanager) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Alertmanager.EventSchema();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('EventSchema', function() {
    it('should create an instance of EventSchema', function() {
      // uncomment below and update the code to test EventSchema
      //var instance = new Alertmanager.EventSchema();
      //expect(instance).to.be.a(Alertmanager.EventSchema);
    });

    it('should have the property clientSource (base name: "client_source")', function() {
      // uncomment below and update the code to test the property clientSource
      //var instance = new Alertmanager.EventSchema();
      //expect(instance).to.be();
    });

    it('should have the property clientUuid (base name: "client_uuid")', function() {
      // uncomment below and update the code to test the property clientUuid
      //var instance = new Alertmanager.EventSchema();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new Alertmanager.EventSchema();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new Alertmanager.EventSchema();
      //expect(instance).to.be();
    });

    it('should have the property eventType (base name: "event_type")', function() {
      // uncomment below and update the code to test the property eventType
      //var instance = new Alertmanager.EventSchema();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Alertmanager.EventSchema();
      //expect(instance).to.be();
    });

    it('should have the property labels (base name: "labels")', function() {
      // uncomment below and update the code to test the property labels
      //var instance = new Alertmanager.EventSchema();
      //expect(instance).to.be();
    });

    it('should have the property schemaVersion (base name: "schema_version")', function() {
      // uncomment below and update the code to test the property schemaVersion
      //var instance = new Alertmanager.EventSchema();
      //expect(instance).to.be();
    });

    it('should have the property severity (base name: "severity")', function() {
      // uncomment below and update the code to test the property severity
      //var instance = new Alertmanager.EventSchema();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new Alertmanager.EventSchema();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new Alertmanager.EventSchema();
      //expect(instance).to.be();
    });

  });

}));
