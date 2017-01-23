function addSection(data, newData) {
    data.sections.push(newData);
    return Object.assign({}, data);

}
export default addSection;