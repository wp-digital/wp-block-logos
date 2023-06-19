import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import attributes from './attributes';
import icon from './icon';

import './style.scss';

registerBlockType('wpd/block-logo', {
	apiVersion: 2,
	supports: {
		className: false,
	},
	attributes,
	usesContext: ['wpd/block-logos-scaleFactor', 'wpd/block-logos-backgroundColor', 'wpd/block-logos-color'],
	edit: Edit,
	save,
	icon,
	parent: ['wpd/block-logos', 'wpd/block-slide'],
});
