import {
    AnalyticsStore,
    analyticsActions,
} from './analytics';
import { Item } from './itemList.js';

import sinon from 'sinon';

describe('Analytics Store: ', () => {
    it('should pass', () => {
        expect(true).toBe(true);
    })

    it('should init analytics store', () => {
        const analyticsStore = AnalyticsStore.create({});
        expect(analyticsStore).toEqual({})
    })

    it('should change the name of item', () => {
        const fakeSelf = {
            itemStore: {
                changeName: console.log('FakeStore'),
                completed: sinon.stub(),
            }
        }
        const actions = analyticsActions(fakeSelf);
        actions.callItemChangeName();
        expect(fakeSelf.itemStore.completed.calledOnce).toBe(true);
    })
})

describe('Create the whole store and passing real stores env', () => {
    it('should changeName though analytics', () => {
        const itemStore = Item.create({
            name: 'Mattia',
            done: false,
        })
        const analyticsStore = AnalyticsStore.create({}, {
            itemStore: itemStore
        })
        expect(itemStore.name).toBe('Mattia');
        analyticsStore.changeName('Parking');
        expect(itemStore.name).toBe('Parking');
    })
})
