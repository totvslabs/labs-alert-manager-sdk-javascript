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

import ApiClient from '../ApiClient';

/**
 * The PolicyChannelSchema model module.
 * @module model/PolicyChannelSchema
 * @version 1.0.0
 */
class PolicyChannelSchema {
    /**
     * Constructs a new <code>PolicyChannelSchema</code>.
     * @alias module:model/PolicyChannelSchema
     * @param clientUuid {String} Client uuid. This is the id defined by client app
     * @param config {Object} Policy Channel config
     * @param deleted {Boolean} Policy Channel deleted flag
     * @param enabled {Boolean} Policy Channel enabled flag
     * @param id {String} Id
     * @param name {String} Policy Channel name
     * @param type {String} Policy Channel type
     */
    constructor(clientUuid, config, deleted, enabled, id, name, type) { 
        
        PolicyChannelSchema.initialize(this, clientUuid, config, deleted, enabled, id, name, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, clientUuid, config, deleted, enabled, id, name, type) { 
        obj['client_uuid'] = clientUuid;
        obj['config'] = config;
        obj['deleted'] = deleted;
        obj['enabled'] = enabled;
        obj['id'] = id;
        obj['name'] = name;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>PolicyChannelSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PolicyChannelSchema} obj Optional instance to populate.
     * @return {module:model/PolicyChannelSchema} The populated <code>PolicyChannelSchema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PolicyChannelSchema();

            if (data.hasOwnProperty('client_uuid')) {
                obj['client_uuid'] = ApiClient.convertToType(data['client_uuid'], 'String');
            }
            if (data.hasOwnProperty('config')) {
                obj['config'] = ApiClient.convertToType(data['config'], Object);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('last_notification')) {
                obj['last_notification'] = ApiClient.convertToType(data['last_notification'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PolicyChannelSchema</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PolicyChannelSchema</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PolicyChannelSchema.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['client_uuid'] && !(typeof data['client_uuid'] === 'string' || data['client_uuid'] instanceof String)) {
            throw new Error("Expected the field `client_uuid` to be a primitive type in the JSON string but got " + data['client_uuid']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}

PolicyChannelSchema.RequiredProperties = ["client_uuid", "config", "deleted", "enabled", "id", "name", "type"];

/**
 * Client uuid. This is the id defined by client app
 * @member {String} client_uuid
 */
PolicyChannelSchema.prototype['client_uuid'] = undefined;

/**
 * Policy Channel config
 * @member {Object} config
 */
PolicyChannelSchema.prototype['config'] = undefined;

/**
 * @member {Date} created_at
 */
PolicyChannelSchema.prototype['created_at'] = undefined;

/**
 * Policy Channel deleted flag
 * @member {Boolean} deleted
 */
PolicyChannelSchema.prototype['deleted'] = undefined;

/**
 * Policy Channel enabled flag
 * @member {Boolean} enabled
 */
PolicyChannelSchema.prototype['enabled'] = undefined;

/**
 * Id
 * @member {String} id
 */
PolicyChannelSchema.prototype['id'] = undefined;

/**
 * @member {Date} last_notification
 */
PolicyChannelSchema.prototype['last_notification'] = undefined;

/**
 * Policy Channel name
 * @member {String} name
 */
PolicyChannelSchema.prototype['name'] = undefined;

/**
 * Policy Channel type
 * @member {String} type
 */
PolicyChannelSchema.prototype['type'] = undefined;

/**
 * @member {Date} updated_at
 */
PolicyChannelSchema.prototype['updated_at'] = undefined;






export default PolicyChannelSchema;

