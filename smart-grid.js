const smartgrid = require('smart-grid');

const settings = {
	filename: 'smart-grid',
	outputStyle: 'styl', /* less || scss || sass || styl */
	columns: 12, /* number of grid columns */
	offset: '30px', /* gutter width px || % */
	mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
	container: {
		maxWidth: '1170px', /* max-width оn very large screen */
		fields: '20px' /* side fields */
	},
	breakPoints: {
		md: {
			width: '992px',
			fields: '15px' /* set fields only if you want to change container.fields */
		},
		sm: {
			width: '768px'
		},
		xs: {
			width: '576px'
		}
		/*
        We can create any quantity of break points.

        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
	},
	mixinNames: {
		container: 'wrapper',
		row: 'row-flex',
		rowFloat: 'row-float',
		rowInlineBlock: 'row-ib',
		rowOffsets: 'row-offsets',
		column: 'col',
		size: 'size-col',
		columnFloat: 'col-float',
		columnInlineBlock: 'col-ib',
		columnPadding: 'col-padding',
		columnOffsets: 'col-offsets',
		shift: 'shift',
		from: 'from',
		to: 'to',
		fromTo: 'from-to',
		reset: 'reset',
		clearfix: 'cf',
		debug: 'debug'
	},
	tab: '  ',
	defaultMediaDevice: 'screen',
	detailedCalc: false
};

smartgrid('./app/styles/helpers', settings);
