function runAction(e){try{const{record:r,related:i}=e.data,[o]=i.Account,n=o.PORequired__c,a=r.PoNumber,t=o.AvailableCredit__c,d=r.TotalAmount;if(t==null)throw new Error(" No credit limit available");if(d==null)throw new Error(" No order total available");if(t<=0)throw new Error(` Credit Limit Exceeded - Current credit:${t}`);if(i.Account===void 0)throw new Error("This order is not associated with an account.");if(n===void 0)throw new Error("No access to PO Required field.");if(n&&!a)throw new Error("Please fill out the Purchase Order number before completing the order!");e.data.message="Order Validated"}catch(r){e.data.error=r==null?void 0:r.message}return e.data.updateDeviceData=!0,e.data.updateDeviceData.Order=!0,e.data.updateDeviceData.OrderIem=!0,e.data.reprice=!0,e}
