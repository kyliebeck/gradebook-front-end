const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/assignments`;


const index = async () => {
    try {
        const res = await fetch(BASE_URL, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        return res.json();
    } catch (error) {
        console.log(error);
    }
};

const show = async (assignmentId) => {
    try {
        const res = await fetch(`${BASE_URL}/${assignmentId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        return res.json();
    } catch (error) {
        console.log(error);
    }
};

const create = async (formData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            // The formData, converted to JSON, is sent as the body
            // This will be received on the back-end as req.body
            body: JSON.stringify(formData),
        });
        return res.json();
    } catch (err) {
        console.log(err);
    }
};

const update = async (formData) => {
    console.log('update')
    try {
        const res = await fetch(`${BASE_URL}/${assignmentId}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        return res.json();
    } catch (err) {
        console.log(err);
    }
}

const deleteAssignment = async (assignmentId) => {
    try {
        const res = await fetch(`${BASE_URL}/${assignmentId}`, {
            // We specify that this is a 'DELETE' request
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return res.json();
    } catch (err) {
        console.log(err);
    }
};

console.log(await index());
export {
    index,
    show,
    create,
    update,
    deleteAssignment,

};