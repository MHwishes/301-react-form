const editSectionName = (data, sectionInfo) => {

    const sections = data.sections.filter(section => section.type === 'homeworkQuiz');
    sections[sectionInfo.sectionIndex].title = sectionInfo.sectionName;
    return Object.assign({}, data, sections);
};

export default editSectionName;