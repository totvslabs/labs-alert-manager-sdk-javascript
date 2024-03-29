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
    instance = new Alertmanager.PoliciesApi();
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

  describe('PoliciesApi', function() {
    describe('deletePoliciesDelete', function() {
      it('should call deletePoliciesDelete successfully', function(done) {
        //uncomment below and update the code to test deletePoliciesDelete
        //instance.deletePoliciesDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPoliciesGet', function() {
      it('should call getPoliciesGet successfully', function(done) {
        //uncomment below and update the code to test getPoliciesGet
        //instance.getPoliciesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPoliciesGetAll', function() {
      it('should call getPoliciesGetAll successfully', function(done) {
        //uncomment below and update the code to test getPoliciesGetAll
        //instance.getPoliciesGetAll(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postPoliciesPost', function() {
      it('should call postPoliciesPost successfully', function(done) {
        //uncomment below and update the code to test postPoliciesPost
        //instance.postPoliciesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putPoliciesPut', function() {
      it('should call putPoliciesPut successfully', function(done) {
        //uncomment below and update the code to test putPoliciesPut
        //instance.putPoliciesPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
