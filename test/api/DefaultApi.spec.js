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
    instance = new Alertmanager.DefaultApi();
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

  describe('DefaultApi', function() {
    describe('deleteClientAppGetDelete', function() {
      it('should call deleteClientAppGetDelete successfully', function(done) {
        //uncomment below and update the code to test deleteClientAppGetDelete
        //instance.deleteClientAppGetDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClientAppGet', function() {
      it('should call getClientAppGet successfully', function(done) {
        //uncomment below and update the code to test getClientAppGet
        //instance.getClientAppGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClientAppGetAll', function() {
      it('should call getClientAppGetAll successfully', function(done) {
        //uncomment below and update the code to test getClientAppGetAll
        //instance.getClientAppGetAll(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDocs', function() {
      it('should call getDocs successfully', function(done) {
        //uncomment below and update the code to test getDocs
        //instance.getDocs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getHealthCheck', function() {
      it('should call getHealthCheck successfully', function(done) {
        //uncomment below and update the code to test getHealthCheck
        //instance.getHealthCheck(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSwaggerJson', function() {
      it('should call getSwaggerJson successfully', function(done) {
        //uncomment below and update the code to test getSwaggerJson
        //instance.getSwaggerJson(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postClientAppPost', function() {
      it('should call postClientAppPost successfully', function(done) {
        //uncomment below and update the code to test postClientAppPost
        //instance.postClientAppPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putClientAppPut', function() {
      it('should call putClientAppPut successfully', function(done) {
        //uncomment below and update the code to test putClientAppPut
        //instance.putClientAppPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
