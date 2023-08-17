# Alertmanager.NotificationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNotificationLogGet**](NotificationsApi.md#getNotificationLogGet) | **GET** /notifications/{id} | 
[**getNotificationLogGetAll**](NotificationsApi.md#getNotificationLogGetAll) | **GET** /notifications | 
[**postNotificationLogResend**](NotificationsApi.md#postNotificationLogResend) | **POST** /notifications/{id}/resend | 



## getNotificationLogGet

> NotificationSchema getNotificationLogGet(id)



### Example

```javascript
import Alertmanager from 'alertmanager';
let defaultClient = Alertmanager.ApiClient.instance;
// Configure API key authorization: auth_token
let auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

let apiInstance = new Alertmanager.NotificationsApi();
let id = "id_example"; // String | 
apiInstance.getNotificationLogGet(id, (error, data, response) => {
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

[**NotificationSchema**](NotificationSchema.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNotificationLogGetAll

> PaginationSchema getNotificationLogGetAll()



### Example

```javascript
import Alertmanager from 'alertmanager';
let defaultClient = Alertmanager.ApiClient.instance;
// Configure API key authorization: auth_token
let auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

let apiInstance = new Alertmanager.NotificationsApi();
apiInstance.getNotificationLogGetAll((error, data, response) => {
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


## postNotificationLogResend

> NotificationSchema postNotificationLogResend(id)



### Example

```javascript
import Alertmanager from 'alertmanager';
let defaultClient = Alertmanager.ApiClient.instance;
// Configure API key authorization: auth_token
let auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

let apiInstance = new Alertmanager.NotificationsApi();
let id = "id_example"; // String | 
apiInstance.postNotificationLogResend(id, (error, data, response) => {
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

[**NotificationSchema**](NotificationSchema.md)

### Authorization

[auth_token](../README.md#auth_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

