function runAction(e){e.data.message="";let t=0;return e.data.related.OrderItem.forEach(r=>{e.data.related.aforza__Relationship_Rule__c.forEach(a=>{r.Product2Id===a.aforza__Source_Product__c&&(t+=r.Quantity*a.aforza__Quantity__c)})}),e.data.related.OrderItem.forEach(r=>{r.Product2.ProductCode==="9999300"&&(r.Quantity=t)}),e.data.message+="Your order has been validated",e.data.message===""&&(e.data.error="An Error has occurred",e.data.message=null),e.data.updateDeviceData={Order:!0,OrderItem:!0},e.data.reprice=!0,e}
