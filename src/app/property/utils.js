async function getProperties() {
    const response = await fetch('/api/property/list');
    const data = await response.json();
    return data.properties;
}

async function getPropertyById(id) {
    const response = await fetch(`/api/property/id/${id}`);
    const data = await response.json();
    return data.property;
}

export { getProperties, getPropertyById };