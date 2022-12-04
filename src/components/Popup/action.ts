export type ActionSortType = {
    type: string,
    payload: string
}


export const changeSortType = (sortType: string): ActionSortType => (
    {
        type: 'CHANGE_SORT_TYPE',
        payload: sortType
    }
)