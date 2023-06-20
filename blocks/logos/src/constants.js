import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

export const BLOCK_CLASS_NAME = 'wpd-block-logos';

export const TITLE_TAG = applyFilters('wpd.block-logos.title.tag', 'h3');

export const HAS_TITLE_DEFAULT = applyFilters('wpd.block-logos.has_title.default', true);
export const HAS_DESCRIPTION_DEFAULT = applyFilters('wpd.block-logos.has_description.default', false);

export const SCALE_FACTOR_DEFAULT = applyFilters('wpd.block-logos.scale_factor.default', 525);

export const ALIGNMENT_DEFAULT = applyFilters('wpd.block-logos.alignment.default', 'none');

export const COLOR_SCHEMES = applyFilters('wpd.block-logos.color.schemes', [
	{
		name: __('Dark', 'wpd-blocks'),
		color: '#000',
	},
	{
		name: __('Light', 'wpd-blocks'),
		color: '#fff',
	},
]);
export const BACKGROUND_COLOR_DEFAULT = applyFilters('wpd.block-logos.background_color.default', undefined);
export const COLOR_DEFAULT = applyFilters('wpd.block-logos.color.default', undefined);

export const ALLOWED_BLOCKS = ['wpd/block-logo'];

export const TEMPLATE = applyFilters('wpd.block-logos.template', [['wpd/block-logo', {}]]);
