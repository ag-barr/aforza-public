function runAction(e){try{const{record:t,related:c}=e.data,[o]=c.Account,r=o.AvailableCredit__c,i=t.TotalAmount,d=t.RecordTypeId;if(d==="0122z000001WSqFAAW"||d==="0123G000000FddhQAC"||d==="0122z000001cDV0AAM"||d==="0128d000000cikJAAQ"){if(r==null)throw new Error("No credit limit available");if(i==null)throw new Error("No order total available");if(i>r)throw new Error(`Credit Limit Exceeded - Current credit: ${r} and Order Total is ${i}`);e.data.message=`Order total ${i} is within credit limit of ${r}`}}catch(t){e.data.error=t==null?void 0:t.message}return e.data.updateDeviceData=!1,e.data.reprice=!0,e}
