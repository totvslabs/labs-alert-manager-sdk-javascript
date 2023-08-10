# Alertmanager.ChannelsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletePolicyChannelsDelete**](ChannelsApi.md#deletePolicyChannelsDelete) | **DELETE** /channels/{id} | 
[**getPolicyChannelsGet**](ChannelsApi.md#getPolicyChannelsGet) | **GET** /channels/{id} | 
[**getPolicyChannelsGetAll**](ChannelsApi.md#getPolicyChannelsGetAll) | **GET** /channels | 
[**postPolicyChannelsPost**](ChannelsApi.md#postPolicyChannelsPost) | **POST** /channels | 
[**postPolicyChannelsTest**](ChannelsApi.md#postPolicyChannelsTest) | **POST** /channels/test | 
[**putPolicyChannelsPut**](ChannelsApi.md#putPolicyChannelsPut) | **PUT** /channels/{id} | 



## deletePolicyChannelsDelete

> PolicyChannelSchema deletePolicyChannelsDelete(id)



### Example

```javascript
import Alertmanager from 'alertmanager';
let defaultClient = Alertmanager.ApiClient.instance;
// Configure API key authorization: auth_token
let auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

let apiInstance = new Alertmanager.ChannelsApi();
let id = "id_example"; // String | 
apiInstance.deletePolicyChannelsDelete(id, (error, data, response) => {
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

[**PolicyChannelSchema**](PolicyChannelSchema.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPolicyChannelsGet

> PolicyChannelSchema getPolicyChannelsGet(id)



### Example

```javascript
import Alertmanager from 'alertmanager';
let defaultClient = Alertmanager.ApiClient.instance;
// Configure API key authorization: auth_token
let auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

let apiInstance = new Alertmanager.ChannelsApi();
let id = "id_example"; // String | 
apiInstance.getPolicyChannelsGet(id, (error, data, response) => {
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

[**PolicyChannelSchema**](PolicyChannelSchema.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPolicyChannelsGetAll

> PaginationSchema getPolicyChannelsGetAll()



### Example

```javascript
import Alertmanager from 'alertmanager';
let defaultClient = Alertmanager.ApiClient.instance;
// Configure API key authorization: auth_token
let auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

let apiInstance = new Alertmanager.ChannelsApi();
apiInstance.getPolicyChannelsGetAll((error, data, response) => {
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


## postPolicyChannelsPost

> PolicyChannelSchema postPolicyChannelsPost(opts)



### Example

```javascript
import Alertmanager from 'alertmanager';
let defaultClient = Alertmanager.ApiClient.instance;
// Configure API key authorization: auth_token
let auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

let apiInstance = new Alertmanager.ChannelsApi();
let opts = {
  'requestBody': new Alertmanager.PolicyChannelSchema() // PolicyChannelSchema | 
};
apiInstance.postPolicyChannelsPost(opts, (error, data, response) => {
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
 **requestBody** | [**PolicyChannelSchema**](PolicyChannelSchema.md)|  | [optional] 

### Return type

[**PolicyChannelSchema**](PolicyChannelSchema.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postPolicyChannelsTest

> PolicyChannelSchema postPolicyChannelsTest(opts)



### Example

```javascript
import Alertmanager from 'alertmanager';
let defaultClient = Alertmanager.ApiClient.instance;
// Configure API key authorization: auth_token
let auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

let apiInstance = new Alertmanager.ChannelsApi();
let opts = {
  'requestBody': new Alertmanager.PolicyChannelSchema() // PolicyChannelSchema | 
};
apiInstance.postPolicyChannelsTest(opts, (error, data, response) => {
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
 **requestBody** | [**PolicyChannelSchema**](PolicyChannelSchema.md)|  | [optional] 

### Return type

[**PolicyChannelSchema**](PolicyChannelSchema.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putPolicyChannelsPut

> PolicyChannelSchema putPolicyChannelsPut(id, opts)



### Example

```javascript
import Alertmanager from 'alertmanager';
let defaultClient = Alertmanager.ApiClient.instance;
// Configure API key authorization: auth_token
let auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

let apiInstance = new Alertmanager.ChannelsApi();
let id = "id_example"; // String | 
let opts = {
  'requestBody': new Alertmanager.PolicyChannelSchema() // PolicyChannelSchema | 
};
apiInstance.putPolicyChannelsPut(id, opts, (error, data, response) => {
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
 **requestBody** | [**PolicyChannelSchema**](PolicyChannelSchema.md)|  | [optional] 

### Return type

[**PolicyChannelSchema**](PolicyChannelSchema.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

