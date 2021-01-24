G.AddData({
name:'LMV0.1',
author:'Little',
desc:'Way To Much Insight',
engineVersion:1,
manifest:'0',
requires:['Default dataset*'],
sheets:{'InsightSheet':'https://ibb.co/K2TGMq9'},//custom stylesheet (note : broken in IE and Edge for the time being)
func:function()
{
    new G.Unit({
        name:'Vortex',
        desc:'@generates [insight] more frequently than a [dreamer]<>A [Vortex] spends their time creating magic portals that make people with crazy ideas come into your reality',
        icon:[1,0,'InsightSheet'],
        cost:{'food':1},
        use:{'worker':1},
        effects:[
            {type:'gather',what:{'insight':10}},
            {type:'gather',what:{'insight':15},req:{'symbolism':true}},
            {type:'mult',value:2,req:{'wisdom rituals':'on'}}
        ],
        category:'discovery',
        });
 
}
});
