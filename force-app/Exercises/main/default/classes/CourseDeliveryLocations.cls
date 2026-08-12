public with sharing class CourseDeliveryLocations {
    @AuraEnabled(cacheable=true)
    public static List<AggregateResult> getLocations() {
        return [SELECT Location__c, COUNT(Id) numDeliveries FROM Course_Delivery__c WHERE Location__c != null WITH USER_MODE GROUP BY Location__c];

    }
}