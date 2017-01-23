const deleteHomeworkQuiz = (data, newData) => {

    const sectionIndex = newData.sectionIndex;
    const homeworkQuizIndex = newData.homeworkQuizIndex;

    const sections = data.sections.filter(section => section.type === 'homeworkQuiz');

    sections[sectionIndex].definition.quizzes.splice(homeworkQuizIndex, 1);

    return Object.assign({}, data, sections);
};

export default deleteHomeworkQuiz;