import { BLOCK_CLASS_NAME } from './constants';
import { HAS_CAPTION_DEFAULT, CAPTION_ALIGNMENT_DEFAULT } from './constants/editor';

export default {
	href: {
		type: 'string',
		source: 'attribute',
		selector: 'a',
		attribute: 'href',
	},
	target: {
		type: 'string',
		source: 'attribute',
		selector: 'a',
		attribute: 'target',
	},
	rel: {
		type: 'string',
		source: 'attribute',
		selector: 'a',
		attribute: 'rel',
	},
	title: {
		type: 'string',
		source: 'attribute',
		selector: 'a',
		attribute: 'title',
	},
	attachmentId: {
		type: 'integer',
		default: 0,
	},
	url: {
		type: 'string',
		source: 'attribute',
		selector: 'img',
		attribute: 'src',
	},
	naturalWidth: {
		type: 'number',
	},
	naturalHeight: {
		type: 'number',
	},
	width: {
		type: 'string',
		source: 'attribute',
		selector: 'img',
		attribute: 'width',
	},
	height: {
		type: 'string',
		source: 'attribute',
		selector: 'img',
		attribute: 'height',
	},
	alt: {
		type: 'string',
		source: 'attribute',
		selector: 'img',
		attribute: 'alt',
	},
	hasCaption: {
		type: 'boolean',
		default: HAS_CAPTION_DEFAULT,
	},
	caption: {
		type: 'string',
		source: 'html',
		selector: `.${BLOCK_CLASS_NAME}__caption`,
	},
	captionAlignment: {
		type: 'string',
		default: CAPTION_ALIGNMENT_DEFAULT,
	},
	backgroundColor: {
		type: 'string',
	},
	color: {
		type: 'string',
	},
	invert: {
		type: 'number',
		default: 0,
	},
};
