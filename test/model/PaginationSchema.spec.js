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
    instance = new Alertmanager.PaginationSchema();
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

  describe('PaginationSchema', function() {
    it('should create an instance of PaginationSchema', function() {
      // uncomment below and update the code to test PaginationSchema
      //var instance = new Alertmanager.PaginationSchema();
      //expect(instance).to.be.a(Alertmanager.PaginationSchema);
    });

    it('should have the property page (base name: "page")', function() {
      // uncomment below and update the code to test the property page
      //var instance = new Alertmanager.PaginationSchema();
      //expect(instance).to.be();
    });

    it('should have the property pageSize (base name: "pageSize")', function() {
      // uncomment below and update the code to test the property pageSize
      //var instance = new Alertmanager.PaginationSchema();
      //expect(instance).to.be();
    });

    it('should have the property rows (base name: "rows")', function() {
      // uncomment below and update the code to test the property rows
      //var instance = new Alertmanager.PaginationSchema();
      //expect(instance).to.be();
    });

    it('should have the property totalRows (base name: "totalRows")', function() {
      // uncomment below and update the code to test the property totalRows
      //var instance = new Alertmanager.PaginationSchema();
      //expect(instance).to.be();
    });

  });

}));