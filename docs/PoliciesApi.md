# Alertmanager.PoliciesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletePoliciesDelete**](PoliciesApi.md#deletePoliciesDelete) | **DELETE** /policies/{id} | 
[**getPoliciesGet**](PoliciesApi.md#getPoliciesGet) | **GET** /policies/{id} | 
[**getPoliciesGetAll**](PoliciesApi.md#getPoliciesGetAll) | **GET** /policies | 
[**postPoliciesPost**](PoliciesApi.md#postPoliciesPost) | **POST** /policies | 
[**putPoliciesPut**](PoliciesApi.md#putPoliciesPut) | **PUT** /policies/{id} | 



## deletePoliciesDelete

> PolicySchema deletePoliciesDelete(id)



### Example

```javascript
import Alertmanager from 'alertmanager';
let defaultClient = Alertmanager.ApiClient.instance;
// Configure API key authorization: auth_token
let auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

let apiInstance = new Alertmanager.PoliciesApi();
let id = "id_example"; // String | 
apiInstance.deletePoliciesDelete(id, (error, data, response) => {
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

[**PolicySchema**](PolicySchema.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPoliciesGet

> PolicySchema getPoliciesGet(id)



### Example

```javascript
import Alertmanager from 'alertmanager';
let defaultClient = Alertmanager.ApiClient.instance;
// Configure API key authorization: auth_token
let auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

let apiInstance = new Alertmanager.PoliciesApi();
let id = "id_example"; // String | 
apiInstance.getPoliciesGet(id, (error, data, response) => {
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

[**PolicySchema**](PolicySchema.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPoliciesGetAll

> PaginationSchema getPoliciesGetAll()



### Example

```javascript
import Alertmanager from 'alertmanager';
let defaultClient = Alertmanager.ApiClient.instance;
// Configure API key authorization: auth_token
let auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

let apiInstance = new Alertmanager.PoliciesApi();
apiInstance.getPoliciesGetAll((error, data, response) => {
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


## postPoliciesPost

> PolicySchema postPoliciesPost(opts)



### Example

```javascript
import Alertmanager from 'alertmanager';
let defaultClient = Alertmanager.ApiClient.instance;
// Configure API key authorization: auth_token
let auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

let apiInstance = new Alertmanager.PoliciesApi();
let opts = {
  'requestBody': new Alertmanager.PolicySchema() // PolicySchema | 
};
apiInstance.postPoliciesPost(opts, (error, data, response) => {
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
 **requestBody** | [**PolicySchema**](PolicySchema.md)|  | [optional] 

### Return type

[**PolicySchema**](PolicySchema.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putPoliciesPut

> PolicySchema putPoliciesPut(id, opts)



### Example

```javascript
import Alertmanager from 'alertmanager';
let defaultClient = Alertmanager.ApiClient.instance;
// Configure API key authorization: auth_token
let auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

let apiInstance = new Alertmanager.PoliciesApi();
let id = "id_example"; // String | 
let opts = {
  'requestBody': new Alertmanager.PolicySchema() // PolicySchema | 
};
apiInstance.putPoliciesPut(id, opts, (error, data, response) => {
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
 **requestBody** | [**PolicySchema**](PolicySchema.md)|  | [optional] 

### Return type

[**PolicySchema**](PolicySchema.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

