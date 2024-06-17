import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps } from "@wordpress/block-editor";

registerBlockType("wkode/wiki-stats", {
  title: __("Wiki Stats", "wkode"),
  icon: "analytics",
  category: "wkode",
  attributes: {
    year: {
      type: "string",
      default: new Date().getFullYear().toString(),
    },
    month: {
      type: "string",
      default: (new Date().getMonth() + 1).toString().padStart(2, "0"),
    },
    day: {
      type: "string",
      default: new Date().getDate().toString().padStart(2, "0"),
    },
  },
  edit: (props) => {
    const { attributes, setAttributes } = props;
    const blockProps = useBlockProps();

    const updateDate = (datePart, value) => {
      setAttributes({ [datePart]: value });
    };

    return (
      <div {...blockProps}>
        <label>Year:</label>
        <input
          type='text'
          value={attributes.year}
          onChange={(e) => updateDate("year", e.target.value)}
        />
        <label>Month:</label>
        <input
          type='text'
          value={attributes.month}
          onChange={(e) => updateDate("month", e.target.value)}
        />
        <label>Day:</label>
        <input
          type='text'
          value={attributes.day}
          onChange={(e) => updateDate("day", e.target.value)}
        />
      </div>
    );
  },
  save: () => null,
});
