import {
    types,
    getEnv,
} from 'mobx-state-tree';

const analyticsModel = {}

const analyticsViews = self => ({
    get itemStore() {
        return getEnv(self).itemStore;
    }
})

const analyticsActions = self => ({
    callItemChangeName() {
        self.itemStore.completed();
    },
    changeName(newName) {
        self.itemStore.changeName(newName)
    }
})

const AnalyticsStore = types
    .model(
        'AnalyticsStore',
        analyticsModel
    )
    .views(analyticsViews)
    .actions(analyticsActions)

export {
    AnalyticsStore,
    analyticsViews,
    analyticsActions,
};
