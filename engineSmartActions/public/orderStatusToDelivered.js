function runAction(e){try{const{record:t}=e.data,r=t.Status;r=="Pending Delivery"&&(r="Delivered")}catch(t){e.data.error=t==null?void 0:t.message}return e.data.updateDeviceData=!0,e.data.updateDeviceData.Order=!0,e.data.updateDeviceData.OrderIem=!0,e.data.reprice=!0,e}
