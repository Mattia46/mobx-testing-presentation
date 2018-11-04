import { reaction } from 'mobx';
import { Item } from './itemList.js';

it('should pass', () => {
    expect(true).toBe(true);
})

describe('testing the item', () => {
    const item = Item.create({
        name: 'Parking',
        done: false
    });

    it('should create an item', () => {
        expect(item).toEqual({
            name: 'Parking',
            done: false,
            number: 0
        })
    })

    it('should retrieve the name', () => {
        expect(item.getName).toBe('Parking');
    })

    it(`should change the 'done' value to true if 'completed()'`, () => {
        item.completed();
        expect(item.done).toBe(true);
    })

    it(`should update the name when 'changeName()'`, () => {
        item.changeName('London');
        expect(item.name).toBe('London');
    })

    it('should increase its number when change name', () => {
        reaction(() => item.name, () => item.number++)
        expect(item.number).toBe(0);
        item.changeName('newName');
        expect(item.number).toBe(1);
    })
})
