import { BLOCK_CLASS_NAME } from './constants';
import {
	HAS_TITLE_DEFAULT,
	HAS_DESCRIPTION_DEFAULT,
	SCALE_FACTOR_DEFAULT,
	BACKGROUND_COLOR_DEFAULT,
	COLOR_DEFAULT,
} from './constants/editor';

export default {
	hasTitle: {
		type: 'boolean',
		default: HAS_TITLE_DEFAULT,
	},
	title: {
		type: 'string',
		source: 'html',
		selector: `.${BLOCK_CLASS_NAME}__title`,
	},
	hasDescription: {
		type: 'boolean',
		default: HAS_DESCRIPTION_DEFAULT,
	},
	description: {
		type: 'string',
		source: 'html',
		selector: `.${BLOCK_CLASS_NAME}__description`,
	},
	scaleFactor: {
		type: 'number',
		default: SCALE_FACTOR_DEFAULT,
	},
	alignment: {
		type: 'string',
		default: 'none',
	},
	backgroundColor: {
		type: 'string',
		default: BACKGROUND_COLOR_DEFAULT,
	},
	color: {
		type: 'string',
		default: COLOR_DEFAULT,
	},
};
