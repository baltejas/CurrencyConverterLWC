public with sharing class CurrencyConverterService {
    public CurrencyConverterService() {}

    @AuraEnabled(cacheable=true)
    public static double convert(string sourceCurrency, string targetCurrency, string amount) {
        HttpRequest req = new HttpRequest();
        HttpResponse res = new HttpResponse();
        Http http = new Http();
        string today = String.valueOf(System.today());
        req.setEndpoint('https://api.apilayer.com/fixer/convert?from='+sourceCurrency+'&to='+targetCurrency+'&amount='+amount+'&date='+today);
        req.setMethod('GET');
        req.setHeader('apikey', 'xxxx');
        res = http.send(req);
        Map<string, object> responseMap = (Map<string, object>) JSON.deserializeUntyped(res.getbody());
        return (double) responseMap.get('result');
    }
}
