function runAction(e){try{const{record:r,related:d}=e.data,[a]=d.Account,t=a.AvailableCredit__c,i=r.TotalAmount;if(r.OrderRecordTypeName__c=="Field Direct Order"){if(t==null)throw new Error(" No credit limit available");if(i==null)throw new Error(" No order total available");if(t<=0||t<i)throw new Error(` Credit Limit Exceeded - Current credit: ${t} and Order Total is ${i}`)}e.data.message=` Order total ${i} is within credit
    limit of ${t}`}catch(r){e.data.error=r==null?void 0:r.message}return e.data.updateDeviceData=!0,e.data.updateDeviceData.Order=!0,e.data.updateDeviceData.OrderIem=!0,e.data.reprice=!0,e}
