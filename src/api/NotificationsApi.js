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


import ApiClient from "../ApiClient";
import NotificationSchema from '../model/NotificationSchema';
import PaginationSchema from '../model/PaginationSchema';

/**
* Notifications service.
* @module api/NotificationsApi
* @version 1.0.0
*/
export default class NotificationsApi {

    /**
    * Constructs a new NotificationsApi. 
    * @alias module:api/NotificationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getNotificationLogGet operation.
     * @callback module:api/NotificationsApi~getNotificationLogGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificationSchema} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:api/NotificationsApi~getNotificationLogGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NotificationSchema}
     */
    getNotificationLogGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getNotificationLogGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['auth_token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = NotificationSchema;
      return this.apiClient.callApi(
        '/notifications/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getNotificationLogGetAll operation.
     * @callback module:api/NotificationsApi~getNotificationLogGetAllCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginationSchema} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/NotificationsApi~getNotificationLogGetAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginationSchema}
     */
    getNotificationLogGetAll(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['auth_token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaginationSchema;
      return this.apiClient.callApi(
        '/notifications', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postNotificationLogResend operation.
     * @callback module:api/NotificationsApi~postNotificationLogResendCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificationSchema} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:api/NotificationsApi~postNotificationLogResendCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NotificationSchema}
     */
    postNotificationLogResend(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling postNotificationLogResend");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['auth_token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = NotificationSchema;
      return this.apiClient.callApi(
        '/notifications/{id}/resend', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
