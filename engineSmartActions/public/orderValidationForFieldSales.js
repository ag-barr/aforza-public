function runAction(e){try{let r=new Date().getTime();const{record:i,related:t}=e.data,[c]=t.Account,n=c.PORequired__c,o=i.PoNumber;if(t.Account===void 0)throw new Error("This order is not associated with an account.");if(n===void 0)throw new Error("No access to PO Required field.");if(n&&!o)throw new Error("Please fill out the Purchase Order number before completing the order!");e.data.message="Order Validated";let a=new Date().getTime();throw new error(`Execution time ${r-a}. The start time ${r} and end time ${a}`)}catch(r){e.data.error=r.message}return e.data.updateDeviceData=!0,e.data.updateDeviceData.Order=!0,e.data.updateDeviceData.OrderItem=!1,e.data.reprice=!1,e}
