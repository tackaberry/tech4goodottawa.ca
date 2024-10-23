jQuery(document).ready(function() {
	
	if( jQuery( '.otw-sticky-sidebar, .otw-sticky-sidebar-widget' ).length ){
		
		var top_offset = 0;
		
		var admin_bar = jQuery( '#wpadminbar' );
		
		if( admin_bar.size() ){
			top_offset = admin_bar.height();
		}
		
		jQuery( '.otw-sticky-sidebar, .otw-sticky-sidebar-widget' ).each( function(){
			
			var custom_from_top = 0;
			
			if( jQuery( this ).attr( 'data-fromtop' ) ){
				custom_from_top = Number( jQuery( this ).attr( 'data-fromtop' ) );
			}
			
			jQuery( this ).sticky({topSpacing: ( top_offset + custom_from_top ) });
		} );
	};
	
	var scrollto_sticky = jQuery( '.otw-sticky-sidebar, .otw-sticky-sidebar-widget' );
	
	jQuery( window ).scroll( function(){
		
		scrollto_sticky.each( function(){
			
			var node = jQuery( this );
			
			if( node.attr( 'data-stop' ) ){
				
				var settingValue = otw_format_element_sticky_stop_selector( node.attr( 'data-stop' ) );
				
				if( jQuery( settingValue ).size() ){
					
					if( jQuery( settingValue ).position().top <= jQuery(window).scrollTop() ){
						
						node.css( 'position', 'unset' );
						node.parent().css( 'position', 'unset' );
					};
				};
			};
		} );
	} );
});

otw_format_element_sticky_stop_selector = function( selector ){
	
	if( selector.match( /^\#/ ) ){
		return selector;
	}
	if( selector.match( /^\./ ) ){
		return selector;
	}
	
	return '#' + selector + ', .' + selector;
};