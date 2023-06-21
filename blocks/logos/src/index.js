import { registerBlockType } from '@wordpress/blocks';
import { __, sprintf } from '@wordpress/i18n';

import Edit from './edit';
import save from './save';
import attributes from './attributes';
import icon from './icon';

import './style.scss';

registerBlockType('wpd/block-logos', {
	apiVersion: 2,
	supports: {
		align: ['wide', 'full'],
		className: false,
	},
	attributes,
	providesContext: {
		'wpd/block-logos-scaleFactor': 'scaleFactor',
		'wpd/block-logos-backgroundColor': 'backgroundColor',
		'wpd/block-logos-color': 'color',
	},
	edit: Edit,
	save,
	icon,
	example: {
		attributes: {
			title: __('Logos', 'wpd-blocks'),
			hasDescription: true,
			description: sprintf('<p>%s</p>', __('This is a description', 'wpd-blocks')),
		},
		innerBlocks: [
			{
				name: 'wpd/block-logo',
				attributes: {
					hasCaption: true,
					caption: sprintf('<p>%s</p>', __('This is a caption', 'wpd-blocks')),
				},
			},
			{
				name: 'wpd/block-logo',
				attributes: {
					hasCaption: true,
					caption: sprintf('<p>%s</p>', __('This is a caption', 'wpd-blocks')),
				},
			},
		],
	},
});
