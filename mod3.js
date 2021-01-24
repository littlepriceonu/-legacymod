G.AddData({
name:'New Day Lines',
author:'Little',
desc:'A mod made for me and my friends.',
engineVersion:1,
manifest:0,
requires:['Default dataset*'],
sheets:0,//custom stylesheet (note : broken in IE and Edge for the time being)
func:function()
{
new G.Res({
		name:'Autisum',
		desc:'[Autisum] is given when your gatherers get a little bit more stupid, Can also be eaten, No clue why.',
		icon:0,
		turnToByContext:{'eat':{'health':0.1,'happiness':0.1},'decay':{'spoiled food':0.5}},//this basically translates to : "when eaten, generate some health and happiness; when rotting, turn into either nothing or some spoiled food"
		partOf:'food',
		category:'food',
	});
G.getDict('grass').res['gather']['Autisum']=3;
G.props['new day lines']=[
		'Harry Is Short.',
		'Mason Is A Nerd.',
		'Potato.',
		'I mean, Who Doesnt Like Chesse?',
		'Crossaint.',
		'E.',
		'Dont eat the forbidden Chesse.'
	];
}
});
