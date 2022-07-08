import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	AlignmentToolbar,
	RichText,
	BlockControls,
} from '@wordpress/block-editor';
import { PanelBody, PanelRow, RangeControl, ToggleControl, ColorPalette } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { BLOCK_CLASS_NAME } from './constants';
import {
	TITLE_TAG,
	HAS_TITLE_DEFAULT,
	HAS_DESCRIPTION_DEFAULT,
	SCALE_FACTOR_DEFAULT,
	ALIGNMENT_DEFAULT,
	COLOR_SCHEMES,
	BACKGROUND_COLOR_DEFAULT,
	COLOR_DEFAULT,
	ALLOWED_BLOCKS,
} from './constants/editor';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const {
		hasTitle = HAS_TITLE_DEFAULT,
		title,
		hasDescription = HAS_DESCRIPTION_DEFAULT,
		description,
		scaleFactor = SCALE_FACTOR_DEFAULT,
		alignment = ALIGNMENT_DEFAULT,
		backgroundColor = BACKGROUND_COLOR_DEFAULT,
		color = COLOR_DEFAULT,
	} = attributes;

	const onChange = (key, value) => {
		setAttributes({ [key]: value });
	};

	const onHasTitleChange = () => onChange('hasTitle', !hasTitle);
	const onTitleChange = (value) => onChange('title', value);
	const onHasDescriptionChange = () => onChange('hasDescription', !hasDescription);
	const onDescriptionChange = (value) => onChange('description', value);
	const onScaleFactorChange = (value) => onChange('scaleFactor', value);
	const onAlignmentChange = (value) => onChange('alignment', value);
	const onBackgroundColorChange = (value) => onChange('backgroundColor', value);
	const onColorChange = (value) => onChange('color', value);

	let listClassName = `${BLOCK_CLASS_NAME}__list`;

	if (alignment !== 'none') {
		listClassName += ` ${BLOCK_CLASS_NAME}__list_${alignment}`;
	}

	return (
		<div
			{...useBlockProps({
				className: BLOCK_CLASS_NAME,
			})}
		>
			<InspectorControls>
				<PanelBody title={__('Settings', 'innocode-block-logos')}>
					<PanelRow>
						<ToggleControl
							label={__('Show title', 'innocode-block-logos')}
							checked={hasTitle}
							onChange={onHasTitleChange}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Show description', 'innocode-block-logos')}
							checked={hasDescription}
							onChange={onHasDescriptionChange}
						/>
					</PanelRow>
					<RangeControl
						label={__('Scale factor', 'innocode-block-logos')}
						value={scaleFactor}
						onChange={onScaleFactorChange}
						withInputField={false}
						allowReset
						resetFallbackValue={SCALE_FACTOR_DEFAULT}
						min={1}
						max={1000}
						step={1}
					/>
				</PanelBody>
				<PanelBody title={__('Color', 'innocode-block-logos')} initialOpen={false}>
					<legend>{__('Background', 'innocode-block-logos')}</legend>
					<ColorPalette
						colors={COLOR_SCHEMES}
						value={backgroundColor}
						onChange={onBackgroundColorChange}
						className="components-color-list-picker__color-picker"
					/>
					<legend>{__('Text', 'innocode-block-logos')}</legend>
					<ColorPalette
						colors={COLOR_SCHEMES.slice().reverse()}
						value={color}
						onChange={onColorChange}
						className="components-color-list-picker__color-picker"
					/>
				</PanelBody>
			</InspectorControls>
			<div className={`${BLOCK_CLASS_NAME}__header`}>
				{hasTitle && (
					<RichText
						tagName={TITLE_TAG}
						value={title}
						placeholder={__('Title', 'innocode-block-logos')}
						onChange={onTitleChange}
						className={`${BLOCK_CLASS_NAME}__title`}
					/>
				)}
				{hasDescription && (
					<RichText
						tagName="div"
						multiline="p"
						value={description}
						placeholder={__('Description', 'innocode-block-logos')}
						onChange={onDescriptionChange}
						className={`${BLOCK_CLASS_NAME}__description`}
					/>
				)}
			</div>
			<div className={listClassName}>
				<BlockControls>
					<AlignmentToolbar value={alignment} onChange={onAlignmentChange} />
				</BlockControls>
				<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
			</div>
		</div>
	);
}
