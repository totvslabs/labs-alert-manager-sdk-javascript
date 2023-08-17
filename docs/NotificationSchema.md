# Alertmanager.NotificationSchema

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientUuid** | **String** | Notification Client UUID | 
**createdAt** | **Date** |  | [optional] 
**events** | **[String]** | List of notification events | [optional] 
**firstEvent** | **Date** |  | [optional] 
**id** | **String** | Id | 
**retries** | **Number** | Quantity notification retries | [optional] 
**status** | **String** | Notification status | 
**updatedAt** | **Date** |  | [optional] 



## Enum: StatusEnum


* `Queued` (value: `"Queued"`)

* `Processing` (value: `"Processing"`)

* `Failed` (value: `"Failed"`)

* `Success` (value: `"Success"`)




