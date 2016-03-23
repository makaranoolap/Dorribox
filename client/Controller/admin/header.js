Template.header.events({
	'click .popup-with-zoom-anim':function(e){
		//alert();
		$('.popup-with-zoom-anim').magnificPopup({
		//alert("this is a test");
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});
	}
});
Template.searcheIngin.helpers({
  playersIndex: () => PlayersIndex
});