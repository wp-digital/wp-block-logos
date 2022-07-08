import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

export const TITLE_TAG = applyFilters('innocode.block-logos.title.tag', 'h3');

export const HAS_TITLE_DEFAULT = applyFilters('innocode.block-logos.has_title.default', true);
export const HAS_DESCRIPTION_DEFAULT = applyFilters('innocode.block-logos.has_description.default', false);

export const SCALE_FACTOR_DEFAULT = applyFilters('innocode.block-logos.scale_factor.default', 525);

export const ALIGNMENT_DEFAULT = applyFilters('innocode.block-logos.alignment.default', 'none');

export const COLOR_SCHEMES = applyFilters('innocode.block-logos.color.schemes', [
	{
		name: __('Dark', 'innocode-block-logos'),
		color: '#000',
	},
	{
		name: __('Light', 'innocode-block-logos'),
		color: '#fff',
	},
]);
export const BACKGROUND_COLOR_DEFAULT = applyFilters('innocode.block-logos.background_color.default', undefined);
export const COLOR_DEFAULT = applyFilters('innocode.block-logos.color.default', undefined);

export const ALLOWED_BLOCKS = ['innocode/block-logo'];
