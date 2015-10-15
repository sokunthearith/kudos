var selectimage = [
	{
		value: "Bonnaka Mao",
		icon: "img/Bonnaka Mao.jpg"
	},
	{
		value: "Chantheoun Kimthy",
		icon: "img/Chantheoun Kimthy.jpg"
	},
	{
		value: "Chanthorn Ngeth",
		icon: "img/Chanthorn Ngeth.jpg"
	},
	{
		value: "Chanthou Nim",
		icon: "img/Chanthou Nim.jpg"
	},
	{
		value: "Chhengleap Soem",
		icon: "img/Chhengleap Soem.jpg"
	},
	{
		value: "Chivy Lim",
		icon: "img/Chivy Lim.jpg"
	},

	{
		value: "Christoph Luthy",
		icon: "img/Christoph Luthy.jpg"
	},
	{
		value: "Danet Kroeng",
		icon: "img/Danet Kroeng.jpg"
	},
	{
		value: "Dominik Stankowski",
		icon: "img/Dominik Stankowski.jpg"
	},
	{
		value: "Jon Bowers",
		icon: "img/Jon Bowers.jpg"
	},
	{
		value: "Leap Sok",
		icon: "img/Leap Sok.jpg"
	},
	{
		value: "Man Math",
		icon: "img/Man Math.jpg"
	},
	{
		value: "Mary Hui Luthy",
		icon: "img/Mary Hui Luthy.jpg"
	},

	{
		value: "Ratanak Sokhom",
		icon: "img/Ratanak Sokhom.jpg"
	},
	{
		value: "Ratha Heang",
		icon: "img/Ratha Heang.jpg"
	},
	{
		value: "Rayuth You",
		icon: "img/Rayuth You.jpg"
	},
	{
		value: "Sengchheang Chhun",
		icon: "img/Sengchheang Chhun.jpg"
	},
	{
		value: "Simon Gadient",
		icon: "img/Simon Gadient.jpg"
	},
	{
		value: "Sok Proem",
		icon: "img/Sok Proem.jpg"
	},
	{
		value: "Somaly Nol",
		icon: "img/Somaly Nol.jpg"
	},
	{
		value: "Sothea Mean",
		icon: "img/Sothea Mean.jpg"
	},
	{
		value: "Sovandy Chin",
		icon: "img/Sovandy Chin.jpg"
	},
	{
		value: "Sreyleak Thux",
		icon: "img/Sreyleak Thux.jpg"
	},
	{
		value: "Sreyneang Pok",
		icon: "img/Sreyneang Pok.jpg"
	},
	{
		value: "Visay Keo",
		icon: "img/Visay Keo.jpg"
	},
	{
		value: "Bunhok",
		icon: "img/Bunhok.jpg"
	},
	{
		value: "Bunthon",
		icon: "img/Bunthon.jpg"
	},

	{
		value: "Long Chun",
		icon: "img/Long Chun.jpg"
	},

	{
		value: "Chomnit",
		icon: "img/Chomnit.jpg"
	},
	{
		value: "Naseat",
		icon: "img/Naseat.jpg"
	}
];
$( "#project" ).autocomplete({
	minLength: 0,
	source: projects,
	focus: function( event, ui ) {
		$( "#project" ).val( ui.item.label );
		return false;
	},
	select: function( event, ui ) {
		$( "#project" ).val( ui.item.label );
		$( "#project-id" ).val( ui.item.value );
		$( "#project-description" ).html( ui.item.desc );
		$( "#project-icon" ).attr( "src", "images/" + ui.item.icon );

		return false;
	}
})
	.autocomplete( "instance" )._renderItem = function( ul, item ) {
	return $( "<li>" )
		.append( "<a>" + item.label + "<br>" + item.desc + "</a>" )
		.appendTo( ul );
};