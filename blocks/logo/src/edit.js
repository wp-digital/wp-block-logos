import { isEmpty, has } from 'lodash';

import { useState, useEffect } from '@wordpress/element';
import {
	useBlockProps,
	InspectorControls,
	BlockControls,
	AlignmentToolbar,
	RichText,
	MediaUpload,
	MediaUploadCheck,
	/* eslint-disable-next-line @wordpress/no-unsafe-wp-apis */
	__experimentalLinkControl as LinkControl,
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	ToggleControl,
	RangeControl,
	ToolbarGroup,
	ToolbarButton,
	Popover,
	Button,
	Icon,
	Spinner,
} from '@wordpress/components';
import { link, linkOff } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

import { BLOCK_CLASS_NAME, NEW_TAB_REL } from './constants';
import { SIZE, ALLOWED_TYPES, WIDTH_BASE, HAS_CAPTION_DEFAULT, CAPTION_ALIGNMENT_DEFAULT } from './constants/editor';

import Logo from './icon';

import './editor.scss';

export default function Edit({ attributes, setAttributes, isSelected, context }) {
	const {
		href,
		target,
		rel,
		attachmentId,
		url,
		alt,
		title,
		naturalWidth,
		naturalHeight,
		width,
		height,
		hasCaption = HAS_CAPTION_DEFAULT,
		caption,
		captionAlignment = CAPTION_ALIGNMENT_DEFAULT,
		invert,
	} = attributes;
	const {
		'innocode/block-logos-scaleFactor': scaleFactor,
		'innocode/block-logos-backgroundColor': backgroundColor,
		'innocode/block-logos-color': color,
	} = context;
	const [isEditingURL, setIsEditingURL] = useState(false);
	const opensLinkInNewTab = target === '_blank';

	const onChange = (key, value) => {
		setAttributes({ [key]: value });
	};

	const onLogoChange = (media) => {
		const newAttributes = {
			attachmentId: media.id,
			alt: media.alt || media.filename,
		};

		if (has(media, ['sizes', SIZE])) {
			newAttributes.url = media.sizes[SIZE].url;
			newAttributes.naturalWidth = media.sizes[SIZE].width;
			newAttributes.naturalHeight = media.sizes[SIZE].height;
		} else {
			newAttributes.url = media.url;
			newAttributes.naturalWidth = media.width;
			newAttributes.naturalHeight = media.height;
		}

		setAttributes(newAttributes);
	};
	const onToggleOpenLinkInNewTab = (value) => {
		const newTarget = value ? '_blank' : undefined;

		let updatedRel = rel;

		if (newTarget && !rel) {
			updatedRel = NEW_TAB_REL;
		} else if (!newTarget && rel === NEW_TAB_REL) {
			updatedRel = undefined;
		}

		setAttributes({
			target: newTarget,
			rel: updatedRel,
		});
	};
	const onLinkChange = ({ url: newURL = '', opensInNewTab }) => {
		onChange('href', newURL);

		if (opensLinkInNewTab !== opensInNewTab) {
			onToggleOpenLinkInNewTab(opensInNewTab);
		}
	};
	const onHasCaptionChange = () => onChange('hasCaption', !hasCaption);
	const onCaptionChange = (value) => onChange('caption', value);
	const onCaptionAlignmentChange = (value) => onChange('captionAlignment', value);
	const onInvertChange = (value) => onChange('invert', value);

	const startLinkEditing = () => {
		setIsEditingURL(true);
	};
	const stopLinkEditing = () => {
		setIsEditingURL(false);
	};

	const preventDefault = (event) => {
		event.preventDefault();
	};

	const unlink = () => {
		setAttributes({
			href: undefined,
			target: undefined,
			rel: undefined,
		});
		setIsEditingURL(false);
	};

	const scale = (nW, nH) => {
		const ratio = nW / nH;
		const w = Math.floor(Math.pow(ratio, scaleFactor / 1000) * WIDTH_BASE).toString();
		const h = Math.floor(w / ratio).toString();

		setAttributes({
			width: w,
			height: h,
		});
	};

	useEffect(() => {
		if (naturalWidth && naturalHeight) {
			scale(naturalWidth, naturalHeight);
		}

		setAttributes({ backgroundColor, color });
	});

	const image =
		attachmentId && url ? (
			<img
				src={url}
				alt={alt}
				width={width}
				height={height}
				title={title}
				className={`${BLOCK_CLASS_NAME}__image`}
				style={invert ? { filter: `invert(${invert}%)` } : undefined}
			/>
		) : (
			<MediaUploadCheck>
				<MediaUpload
					onSelect={onLogoChange}
					allowedTypes={ALLOWED_TYPES}
					value={attachmentId}
					render={({ open }) => (
						<Button
							onClick={open}
							icon={<Icon icon={attachmentId ? Spinner : Logo} />}
							iconSize={46}
							text={__('Set logo', 'innocode-block-logos')}
							label={__('Logo placeholder', 'innocode-block-logos')}
							className={`${BLOCK_CLASS_NAME}__upload`}
						/>
					)}
				/>
			</MediaUploadCheck>
		);

	let captionClassName = `${BLOCK_CLASS_NAME}__caption`;

	if (captionAlignment !== 'none') {
		captionClassName += ` ${BLOCK_CLASS_NAME}__caption_${captionAlignment}`;
	}

	return (
		<figure
			{...useBlockProps({
				className: BLOCK_CLASS_NAME,
			})}
			style={backgroundColor ? { backgroundColor } : undefined}
		>
			<InspectorControls>
				<PanelBody title={__('Settings', 'innocode-block-logos')} initialOpen={false}>
					<PanelRow>
						<ToggleControl
							label={__('Show caption', 'innocode-block-logos')}
							checked={hasCaption}
							onChange={onHasCaptionChange}
						/>
					</PanelRow>
					{!!attachmentId && (
						<PanelRow>
							<RangeControl
								label={__('Invert', 'innocode-block-logos')}
								value={invert}
								onChange={onInvertChange}
								withInputField={false}
								allowReset
								resetFallbackValue={0}
								min={0}
								max={100}
								step={1}
							/>
						</PanelRow>
					)}
				</PanelBody>
			</InspectorControls>
			<BlockControls>
				<ToolbarGroup>
					{!href && <ToolbarButton icon={link} title={__('Link', 'innocode-block-logos')} onClick={startLinkEditing} />}
					{!!href && (
						<ToolbarButton
							icon={linkOff}
							title={__('Unlink', 'innocode-block-logos')}
							onClick={unlink}
							isActive={true}
						/>
					)}
				</ToolbarGroup>
			</BlockControls>
			{(isEditingURL || (isSelected && href)) && (
				<Popover position="bottom center" onClose={stopLinkEditing}>
					<LinkControl
						value={{ url: href, opensInNewTab: opensLinkInNewTab }}
						onChange={onLinkChange}
						onRemove={unlink}
						forceIsEditingLink={isEditingURL}
					/>
				</Popover>
			)}
			{href ? (
				<a
					href={href}
					target={target}
					rel={isEmpty(rel) ? undefined : rel}
					className={`${BLOCK_CLASS_NAME}__link`}
					onClick={preventDefault}
				>
					{image}
				</a>
			) : (
				image
			)}
			{hasCaption && (
				<>
					<BlockControls>
						<AlignmentToolbar value={captionAlignment} onChange={onCaptionAlignmentChange} />
					</BlockControls>
					<RichText
						tagName="figcaption"
						value={caption}
						aria-label={__('Logo caption text', 'innocode-block-logos')}
						placeholder={__('Add caption', 'innocode-block-logos')}
						onChange={onCaptionChange}
						inlineToolbar
						className={captionClassName}
						style={color ? { color } : undefined}
					/>
				</>
			)}
		</figure>
	);
}
