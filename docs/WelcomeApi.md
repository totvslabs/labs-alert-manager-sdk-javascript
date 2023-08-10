# Alertmanager.WelcomeApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getWelcome**](WelcomeApi.md#getWelcome) | **GET** / | 



## getWelcome

> getWelcome()



### Example

```javascript
import Alertmanager from 'alertmanager';
let defaultClient = Alertmanager.ApiClient.instance;
// Configure API key authorization: auth_token
let auth_token = defaultClient.authentications['auth_token'];
auth_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//auth_token.apiKeyPrefix = 'Token';

let apiInstance = new Alertmanager.WelcomeApi();
apiInstance.getWelcome((error, data, response) => {
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

[auth_token](../README.md#auth_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

