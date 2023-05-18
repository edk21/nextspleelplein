const BASE_URL = "http://localhost:3000"

// all the children Data
export const getRecords = async () => {
    const response = await fetch(`${BASE_URL}/api/children`)
    const json = await response.json()

    return json
}

// single child Data
export const getRecord = async (childId) => {
    const response = await fetch(`${BASE_URL}/api/children/${childId}`)
    const json = await response.json()

    if (json) return json
    return {}
}

// posting a new child
export async function addChild(formData) {
    try {
        const Options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        }
        const response = await fetch(`${BASE_URL}/api/children`, Options)
        const json = await response.json()

        return json
    } catch (error) {
        return error
    }
}

// update a child Data
export async function updateChild(childId, formData) {
    try {
        const Options = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        }

        const response = await fetch(`${BASE_URL}/api/children/${childId}`, Options)
        const json = await response.json()

        return json
    } catch (error) {
        return error
    }
}

// delete a child Data
export async function deleteChild(childId) {
    try {
        const Options = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        }
        const response = await fetch(`${BASE_URL}/api/children/${childId}`, Options)
        const json = await response.json()

        return json
    } catch (error) {
        return error
    }
}