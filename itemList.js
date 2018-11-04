import { types } from 'mobx-state-tree';
import {
    reaction,
    autorun,
} from 'mobx';

export const Item = types
    .model({
        name: types.optional(types.string, ''),
        done: types.boolean,
        number: types.optional(types.number, 0),
    })
    .actions(self => ({
        afterCreate() {
            autorun(() => {
                if (self.name) {
                    console.log(`>>>>>>> its name is ${self.name}`)
                }
            }),
            reaction(
                () => self.done,
                () => console.log('its done')
            )
        },
        completed() {
            self.done = true;
        },
        changeName(newName) {
            self.name = newName;
        }
    }))
    .views(self => ({
        get getName() {
            return self.name
        }
    }))

