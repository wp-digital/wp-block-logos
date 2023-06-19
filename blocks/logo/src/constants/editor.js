import { applyFilters } from '@wordpress/hooks';

export const SIZE = applyFilters('wpd.block-logo.size', 'wpd-block-logo');
export const ALLOWED_TYPES = applyFilters('wpd.block-logo.allowed_types', ['image']);
export const WIDTH_BASE = applyFilters('wpd.block-logo.width_base', 75);

export const HAS_CAPTION_DEFAULT = applyFilters('wpd.block-logo.has_caption.default', false);
export const CAPTION_ALIGNMENT_DEFAULT = applyFilters('wpd.block-logo.caption_alignment.default', 'none');

export const HAS_ICON_DEFAULT = applyFilters('wpd.block-logo.has_icon.default', false);
export const ICONS = applyFilters('wpd.block-logo.icons', applyFilters('wpd.block.icons', []));
