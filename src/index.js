/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

// Register the block
registerBlockType( 'wp-learn-react/basic-block', {
    edit() {
        const blockProps = useBlockProps();

        return (
            <p { ...blockProps }>Hello React World (from the editor, in green).</p>
        );
    },
    save() {
        const blockProps = useBlockProps.save();

        return (
            <p { ...blockProps }>Hello React World (from the frontend, in red).</p>
        );
    },
} );