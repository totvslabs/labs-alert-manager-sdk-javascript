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
 * The PolicySchema model module.
 * @module model/PolicySchema
 * @version 1.0.0
 */
class PolicySchema {
    /**
     * Constructs a new <code>PolicySchema</code>.
     * @alias module:model/PolicySchema
     * @param channels {Array.<String>} List of channel notification
     * @param clientSource {String} Policy Client source
     * @param clientUuid {String} Policy Client UUID
     * @param deleted {Boolean} Policy deleted
     * @param enabled {Boolean} Policy enabled
     * @param filters {Object} Policy filters
     * @param frequency {Boolean} Enable alert frequency for the policy
     * @param frequencyMinutes {Number} Quantity of alert interval time
     * @param frequencyOccurrences {Number} Quantity of alert occurrencies
     * @param id {String} Id
     * @param name {String} Policy name
     */
    constructor(channels, clientSource, clientUuid, deleted, enabled, filters, frequency, frequencyMinutes, frequencyOccurrences, id, name) { 
        
        PolicySchema.initialize(this, channels, clientSource, clientUuid, deleted, enabled, filters, frequency, frequencyMinutes, frequencyOccurrences, id, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, channels, clientSource, clientUuid, deleted, enabled, filters, frequency, frequencyMinutes, frequencyOccurrences, id, name) { 
        obj['channels'] = channels;
        obj['client_source'] = clientSource;
        obj['client_uuid'] = clientUuid;
        obj['deleted'] = deleted;
        obj['enabled'] = enabled;
        obj['filters'] = filters;
        obj['frequency'] = frequency;
        obj['frequency_minutes'] = frequencyMinutes;
        obj['frequency_occurrences'] = frequencyOccurrences;
        obj['id'] = id;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>PolicySchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PolicySchema} obj Optional instance to populate.
     * @return {module:model/PolicySchema} The populated <code>PolicySchema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PolicySchema();

            if (data.hasOwnProperty('channels')) {
                obj['channels'] = ApiClient.convertToType(data['channels'], ['String']);
            }
            if (data.hasOwnProperty('client_source')) {
                obj['client_source'] = ApiClient.convertToType(data['client_source'], 'String');
            }
            if (data.hasOwnProperty('client_uuid')) {
                obj['client_uuid'] = ApiClient.convertToType(data['client_uuid'], 'String');
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
            if (data.hasOwnProperty('filters')) {
                obj['filters'] = ApiClient.convertToType(data['filters'], Object);
            }
            if (data.hasOwnProperty('frequency')) {
                obj['frequency'] = ApiClient.convertToType(data['frequency'], 'Boolean');
            }
            if (data.hasOwnProperty('frequency_minutes')) {
                obj['frequency_minutes'] = ApiClient.convertToType(data['frequency_minutes'], 'Number');
            }
            if (data.hasOwnProperty('frequency_occurrences')) {
                obj['frequency_occurrences'] = ApiClient.convertToType(data['frequency_occurrences'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PolicySchema</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PolicySchema</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PolicySchema.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['channels'])) {
            throw new Error("Expected the field `channels` to be an array in the JSON data but got " + data['channels']);
        }
        // ensure the json data is a string
        if (data['client_source'] && !(typeof data['client_source'] === 'string' || data['client_source'] instanceof String)) {
            throw new Error("Expected the field `client_source` to be a primitive type in the JSON string but got " + data['client_source']);
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

        return true;
    }


}

PolicySchema.RequiredProperties = ["channels", "client_source", "client_uuid", "deleted", "enabled", "filters", "frequency", "frequency_minutes", "frequency_occurrences", "id", "name"];

/**
 * List of channel notification
 * @member {Array.<String>} channels
 */
PolicySchema.prototype['channels'] = undefined;

/**
 * Policy Client source
 * @member {String} client_source
 */
PolicySchema.prototype['client_source'] = undefined;

/**
 * Policy Client UUID
 * @member {String} client_uuid
 */
PolicySchema.prototype['client_uuid'] = undefined;

/**
 * @member {Date} created_at
 */
PolicySchema.prototype['created_at'] = undefined;

/**
 * Policy deleted
 * @member {Boolean} deleted
 */
PolicySchema.prototype['deleted'] = undefined;

/**
 * Policy enabled
 * @member {Boolean} enabled
 */
PolicySchema.prototype['enabled'] = undefined;

/**
 * Policy filters
 * @member {Object} filters
 */
PolicySchema.prototype['filters'] = undefined;

/**
 * Enable alert frequency for the policy
 * @member {Boolean} frequency
 */
PolicySchema.prototype['frequency'] = undefined;

/**
 * Quantity of alert interval time
 * @member {Number} frequency_minutes
 */
PolicySchema.prototype['frequency_minutes'] = undefined;

/**
 * Quantity of alert occurrencies
 * @member {Number} frequency_occurrences
 */
PolicySchema.prototype['frequency_occurrences'] = undefined;

/**
 * Id
 * @member {String} id
 */
PolicySchema.prototype['id'] = undefined;

/**
 * Policy name
 * @member {String} name
 */
PolicySchema.prototype['name'] = undefined;

/**
 * @member {Date} updated_at
 */
PolicySchema.prototype['updated_at'] = undefined;






export default PolicySchema;

