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
 * The EventSchema model module.
 * @module model/EventSchema
 * @version 1.0.0
 */
class EventSchema {
    /**
     * Constructs a new <code>EventSchema</code>.
     * @alias module:model/EventSchema
     * @param clientSource {String} Event souce
     * @param clientUuid {String} Client uuid. This is the id defined by client app
     * @param data {Object} Event data
     * @param eventType {String} Event type
     * @param id {String} Id
     * @param labels {Object} Event labels
     * @param schemaVersion {String} Event schema version. Can be used by client app to know how to parse the event
     * @param severity {String} Event severity
     * @param status {String} Event status, Received, Stored
     */
    constructor(clientSource, clientUuid, data, eventType, id, labels, schemaVersion, severity, status) { 
        
        EventSchema.initialize(this, clientSource, clientUuid, data, eventType, id, labels, schemaVersion, severity, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, clientSource, clientUuid, data, eventType, id, labels, schemaVersion, severity, status) { 
        obj['client_source'] = clientSource;
        obj['client_uuid'] = clientUuid;
        obj['data'] = data;
        obj['event_type'] = eventType;
        obj['id'] = id;
        obj['labels'] = labels;
        obj['schema_version'] = schemaVersion;
        obj['severity'] = severity;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>EventSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventSchema} obj Optional instance to populate.
     * @return {module:model/EventSchema} The populated <code>EventSchema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventSchema();

            if (data.hasOwnProperty('client_source')) {
                obj['client_source'] = ApiClient.convertToType(data['client_source'], 'String');
            }
            if (data.hasOwnProperty('client_uuid')) {
                obj['client_uuid'] = ApiClient.convertToType(data['client_uuid'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], Object);
            }
            if (data.hasOwnProperty('event_type')) {
                obj['event_type'] = ApiClient.convertToType(data['event_type'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], Object);
            }
            if (data.hasOwnProperty('schema_version')) {
                obj['schema_version'] = ApiClient.convertToType(data['schema_version'], 'String');
            }
            if (data.hasOwnProperty('severity')) {
                obj['severity'] = ApiClient.convertToType(data['severity'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EventSchema</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EventSchema</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EventSchema.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
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
        if (data['event_type'] && !(typeof data['event_type'] === 'string' || data['event_type'] instanceof String)) {
            throw new Error("Expected the field `event_type` to be a primitive type in the JSON string but got " + data['event_type']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['schema_version'] && !(typeof data['schema_version'] === 'string' || data['schema_version'] instanceof String)) {
            throw new Error("Expected the field `schema_version` to be a primitive type in the JSON string but got " + data['schema_version']);
        }
        // ensure the json data is a string
        if (data['severity'] && !(typeof data['severity'] === 'string' || data['severity'] instanceof String)) {
            throw new Error("Expected the field `severity` to be a primitive type in the JSON string but got " + data['severity']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}

EventSchema.RequiredProperties = ["client_source", "client_uuid", "data", "event_type", "id", "labels", "schema_version", "severity", "status"];

/**
 * Event souce
 * @member {String} client_source
 */
EventSchema.prototype['client_source'] = undefined;

/**
 * Client uuid. This is the id defined by client app
 * @member {String} client_uuid
 */
EventSchema.prototype['client_uuid'] = undefined;

/**
 * @member {Date} created_at
 */
EventSchema.prototype['created_at'] = undefined;

/**
 * Event data
 * @member {Object} data
 */
EventSchema.prototype['data'] = undefined;

/**
 * Event type
 * @member {String} event_type
 */
EventSchema.prototype['event_type'] = undefined;

/**
 * Id
 * @member {String} id
 */
EventSchema.prototype['id'] = undefined;

/**
 * Event labels
 * @member {Object} labels
 */
EventSchema.prototype['labels'] = undefined;

/**
 * Event schema version. Can be used by client app to know how to parse the event
 * @member {String} schema_version
 */
EventSchema.prototype['schema_version'] = undefined;

/**
 * Event severity
 * @member {String} severity
 */
EventSchema.prototype['severity'] = undefined;

/**
 * Event status, Received, Stored
 * @member {String} status
 */
EventSchema.prototype['status'] = undefined;

/**
 * @member {Date} updated_at
 */
EventSchema.prototype['updated_at'] = undefined;






export default EventSchema;

