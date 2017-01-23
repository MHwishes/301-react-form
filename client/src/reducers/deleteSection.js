const deleteSection = (data, sectionIndex) => {

    let newData = Object.assign({}, data);

    let logicSections = newData.sections.filter(section => section.type === 'logicPuzzle');

    newData.sections.splice((logicSections.length + sectionIndex), 1);

    return newData;
};

export default deleteSection;
