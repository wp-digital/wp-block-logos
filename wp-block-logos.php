<?php
/**
 * Plugin Name:       Logos Block
 * Description:       List of logos with links.
 * Requires at least: 5.9
 * Requires PHP:      7.1
 * Version:           1.4.4
 * Author:            SMFB Dinamo
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wpd-blocks
 *
 * @package           wpd
 */

function wpd_block_logos_block_init() {
	register_block_type( __DIR__ . '/blocks/logos' );
}

add_action( 'init', 'wpd_block_logos_block_init' );

function wpd_block_logo_block_init() {
	register_block_type( __DIR__ . '/blocks/logo' );
}

add_action( 'init', 'wpd_block_logo_block_init' );

function wpd_block_logo_image_size() {
	list( $width, $height, $crop ) = apply_filters( 'wpd_block_logo_image_size', [ 256, 256, false ] );

	add_image_size( 'wpd-block-logo', $width, $height, $crop );
}

add_action( 'after_setup_theme', 'wpd_block_logo_image_size' );
