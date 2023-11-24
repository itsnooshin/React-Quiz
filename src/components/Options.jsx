function Options({ questions, answers, dispatch, answer}) {

  return (
    <div className="options">
      {answers.map((option, index) => (
        <button
          className={`btn btn-option 
           ${
             answer !== null
               ? index === questions.correctOption
                 ? 'correct'
                 : 'wrong'
               : ''
           }  
            //  the inital state is null age select shode bia rangesho taghiir bede
           ${index === answer ? 'answer' : ''} `}
          onClick={() => dispatch({ type: 'newAnswer', payLoad: index })}
          key={index}
          disabled={answer !== null}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;

