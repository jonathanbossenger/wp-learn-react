<?php
/**
 * Plugin Name: WP Learn React: Basic Block
 */

add_action( 'init', 'wp_learn_react_register_block' );
function wp_learn_react_register_block() {
	register_block_type( __DIR__ );
}
