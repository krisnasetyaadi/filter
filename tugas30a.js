function filterparam(value){
    var arr =[
        {negara: 'Indo',benua:'Asia'},
        {negara: 'Jerman',benua:'Eropa'},
        {negara: 'Spanyol',benua:'Eropa'},
        {negara:'Korea',benua:'Asia'},
        {negara:'Portugal',benua:'Eropa'},
        {negara:'Amerika Serikat',benua:'Amerika'}
    ]
    var benuaEropa = arr.filter(function(item){
        if(item.benua === 'Asia'){
            console.log(item)
        }
        
    })
    console.log(benuaEropa)
}
filterparam()