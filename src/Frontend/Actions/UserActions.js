export function fetchUser() {
    return {
        type: 'FETCH_USER_FULFILLED',
        payload: {
            user: {
                name: 'Jacob',
                age: 22
            }
        }
    }
}