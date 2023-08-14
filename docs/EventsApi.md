# Alertmanager.EventsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteEventsParametersDelete**](EventsApi.md#deleteEventsParametersDelete) | **DELETE** /events/parameters/{app_key} | 
[**getEventsGet**](EventsApi.md#getEventsGet) | **GET** /events/{id} | 
[**getEventsGetAll**](EventsApi.md#getEventsGetAll) | **GET** /events | 
[**getEventsParametersGet**](EventsApi.md#getEventsParametersGet) | **GET** /events/parameters | 
[**postEventsPost**](EventsApi.md#postEventsPost) | **POST** /events | 



## deleteEventsParametersDelete

> String deleteEventsParametersDelete(appKey)



### Example

```javascript
import Alertmanager from 'alertmanager';
let defaultClient = Alertmanager.ApiClient.instance;
// Configure API key authorization: auth_token
let auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

let apiInstance = new Alertmanager.EventsApi();
let appKey = "appKey_example"; // String | 
apiInstance.deleteEventsParametersDelete(appKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appKey** | **String**|  | 

### Return type

**String**

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventsGet

> EventSchema getEventsGet(id)



### Example

```javascript
import Alertmanager from 'alertmanager';
let defaultClient = Alertmanager.ApiClient.instance;
// Configure API key authorization: auth_token
let auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

let apiInstance = new Alertmanager.EventsApi();
let id = "id_example"; // String | 
apiInstance.getEventsGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**EventSchema**](EventSchema.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventsGetAll

> PaginationSchema getEventsGetAll()



### Example

```javascript
import Alertmanager from 'alertmanager';
let defaultClient = Alertmanager.ApiClient.instance;
// Configure API key authorization: auth_token
let auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

let apiInstance = new Alertmanager.EventsApi();
apiInstance.getEventsGetAll((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**PaginationSchema**](PaginationSchema.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventsParametersGet

> [EventSchema] getEventsParametersGet()



### Example

```javascript
import Alertmanager from 'alertmanager';
let defaultClient = Alertmanager.ApiClient.instance;
// Configure API key authorization: auth_token
let auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

let apiInstance = new Alertmanager.EventsApi();
apiInstance.getEventsParametersGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[EventSchema]**](EventSchema.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postEventsPost

> EventSchema postEventsPost(opts)



### Example

```javascript
import Alertmanager from 'alertmanager';
let defaultClient = Alertmanager.ApiClient.instance;
// Configure API key authorization: auth_token
let auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

let apiInstance = new Alertmanager.EventsApi();
let opts = {
  'requestBody': new Alertmanager.EventSchema() // EventSchema | 
};
apiInstance.postEventsPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | [**EventSchema**](EventSchema.md)|  | [optional] 

### Return type

[**EventSchema**](EventSchema.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

