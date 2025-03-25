import { IntensitySegments } from '../src/IntensitySegments';

describe('Test IntensitySegments:', () => {

    test('Here is an example sequence:', () => {
        const segments = new IntensitySegments();
        expect(segments.toString()).toEqual('[]');
        segments.add(10, 30, 1);
        expect(segments.toString()).toEqual('[[10,1],[30,0]]');
        segments.add(20, 40, 1);
        expect(segments.toString()).toEqual('[[10,1],[20,2],[30,1],[40,0]]');
        segments.add(10, 40, -2);
        expect(segments.toString()).toEqual('[[10,-1],[20,0],[30,-1],[40,0]]');
    });

    test('Another example sequence:', () => {
        const segments = new IntensitySegments();
        expect(segments.toString()).toEqual('[]');
        segments.add(10, 30, 1);
        expect(segments.toString()).toEqual('[[10,1],[30,0]]');
        segments.add(20, 40, 1);
        expect(segments.toString()).toEqual('[[10,1],[20,2],[30,1],[40,0]]');
        segments.add(10, 40, -1);
        expect(segments.toString()).toEqual("[[20,1],[30,0]]");
        segments.add(10, 40, -1);
        expect(segments.toString()).toEqual('[[10,-1],[20,0],[30,-1],[40,0]]');
    });

    test('This is an example for testing the set method:', () => {
        const segments = new IntensitySegments();
        expect(segments.toString()).toEqual('[]');
        segments.set(10, 30, 1);
        expect(segments.toString()).toEqual('[[10,1],[30,0]]');
        segments.set(20, 30, 2);
        segments.set(30, 40, 1);
        expect(segments.toString()).toEqual('[[10,1],[20,2],[30,1],[40,0]]');
        segments.set(10, 20, -1);
        segments.set(20, 30, 0);
        segments.set(30, 40, -1);
        expect(segments.toString()).toEqual('[[10,-1],[20,0],[30,-1],[40,0]]');
    });

    test('This is an example for testing the mixed use of the add and set methods:', () => {
        const segments = new IntensitySegments();
        expect(segments.toString()).toEqual('[]');
        segments.add(10, 30, 1);
        expect(segments.toString()).toEqual('[[10,1],[30,0]]');
        segments.set(20, 30, 2);
        segments.set(30, 40, 1);
        expect(segments.toString()).toEqual('[[10,1],[20,2],[30,1],[40,0]]');
        segments.add(10, 40, -2);
        expect(segments.toString()).toEqual('[[10,-1],[20,0],[30,-1],[40,0]]');
    });
});