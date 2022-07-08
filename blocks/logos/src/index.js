import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import attributes from './attributes';
import icon from './icon';

import './style.scss';

registerBlockType('innocode/block-logos', {
	apiVersion: 2,
	supports: {
		align: ['wide', 'full'],
		className: false,
	},
	attributes,
	providesContext: {
		'innocode/block-logos-scaleFactor': 'scaleFactor',
		'innocode/block-logos-backgroundColor': 'backgroundColor',
		'innocode/block-logos-color': 'color',
	},
	edit: Edit,
	save,
	icon,
});
