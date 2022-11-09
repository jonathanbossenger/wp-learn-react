/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

// Register the block
registerBlockType( 'wp-learn-react/basic-block', {
    edit: function () {
        return <p> Hello React World (from the editor)</p>;
    },
    save: function () {
        return <p> Hello React World (from the frontend) </p>;
    },
} );