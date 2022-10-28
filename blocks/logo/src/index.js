import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import attributes from './attributes';
import icon from './icon';

import './style.scss';

registerBlockType('innocode/block-logo', {
	apiVersion: 2,
	supports: {
		className: false,
	},
	attributes,
	usesContext: [
		'innocode/block-logos-scaleFactor',
		'innocode/block-logos-backgroundColor',
		'innocode/block-logos-color',
	],
	edit: Edit,
	save,
	icon,
	parent: ['innocode/block-logos', 'innocode/block-slide'],
});
