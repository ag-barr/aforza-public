function runAction(_){_.data.message="The Order Item Quantities have been reduced";let t=_.data.record,s=new Map,i=new Map;return _.data.related.PricebookEntry.forEach(n=>{s.set(n.Product2Id,n)}),_.data.related.OrderItem.forEach(n=>{i.set(n.Product2Id,n)}),t.OrderItemQuantityAdjusted__c!==!0&&(t.MissingProduct1__c&&t.MissingQuantity1__c&&i.has(t.MissingProduct1__c)&&s.has(t.MissingProduct1__c)&&i.get(t.MissingProduct1__c).Quantity-t.MissingQuantity1__c>=0&&(i.get(t.MissingProduct1__c).Quantity-=t.MissingQuantity1__c,t.OrderItemQuantityAdjusted__c=!0,_.data.message+=`
`+s.get(t.MissingProduct1__c).Name+": "+t.MissingQuantity1__c),t.MissingProduct2__c&&t.MissingQuantity2__c&&i.has(t.MissingProduct2__c)&&s.has(t.MissingProduct2__c)&&i.get(t.MissingProduct2__c).Quantity-t.MissingQuantity2__c>=0&&(i.get(t.MissingProduct2__c).Quantity-=t.MissingQuantity2__c,t.OrderItemQuantityAdjusted__c=!0,_.data.message+=`
`+s.get(t.MissingProduct2__c).Name+": "+t.MissingQuantity2__c),t.MissingProduct3__c&&t.MissingQuantity3__c&&i.has(t.MissingProduct3__c)&&s.has(t.MissingProduct3__c)&&i.get(t.MissingProduct3__c).Quantity-t.MissingQuantity3__c>=0&&(i.get(t.MissingProduct3__c).Quantity-=t.MissingQuantity3__c,t.OrderItemQuantityAdjusted__c=!0,_.data.message+=`
`+s.get(t.MissingProduct3__c).Name+": "+t.MissingQuantity3__c),t.MissingProduct4__c&&t.MissingQuantity4__c&&i.has(t.MissingProduct4__c)&&s.has(t.MissingProduct4__c)&&i.get(t.MissingProduct4__c).Quantity-t.MissingQuantity4__c>=0&&(i.get(t.MissingProduct4__c).Quantity-=t.MissingQuantity4__c,t.OrderItemQuantityAdjusted__c=!0,_.data.message+=`
`+s.get(t.MissingProduct4__c).Name+": "+t.MissingQuantity4__c),t.MissingProduct5__c&&t.MissingQuantity5__c&&i.has(t.MissingProduct5__c)&&s.has(t.MissingProduct5__c)&&i.get(t.MissingProduct5__c).Quantity-t.MissingQuantity5__c>=0&&(i.get(t.MissingProduct5__c).Quantity-=t.MissingQuantity5__c,t.OrderItemQuantityAdjusted__c=!0,_.data.message+=`
`+s.get(t.MissingProduct5__c).Name+": "+t.MissingQuantity5__c),t.MissingProduct6__c&&t.MissingQuantity6__c&&i.has(t.MissingProduct6__c)&&s.has(t.MissingProduct6__c)&&i.get(t.MissingProduct6__c).Quantity-t.MissingQuantity6__c>=0&&(i.get(t.MissingProduct6__c).Quantity-=t.MissingQuantity6__c,t.OrderItemQuantityAdjusted__c=!0,_.data.message+=`
`+s.get(t.MissingProduct6__c).Name+": "+t.MissingQuantity6__c),t.MissingProduct7__c&&t.MissingQuantity7__c&&i.has(t.MissingProduct7__c)&&s.has(t.MissingProduct7__c)&&i.get(t.MissingProduct7__c).Quantity-t.MissingQuantity7__c>=0&&(i.get(t.MissingProduct7__c).Quantity-=t.MissingQuantity7__c,t.OrderItemQuantityAdjusted__c=!0,_.data.message+=`
`+s.get(t.MissingProduct7__c).Name+": "+t.MissingQuantity7__c),t.MissingProduct8__c&&t.MissingQuantity8__c&&i.has(t.MissingProduct8__c)&&s.has(t.MissingProduct8__c)&&i.get(t.MissingProduct8__c).Quantity-t.MissingQuantity8__c>=0&&(i.get(t.MissingProduct8__c).Quantity-=t.MissingQuantity8__c,t.OrderItemQuantityAdjusted__c=!0,_.data.message+=`
`+s.get(t.MissingProduct8__c).Name+": "+t.MissingQuantity8__c),t.MissingProduct9__c&&t.MissingQuantity9__c&&i.has(t.MissingProduct9__c)&&s.has(t.MissingProduct9__c)&&i.get(t.MissingProduct9__c).Quantity-t.MissingQuantity9__c>=0&&(i.get(t.MissingProduct9__c).Quantity-=t.MissingQuantity9__c,t.OrderItemQuantityAdjusted__c=!0,_.data.message+=`
`+s.get(t.MissingProduct9__c).Name+": "+t.MissingQuantity9__c),t.MissingProduct10__c&&t.MissingQuantity10__c&&i.has(t.MissingProduct10__c)&&s.has(t.MissingProduct10__c)&&i.get(t.MissingProduct10__c).Quantity-t.MissingQuantity10__c>=0&&(i.get(t.MissingProduct10__c).Quantity-=t.MissingQuantity10__c,t.OrderItemQuantityAdjusted__c=!0,_.data.message+=`
`+s.get(t.MissingProduct10__c).Name+": "+t.MissingQuantity10__c)),_.data.updateDeviceData=!0,_.data.updateDeviceData.Order=!0,_.data.updateDeviceData.OrderItem=!0,_.data.reprice=!1,_}