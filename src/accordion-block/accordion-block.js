import { __ } from "@wordpress/i18n";
import {
  InnerBlocks,
  useBlockProps,
  useInnerBlocksProps,
} from "@wordpress/block-editor";

if (!wp.blocks.getBlockType("wkode/accordion-block")) {
  wp.blocks.registerBlockType("wkode/accordion-block", {
    title: __("Accordion", "wkode"),
    icon: "images-alt",
    category: "wkode",
    attributes: {
      title: {
        type: "string",
        default: "",
      },
    },
    edit: (props) => {
      const { attributes, setAttributes } = props;
      const blockProps = useBlockProps();
      const innerBlocksProps = useInnerBlocksProps({});

      const updateTitle = (e) => {
        setAttributes({ title: e.target.value });
      };

      return (
        <div {...blockProps}>
          <input
            type='text'
            placeholder='Title'
            value={attributes.title}
            onChange={updateTitle}
          />
          <div className='accordion-content' {...innerBlocksProps} />
        </div>
      );
    },
    save: (props) => {
      const { attributes } = props;
      const blockProps = useBlockProps.save();
      const innerBlocksProps = useInnerBlocksProps.save();

      return (
        <div {...blockProps}>
          <div className='accordion-content' {...innerBlocksProps} />
        </div>
      );
    },
  });
}
