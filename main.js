var data = {
    items:[{description:"",quantity:0,rate:0}],
    tax:0,
    total: 0,
    amountPaid: 0,
    balance: 0,
};

new Vue({
    el: "#app",
    data: data,
    methods:{
        // balance:function(){
        // },
        calcTotal:function(){
            var total = 0;
            for(index in this.items){
                total = total + ((this.items[index].quantity)*(this.items[index].rate))
            }
            total = total + (total*(this.tax/100));
            this.total = total;
        },
        calcBalance:function(){
            var balance = 0;
            balance = this.total + this.amountPaid;
            this.balance = balance;
        },
        additem:function(){
            this.items.push({description:"",quantity:0,rate:0,amount:0});
        },
        removeitem:function(i){
            this.items.splice(i,1);
            this.calcTotal();
        },
     

    }
})



