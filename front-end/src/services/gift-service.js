const giftService = {
    load: function (limit) {
        return fetch(`http://localhost:9999/api/gift${limit ? `?limit=${limit}` : ''}`).then(res => res.json());
    },

    create: function (data) {
        return fetch(`http://localhost:9999/api/gift/create`, {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        }).then(res => res.json());
    },

    addGiver: function(id, user) {
        return fetch(`http://localhost:9999/api/gift/addGiver/${id}`, {
            body: JSON.stringify(user),
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        }).then(res => res.json());
    },

    removeGiver: function(id, user) {
        return fetch(`http://localhost:9999/api/gift/removeGiver/${id}`, {
            body: JSON.stringify(user),
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        }).then(res => res.json());
    }
};

export default giftService;