import mocha from 'mocha';
import chai from 'chai';
import * as App from '../src/App';

describe('get()', () => {
	it('args pack 1', () => {
		const a = {};

		const b = App.get(a, 'b');
		const bc = App.get(a, 'b.c');

		chai.expect(b).to.eql(undefined);
		chai.expect(bc).to.eql(undefined);
	});

	it('args pack 2', () => {
		const a = { b: {} };

		const b = App.get(a, 'b');
		const bc = App.get(a, 'b.c');

		chai.expect(b).to.eql({});
		chai.expect(bc).to.eql(undefined);
	});

	it('args pack 3', () => {
		const a = { b: { c: 'test' } };

		const b = App.get(a, 'b');
		const bc = App.get(a, 'b.c');

		chai.expect(b).to.eql({ c: 'test' });
		chai.expect(bc).to.eql('test');
	});

	it('args pack 4', () => {
		const a = { b: { c: 'test', d: null } };

		const b = App.get(a, 'b');
		const bc = App.get(a, 'b.c');
		const bd = App.get(a, 'b.d');
		const bde = App.get(a, 'b.d.e');

		chai.expect(b).to.eql({ c: 'test', d: null });
		chai.expect(bc).to.eql('test');
		chai.expect(bd).to.eql(null);
		chai.expect(bde).to.eql(undefined);
	});
});

describe('has()', () => {
	it('args pack 1', () => {
		const a = {};

		const b = App.has(a, 'b');
		const bc = App.has(a, 'b.c');

		chai.expect(b).to.eql(false);
		chai.expect(bc).to.eql(false);
	});

	it('args pack 2', () => {
		const a = { b: {} };

		const b = App.has(a, 'b');
		const bc = App.has(a, 'b.c');

		chai.expect(b).to.eql(true);
		chai.expect(bc).to.eql(false);
	});

	it('args pack 3', () => {
		const a = { b: { c: 'test' } };

		const b = App.has(a, 'b');
		const bc = App.has(a, 'b.c');

		chai.expect(b).to.eql(true);
		chai.expect(bc).to.eql(true);
	});

	it('args pack 4', () => {
		const a = { b: { c: 'test', d: null } };

		const b = App.has(a, 'b');
		const bc = App.has(a, 'b.c');
		const bd = App.has(a, 'b.d');
		const bde = App.has(a, 'b.d.e');

		chai.expect(b).to.eql(true);
		chai.expect(bc).to.eql(true);
		chai.expect(bd).to.eql(true);
		chai.expect(bde).to.eql(false);
	});
});
