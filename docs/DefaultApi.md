# Alertmanager.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteClientAppGetDelete**](DefaultApi.md#deleteClientAppGetDelete) | **DELETE** /client_apps/{id} | 
[**getClientAppGet**](DefaultApi.md#getClientAppGet) | **GET** /client_apps/{id} | 
[**getClientAppGetAll**](DefaultApi.md#getClientAppGetAll) | **GET** /client_apps | 
[**getDocs**](DefaultApi.md#getDocs) | **GET** /docs | 
[**getHealthCheck**](DefaultApi.md#getHealthCheck) | **GET** /health_check | 
[**getSwaggerJson**](DefaultApi.md#getSwaggerJson) | **GET** /docs/swagger.json | 
[**postClientAppPost**](DefaultApi.md#postClientAppPost) | **POST** /client_apps/{id} | 
[**putClientAppPut**](DefaultApi.md#putClientAppPut) | **PUT** /client_apps | 



## deleteClientAppGetDelete

> String deleteClientAppGetDelete(id)



### Example

```javascript
import Alertmanager from 'alertmanager';

let apiInstance = new Alertmanager.DefaultApi();
let id = "id_example"; // String | 
apiInstance.deleteClientAppGetDelete(id, (error, data, response) => {
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

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getClientAppGet

> ClientAppSchema getClientAppGet(id)



### Example

```javascript
import Alertmanager from 'alertmanager';

let apiInstance = new Alertmanager.DefaultApi();
let id = "id_example"; // String | 
apiInstance.getClientAppGet(id, (error, data, response) => {
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

[**ClientAppSchema**](ClientAppSchema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getClientAppGetAll

> [ClientAppSchema] getClientAppGetAll()



### Example

```javascript
import Alertmanager from 'alertmanager';

let apiInstance = new Alertmanager.DefaultApi();
apiInstance.getClientAppGetAll((error, data, response) => {
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

[**[ClientAppSchema]**](ClientAppSchema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDocs

> getDocs()



### Example

```javascript
import Alertmanager from 'alertmanager';

let apiInstance = new Alertmanager.DefaultApi();
apiInstance.getDocs((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getHealthCheck

> getHealthCheck()



### Example

```javascript
import Alertmanager from 'alertmanager';

let apiInstance = new Alertmanager.DefaultApi();
apiInstance.getHealthCheck((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getSwaggerJson

> getSwaggerJson()



### Example

```javascript
import Alertmanager from 'alertmanager';

let apiInstance = new Alertmanager.DefaultApi();
apiInstance.getSwaggerJson((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postClientAppPost

> ClientAppSchema postClientAppPost(id, opts)



### Example

```javascript
import Alertmanager from 'alertmanager';

let apiInstance = new Alertmanager.DefaultApi();
let id = "id_example"; // String | 
let opts = {
  'requestBody': new Alertmanager.ClientAppSchema() // ClientAppSchema | 
};
apiInstance.postClientAppPost(id, opts, (error, data, response) => {
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
 **requestBody** | [**ClientAppSchema**](ClientAppSchema.md)|  | [optional] 

### Return type

[**ClientAppSchema**](ClientAppSchema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putClientAppPut

> ClientAppSchema putClientAppPut()



### Example

```javascript
import Alertmanager from 'alertmanager';

let apiInstance = new Alertmanager.DefaultApi();
apiInstance.putClientAppPut((error, data, response) => {
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

[**ClientAppSchema**](ClientAppSchema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

